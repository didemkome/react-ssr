import React, { useEffect } from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { setMaxWinning } from "../../core/redux/actions/bettingActions";

const Slip = () => {
	const dispatch = useDispatch();
	const { betItems, maxWinning } = useSelector((state) => state?.betting?.slip);
	let tempTotalPrice = 1.0?.toFixed(2);

	if (betItems?.length > 0) {
		betItems?.map((item) => {
			tempTotalPrice *= item?.O;
		});
	}

	useEffect(() => {
		if (betItems?.length === 0) {
			dispatch(setMaxWinning("0.00"));
		} else {
			dispatch(setMaxWinning(tempTotalPrice));
		}
	}, [tempTotalPrice]);
	return (
		<div className="slip-wrapper">
			{betItems?.map((item) => (
				<div className="slip-item" key={item?.NID}>
					<div className="item-info">
						<div>{item?.NID}</div>
						<div>Kod: {item?.C}</div>
						<div>{item?.N}</div>
					</div>
					<div className="item-info">
						<div>Oran: {item?.O}</div>
						<div>MBS: {item?.MBS}</div>
					</div>
				</div>
			))}
			<div className="total">Toplam Tutar: {parseFloat(maxWinning)?.toFixed(2)}</div>
		</div>
	);
};

export default Slip;
