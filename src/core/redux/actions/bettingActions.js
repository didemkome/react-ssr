import { ADD_BET_ITEM, CLEAR_BET_ITEMS, UPDATE_BET_ITEMS } from "./actionsType";
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
	if (currentBetItems.some((item) => item.ID === betItem.ID)) {
		const element = currentBetItems.find((item) => item.ID === betItem.ID);
		dispatch(handleRemoveBetItem(element));
	}
	if (currentBetItems.some((item) => item.C === betItem.C)) {
		dispatch(handleRemoveBetItem(betItem));
		dispatch(addBetItem(betItem));
	}
	if (currentBetItems.length < 20) {
		dispatch(addBetItem(betItem));
	}
};
