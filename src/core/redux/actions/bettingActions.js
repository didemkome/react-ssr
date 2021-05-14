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
	dispatch(updateBetItems(currentBetItems.filter((item) => item.C !== betItem.C)));
};

export const handleAddBetItem = (betItem) => (dispatch) => {
	const currentBetItems = store?.getState()?.betting?.slip?.betItems;
	const sameEvent = currentBetItems.find((item) => item.C === betItem.C);
	const removeOdd = sameEvent?.O === betItem?.O;
	if (removeOdd) {
		const element = currentBetItems.find((item) => item.C === betItem.C);
		/* Kuponda Aynı Maç, aynı oran varsa */
		dispatch(handleRemoveBetItem(element));
	} else if (currentBetItems.some((item) => item.C === betItem.C)) {
		/* Kuponda Aynı Maç ama farklı oran varsa */
		dispatch(handleRemoveBetItem(betItem));
		dispatch(addBetItem(betItem));
	} else {
		/* Kupona ilk defa maç ekleniyorsa */
		dispatch(addBetItem(betItem));
	}
};
