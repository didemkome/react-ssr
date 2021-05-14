import React, { Fragment, memo } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import MarketHeader from "./Header";
import Slip from "../Slip";
import { handleOddClick } from "../../core/utils";

const data = require("../../../db.json");

const Program = ({ betItems }) => {
	const dispatch = useDispatch();
	let isActive = false;

	console.log("betItems: ", betItems);

	return (
		<div className="events-wrapper">
			<div className="bulletin-events">
				{Object?.values(data?.Events)
					?.splice(0, 2)
					?.map((event, index) => {
						const { C, T, N, OCG } = { ...event };
						console.log("event: ", event);
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
													if (betItems?.some((item) => item?.C === C)) {
														isActive =
															betItems?.length > 0
																? betItems?.some((item) => item?.O === odd?.O)
																: false;
													}
													console.log("isActive: ", event?.C, isActive, odd.O);
													const activeOdd = isActive ? "active" : " ";
													return (
														<div
															key={odd?.O}
															className={`bulletin col button ${activeOdd}`}
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

Program.propTypes = {
	betItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default memo(Program);
