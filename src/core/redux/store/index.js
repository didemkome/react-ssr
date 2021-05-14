import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "../reducers/rootReducer";

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

export default store;
