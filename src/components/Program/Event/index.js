import React, { Fragment, memo } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import MarketHeader from "../Header";
import { betItemsEqualCheck, handleOddClick } from "../../../core/utils";

const Event = ({ event, betItems, index }) => {
	const dispatch = useDispatch();
	let isActive = false;
	const { C, T, N, OCG } = { ...event };
	return (
		<>
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
		</>
	);
};

Event.propTypes = {
	betItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	index: PropTypes.number.isRequired,
	event: PropTypes.shape({}).isRequired,
};

export default memo(Event, betItemsEqualCheck);
