import React, { Fragment } from "react";
import "./style.scss";
import MarketHeader from "./Header";
import Slip from "../Slip";

const data = require("../../../db.json");

const Program = () => {
	const handleOddClick = (betItem) => {
		console.log("betItem", betItem);
	};
	return (
		<div className="events-wrapper">
			<div className="bulletin-events">
				{Object?.values(data?.Events)
					?.splice(0, 20)
					?.map((event, index) => {
						const { C, T, N, OCG } = { ...event };
						return (
							<Fragment key={C}>
								<MarketHeader {...event} index={index} />
								<div className="bulletin">
									<div className="bulletin event-date-team-name">
										{C} {T} {N}
									</div>
									<div className="bulletin event-comment">Yorumlar</div>
									{Object.values(OCG)?.map((odds) => {
										const { MBS, OC, ID } = { ...odds };
										return (
											<Fragment key={ID}>
												<div className="bulletin col">{MBS}</div>
												{Object?.values(OC)?.map((odd) => (
													<div
														key={odd?.ID}
														className="bulletin col"
														as="button"
														onClick={() => handleOddClick(event)}
													>
														{odd?.O}
													</div>
												))}
											</Fragment>
										);
									})}
								</div>
							</Fragment>
						);
					})}
			</div>
			<Slip />
		</div>
	);
};

export default Program;
