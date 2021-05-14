import { ADD_BET_ITEM, REMOVE_BET_ITEMS } from "./actionsType";

export const addBetItem = (betItem) => ({
	type: ADD_BET_ITEM,
	payload: betItem,
});

export const removeBetItem = () => ({
	type: REMOVE_BET_ITEMS,
});

export const handleAddBetItem = (betItem) => {
	console.log("betItem: ", betItem);
};
