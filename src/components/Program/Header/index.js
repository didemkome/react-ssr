import React from "react";
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
			console.log("odd: ", odds);
			const { OC } = { ...odds };
			return (
				<>
					<div className="bulletin col" />
					{Object?.values(OC)?.map((odd) => {
						console.log("odd: ", odd);
						return <div className="bulletin col">{odd.N}</div>;
					})}
				</>
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
