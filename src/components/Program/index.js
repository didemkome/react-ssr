import React, { Fragment } from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import MarketHeader from "./Header";
import Slip from "../Slip";
import { handleOddClick } from "../../core/utils";

const data = require("../../../db.json");

const Program = () => {
	const dispatch = useDispatch();
	const betItems = useSelector((state) => state?.betting?.slip?.betItems);
	let isActive = false;

	return (
		<div className="events-wrapper">
			<div className="bulletin-events">
				{Object?.values(data?.Events)
					?.splice(0, 2)
					?.map((event, index) => {
						const { C, T, N, OCG, NID } = { ...event };
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
												{Object?.values(OC)?.map((odd) => {
													if (betItems?.some((item) => item?.NID === NID)) {
														isActive =
															betItems?.length > 0
																? betItems?.some((item) => item?.O === odd?.O)
																: false;
													}
													const activeOdd = isActive ? " active" : "";
													return (
														<div
															key={odd?.ID}
															className={`bulletin col${activeOdd}`}
															as="button"
															onClick={() => handleOddClick(event, odd, odds, dispatch)}
														>
															{odd?.O}
														</div>
													);
												})}
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
