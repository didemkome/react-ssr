export const loadState = () => {
	try {
		const serializedState = localStorage.getItem("slip");
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
