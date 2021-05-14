import React from "react";
import Program from "./components/Program";
import "./assets/styles/index.scss";
import { useSelector } from "react-redux";

const App = () => {
	const betItems = useSelector((state) => state?.betting?.slip?.betItems);
	return (
		<div className="wrapper">
			<Program betItems={betItems} />
		</div>
	);
};

export default App;
