import React from "react";
import PropTypes from "prop-types";

export const User = (props) => {
	return (
		<div className="col-3">
			<div className="card">
				<img src={props.picture} alt="" />
				<div className="card-body">
					<h5 className="card-title">{props.name.first}</h5>
					<p className="card-text">{props.phone}</p>
				</div>
			</div>
		</div>
	);
};

User.propTypes = {
	name: PropTypes.object,
	phone: PropTypes.string,
	picture: PropTypes.string,
};
