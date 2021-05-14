import { ADD_BET_ITEM, REMOVE_BET_ITEMS } from "../actions/actionsType";

const initialState = {
	slip: {
		betItems: [],
		maxWinning: "",
	},
};

const bettingReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_BET_ITEM:
			return {
				...state,
				slip: {
					...state?.slip,
					betItems: [...state?.slip?.betItems, payload],
				},
			};
		case REMOVE_BET_ITEMS:
			return false;
		default:
			return state;
	}
};

export default bettingReducer;
