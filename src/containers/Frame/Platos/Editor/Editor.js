import React from "react";

export const Ball = () => {
	let offsetX, offsetY;
	const move = (e) => {
		const el = e.target;
		el.style.left = `${e.pageX - offsetX}px`;
		el.style.top = `${e.pageY - offsetY}px`;
	};
	const add = (e) => {
		const el = e.target;
		offsetX = e.clientX - el.getBoundingClientRect().left;
		offsetY = e.clientY - el.getBoundingClientRect().top;
		el.addEventListener("mousemove", move);
	};
	const remove = (e) => {
		const el = e.target;
		el.removeEventListener("mousemove", move);
	};

	const divStyle = {
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		position: "fixed",
		cursor: "pointer"
	};

	const imgStyle = {
		position: "absolute",
		width: "500px",
		height: "500px"
	};
	return (
		<div style={divStyle} onMouseDown={add} onMouseUp={remove}>
			<img style={imgStyle} id="img" draggable="false" src="" alt="" />
		</div>
	);
};
export default Ball;
