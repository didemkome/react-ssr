import React, { Fragment } from "react";
import "./style.scss";
import MarketHeader from "./Header";

const data = require("../../../db.json");

const Program = () => {
	console.log("data: ", data);
	return (
		<div className="events-wrapper">
			<div className="bulletin-events">
				{Object?.values(data?.Events)
					?.splice(0, 20)
					?.map((event, index) => {
						console.log("event: ", event);
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
										console.log("odd: ", odds);
										const { MBS, OC } = { ...odds };
										return (
											<>
												<div className="bulletin col">{MBS}</div>
												{Object?.values(OC)?.map((odd) => {
													console.log("odd: ", odd);
													return <div className="bulletin col">{odd.O}</div>;
												})}
											</>
										);
									})}
								</div>
							</Fragment>
						);
					})}
			</div>
		</div>
	);
};

export default Program;
