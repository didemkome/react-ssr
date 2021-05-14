import { ADD_BET_ITEM, REMOVE_BET_ITEMS } from "./actionsType";
import store from "../store";

export const addBetItem = (betItem) => ({
	type: ADD_BET_ITEM,
	payload: betItem,
});

export const removeBetItem = () => ({
	type: REMOVE_BET_ITEMS,
});

export const handleAddBetItem = (betItem) => (dispatch) => {
	const currentBetItems = store?.getState()?.betting?.slip?.betItems;
	console.log("currentBetItems: ", currentBetItems);
	dispatch(addBetItem(betItem));
};
