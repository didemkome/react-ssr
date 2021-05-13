import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "../style.scss";

const MarketHeader = ({ D, DAY, LN, index, OCG }) => (
	<div className="bulletin">
		<div className="bulletin event-date-league">
			<div className="event-count">{index}</div>
			{D} {DAY} {LN}
		</div>
		<div className="bulletin event-comment">Yorumlar</div>

		{Object.values(OCG)?.map((odds) => {
			const { OC, ID } = { ...odds };
			return (
				<Fragment key={ID}>
					<div className="bulletin col" />
					{Object?.values(OC)?.map((odd) => (
						<div className="bulletin col" key={odd?.ID}>
							{odd.N}
						</div>
					))}
				</Fragment>
			);
		})}
	</div>
);

MarketHeader.propTypes = {
	D: PropTypes.string.isRequired,
	DAY: PropTypes.string.isRequired,
	LN: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	OCG: PropTypes.shape({}).isRequired,
};

export default MarketHeader;
