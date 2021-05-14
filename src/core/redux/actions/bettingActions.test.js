import * as actions from "./bettingActions";
import * as types from "./actionTypes";

describe("betting actions", () => {
	it("should create an action to add a bet item", () => {
		const expectedAction = {
			type: types.ADD_BET_ITEM,
			payload: {
				N: "Real Madrid - Bayern1",
				C: "2001",
				NID: "2146483648",
				O: "2.30",
				ID: "0",
				ED: "1550572074000",
				ESD: "1550572074000",
				MBS: "4",
			},
		};

		expect(
			actions.addBetItem({
				N: "Real Madrid - Bayern1",
				C: "2001",
				NID: "2146483648",
				O: "2.30",
				ID: "0",
				ED: "1550572074000",
				ESD: "1550572074000",
				MBS: "4",
			}),
		).toEqual(expectedAction);
	});
});

it("should create an action to clear a bet item", () => {
	const expectedAction = {
		type: types.CLEAR_BET_ITEMS,
	};

	expect(actions.clearBetItems()).toEqual(expectedAction);
});

it("should create an action to update a bet item", () => {
	const expectedAction = {
		type: types.UPDATE_BET_ITEMS,
		payload: [
			{
				N: "Real Madrid - Bayern2",
				C: "2002",
				NID: "2146483649",
				O: "3.00",
				ID: "1",
				ED: "1550572074000",
				ESD: "1550572074000",
				MBS: "4",
			},
		],
	};

	expect(
		actions.updateBetItems([
			{
				N: "Real Madrid - Bayern2",
				C: "2002",
				NID: "2146483649",
				O: "3.00",
				ID: "1",
				ED: "1550572074000",
				ESD: "1550572074000",
				MBS: "4",
			},
		]),
	).toEqual(expectedAction);
});

it("should create an action to set max winning a slip", () => {
	const expectedAction = {
		type: types.SET_MAX_WINNING,
		payload: 71.38,
	};

	expect(actions.setMaxWinning(71.38)).toEqual(expectedAction);
});
