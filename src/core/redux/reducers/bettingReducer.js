import { ADD_BET_ITEM, CLEAR_BET_ITEMS, UPDATE_BET_ITEMS } from "../actions/actionsType";

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

		case UPDATE_BET_ITEMS: {
			return {
				...state,
				slip: {
					...state.slip,
					betItems: [...payload],
				},
			};
		}
		case CLEAR_BET_ITEMS:
			return {
				...state,
				slip: {
					...initialState?.slip,
				},
			};
		default:
			return state;
	}
};

export default bettingReducer;
