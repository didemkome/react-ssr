import React, { Fragment, memo } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import MarketHeader from "./Header";
import Slip from "../Slip";
import { handleOddClick } from "../../core/utils";
import Header from "./Header/header";

const data = require("../../../db.json");

const Program = ({ betItems }) => {
	const dispatch = useDispatch();
	let isActive = false;

	return (
		<div className="events-wrapper">
			<Header data={data} />
			<div className="bulletin-events">
				{Object?.values(data?.Events)?.map((event, index) => {
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
											{Object?.values(OC)?.map((odd) => {
												const activeItem = betItems?.find((item) => item?.C === C);
												isActive = betItems?.length > 0 ? activeItem?.O === odd?.O : false;
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
