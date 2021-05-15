import { handleAddBetItem } from "../redux/actions/bettingActions";

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

export const betItemsEqualCheck = (prevProps, nextProps) => {
	console.log("prevProps: ", prevProps);
	console.log("nextProps: ", nextProps);
	if (nextProps?.betItems) {
		const cond1 = nextProps?.betItems.some((item) => item?.NID === nextProps?.event?.NID);
		const cond2 = prevProps?.betItems.some((item) => item?.NID === prevProps?.event?.NID);
		return !cond1 && !cond2;
	}
	return false;
};
