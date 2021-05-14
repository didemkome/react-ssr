import { ADD_BET_ITEM, REMOVE_BET_ITEMS } from "../actions/actionsType";

const initialState = {
	slip: [],
};

const bettingReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_BET_ITEM:
			return [...state];
		case REMOVE_BET_ITEMS:
			return false;
		default:
			return state;
	}
};

export default bettingReducer;
