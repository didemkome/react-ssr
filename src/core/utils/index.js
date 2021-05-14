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
