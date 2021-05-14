import bettingReducer, { initialState } from "./bettingReducer";

describe("betting reducer", () => {
	it("handles ADD_BET_ITEM as expected", () => {
		const reducer = bettingReducer(initialState, {
			type: "ADD_BET_ITEM",
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
		});

		expect(reducer).toEqual({
			...initialState,
			slip: {
				...initialState.slip,
				betItems: [
					{
						N: "Real Madrid - Bayern1",
						C: "2001",
						NID: "2146483648",
						O: "2.30",
						ID: "0",
						ED: "1550572074000",
						ESD: "1550572074000",
						MBS: "4",
					},
				],
			},
		});
	});

	it("handles UPDATE_BET_ITEMS as expected", () => {
		const reducer = bettingReducer(initialState, {
			type: "UPDATE_BET_ITEMS",
			payload: [
				{
					N: "Real Madrid - Bayern3",
					C: "2003",
					NID: "2146483650",
					O: "1.22",
					ID: "4",
					ED: "1550572074000",
					ESD: "1550572074000",
					MBS: "4",
				},
			],
		});

		expect(reducer).toEqual({
			...initialState,
			slip: {
				...initialState.slip,
				betItems: [
					{
						N: "Real Madrid - Bayern3",
						C: "2003",
						NID: "2146483650",
						O: "1.22",
						ID: "4",
						ED: "1550572074000",
						ESD: "1550572074000",
						MBS: "4",
					},
				],
			},
		});
	});

	it("handles SET_MAX_WINNING as expected", () => {
		const reducer = bettingReducer(initialState, {
			type: "SET_MAX_WINNING",
			payload: 71.38,
		});

		expect(reducer).toEqual({
			...initialState,
			slip: {
				...initialState.slip,
				maxWinning: 71.38,
			},
		});
	});

	it("handles CLEAR_BET_ITEMS as expected", () => {
		const reducer = bettingReducer(initialState, {
			type: "CLEAR_BET_ITEMS",
		});

		expect(reducer).toEqual({
			...initialState,
			slip: {
				...initialState.slip,
			},
		});
	});
});
