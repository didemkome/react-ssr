import React, { useEffect, useState } from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import Slip from "../Slip";
import Header from "./Header/header";
import Event from "./Event";

const data = require("../../../db.json");

const Program = () => {
	const [loadCount, setLoadCount] = useState(10);
	const betItems = useSelector((state) => state?.betting?.slip?.betItems);

	const handleScroll = () => {
		if (loadCount <= Object?.values(data?.Events)?.length) {
			setLoadCount(loadCount + 1);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	return (
		<div className="events-wrapper">
			<Header data={data} />
			<div className="bulletin-events">
				{Object?.values(data?.Events)?.map((event, index) => {
					if (index < loadCount) {
						return <Event event={event} betItems={betItems} key={event.C} index={index} />;
					}
					return false;
				})}
			</div>
			<Slip />
		</div>
	);
};

export default Program;
