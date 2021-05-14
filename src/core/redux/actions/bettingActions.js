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
	console.log("currentBetItems: ", currentBetItems);
	if (currentBetItems.length === 1) {
		dispatch(handleClearBetItems());
	}
	dispatch(updateBetItems(currentBetItems.filter((item) => item.C !== betItem.C)));
};

export const handleAddBetItem = (betItem) => (dispatch) => {
	const currentBetItems = store?.getState()?.betting?.slip?.betItems;
	/*	if (currentBetItems.some((item) => item.C === betItem.C)) {
		if (currentBetItems.some((item) => item.O === betItem.O)) {
			const element = currentBetItems.find((item) => item.O === betItem.O);
			console.log("remove");
			dispatch(handleRemoveBetItem(element));
		} else {
			console.log("aynı event");
			dispatch(handleRemoveBetItem(betItem));
			dispatch(addBetItem(betItem));
		}
	} */
	if (currentBetItems.some((item) => item.C === betItem.C) && currentBetItems.some((item) => item.O === betItem.O)) {
		const element = currentBetItems.find((item) => item.C === betItem.C);
		console.log("remove");
		dispatch(handleRemoveBetItem(element));
	} else if (currentBetItems.some((item) => item.C === betItem.C)) {
		/* Kuponda Aynı Maç ama farklı oran varsa */
		console.log("aynı event farklı oran");
		dispatch(handleRemoveBetItem(betItem)); /* Önce mevcut oranı siliyoruz */
		dispatch(addBetItem(betItem)); /* Sonra yeni oranı ekliyoruz */
	} else {
		console.log("ilk defa eklendi eventten");
		dispatch(addBetItem(betItem));
	}
};
