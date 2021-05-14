import React from "react";
import PropTypes from "prop-types";

const Header = ({ data }) => (
	<div className="bulletin sticky">
		<div className="bulletin event-date-league">Event Count: {Object?.values(data?.Events)?.length}</div>
		<div className="bulletin event-comment">Yorumlar</div>
		<div className="bulletin col" />
		<div className="bulletin col">1</div>
		<div className="bulletin col">x</div>
		<div className="bulletin col">2</div>
		<div className="bulletin col">1-X</div>
		<div className="bulletin col">1-2</div>
		<div className="bulletin col">X-2</div>
		<div className="bulletin col" />
		<div className="bulletin col">Alt</div>
		<div className="bulletin col">Üst</div>
	</div>
);

Header.propTypes = {
	data: PropTypes.shape({}).isRequired,
};
export default Header;
