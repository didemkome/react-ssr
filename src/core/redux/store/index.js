import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { throttle } from "underscore";
import rootReducer from "../reducers/rootReducer";
import { loadState, saveState } from "../../utils";

let persistedState = loadState();

if (!persistedState) {
	persistedState = undefined;
}

const middlewares = [];
let logger;
middlewares.push(thunk);
if (process.env.NODE_ENV === `development`) {
	logger = createLogger({
		collapsed: true,
	});
	middlewares.push(logger);
}

const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(...middlewares)));

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
