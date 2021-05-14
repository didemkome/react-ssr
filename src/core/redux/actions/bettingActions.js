import { ADD_BET_ITEM, CLEAR_BET_ITEMS, SET_MAX_WINNING, UPDATE_BET_ITEMS } from "./actionsType";
import store from "../store";

export const addBetItem = (betItem) => ({
	type: ADD_BET_ITEM,
	payload: betItem,
});

export const clearBetItems = () => ({
	type: CLEAR_BET_ITEMS,
});

export const updateBetItems = (betItems) => ({
	type: UPDATE_BET_ITEMS,
	payload: betItems,
});

export const setMaxWinning = (data) => ({
	type: SET_MAX_WINNING,
	payload: data,
});

export const handleClearBetItems = () => (dispatch) => {
	dispatch(clearBetItems());
};

export const handleRemoveBetItem = (betItem) => (dispatch) => {
	const currentBetItems = store?.getState()?.betting?.slip?.betItems;
	if (currentBetItems.length === 1) {
		dispatch(handleClearBetItems());
	}
	dispatch(updateBetItems(currentBetItems.filter((item) => item.ED !== betItem.ED)));
};

export const handleAddBetItem = (betItem) => (dispatch) => {
	const currentBetItems = store?.getState()?.betting?.slip?.betItems;
	if (currentBetItems.some((item) => item.NID === betItem.NID)) {
		if (currentBetItems.some((item) => item.O === betItem.O)) {
			const element = currentBetItems.find((item) => item.O === betItem.O);
			dispatch(handleRemoveBetItem(element));
		} else {
			dispatch(handleRemoveBetItem(betItem));
			dispatch(addBetItem(betItem));
		}
	}
	if (currentBetItems.some((item) => item.NID !== betItem.NID) || currentBetItems?.length === 0) {
		dispatch(addBetItem(betItem));
	}
};
