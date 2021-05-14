import { handleAddBetItem } from "../redux/actions/bettingActions";

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem("slip");
		console.log("serializedState: ", serializedState);
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (error) {
		console.error(error);
	}
	return undefined;
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("slip", serializedState);
	} catch (error) {
		console.error(error);
	}
};

export const handleOddClick = (event, odd, market, dispatch) => {
	const { N, C, NID } = { ...event };
	const { O, ID } = { ...odd };
	const { ED, ESD, MBS } = { ...market };
	const isDisabled = O === null;

	const betItem = {
		N,
		C,
		NID,
		O,
		ID,
		ED,
		ESD,
		MBS,
	};
	if (!isDisabled) {
		dispatch(handleAddBetItem(betItem));
	}
};
