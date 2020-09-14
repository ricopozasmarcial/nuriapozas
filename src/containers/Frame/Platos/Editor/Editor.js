import React from "react";

export const Ball = () => {
	function move(e) {
		document.addEventListener('mousemove', movement(e));
	};

	function movement(e) {
		var div = document.getElementById('move');
		div.style.left = e.pageX / 2 + "px";
		div.style.top = e.pageY / 2 + "px";
	}

	const divStyle = {
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		position: "fixed",
		cursor: "pointer",
		width: "500px",
		height: "500px"
	};

	const imgStyle = {
		position: "relative",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%"

	};
	return (
		<div style={{
			position: "relative",
			display: "block",
			maxWidth: "100%",
			maxHeight: "100%",
			height: "500px",
			width: "500px"

		}} onMouseDown={move} draggable="false">
			<img style={imgStyle} id="img" draggable="false" src="" alt="" />
		</div>
	);
};
export default Ball;
