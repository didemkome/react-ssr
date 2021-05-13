import React from "react";
import "./style.scss";

const data = require("../../../db.json");

const Program = () => {
	console.log("data: ", data);
	return (
		<div className="program-wrapper">
			{Object?.values(data?.Events)
				?.splice(0, 20)
				?.map((event) => console.log("event: ", event))}
		</div>
	);
};

export default Program;
