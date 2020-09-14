import React from "react";

export const Ball = () => {
	function handleOnDragStart(event) {
		console.log("JSDJSDJF");
		event.dataTransfer.setDragImage(new Image(), 0, 0);
		event.target.style.cursor = "grab";
	}

	function move(e) {
		document.addEventListener("mousemove", movement(e));
	}
	function handleOnDragEnter(event) {
		event.target.style.cursor = "grab";
	}

	function movement(e) {
		e.target.style.cursor = "grab";
		var div = document.getElementById("move");
		var rect = e.target.getBoundingClientRect();
		div.style.left = e.pageX / 2 + "px";
		div.style.top = e.pageY / 2 + "px";
	}

	function dragFinito(e) {
		e.preventDefault();
	}
	const divStyle = {
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		position: "absolute",
		cursor: "grab",
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
		<div
			style={{
				position: "absolute",
				display: "block",
				maxWidth: "auto",
				maxHeight: "auto",
				cursor: "grab"
			}}
			onDragStart={handleOnDragStart}
			onDrag={movement}
			onDragOver={dragFinito}
			draggable={true}
		>
			<img style={imgStyle} id="img" draggable={false} src="" alt="" />
		</div>
	);
};
export default Ball;
