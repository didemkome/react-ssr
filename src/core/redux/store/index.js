import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { throttle } from "underscore";
import rootReducer from "../reducers/rootReducer";
import { loadState, saveState } from "../../utils";

/* let persistedState = loadState();

if (!persistedState) {
	persistedState = undefined;
} */

const middlewares = [];
let logger;
middlewares.push(thunk);
if (process.env.NODE_ENV === `development`) {
	logger = createLogger({
		collapsed: true,
	});
	middlewares.push(logger);
}
const makeConfiguredStore = (reducer, initialState) => createStore(reducer, initialState, applyMiddleware(...middlewares));

// we need it only on client side
// eslint-disable-next-line global-require
const { persistStore, persistReducer } = require("redux-persist");
// eslint-disable-next-line global-require
const storage = require("redux-persist/lib/storage").default;

const persistConfig = {
	key: "slip",
	storage,
	timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = makeConfiguredStore(persistedReducer);

store.__persistor = persistStore(store); // Nasty hack

store.subscribe(
	throttle(
		() => {
			saveState(store.getState());
		},
		500,
		{ leading: false, trailing: true },
	),
);

export default store;
