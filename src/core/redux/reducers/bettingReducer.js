import { ADD_BET_ITEM, CLEAR_BET_ITEMS, SET_MAX_WINNING, UPDATE_BET_ITEMS } from "../actions/actionTypes";

export const initialState = {
	slip: {
		betItems: [],
		maxWinning: "0.00",
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

		case SET_MAX_WINNING: {
			return {
				...state,
				slip: {
					...state.slip,
					maxWinning: payload,
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
