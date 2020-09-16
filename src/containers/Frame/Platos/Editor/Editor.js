import React from "react";
import { DivFrame, ImgStyle } from './Editor.style';

export const Ball = () => {

	function handleOnDragStart(event) {
		event.dataTransfer.setDragImage(new Image(), 0, 0);
		event.target.style.cursor = "grab";
	}

	function movement(e) {
		e.target.style.cursor = "grab";
		var div = document.getElementById("move");
		var medidaw = parseInt(div.style.width) / 2;
		var medidah = parseInt(div.style.height) / 2;
		div.style.left = e.clientX - medidaw - parseInt(div.style.width) / 2 + "px";
		div.style.top = e.clientY - medidah - parseInt(div.style.height) / 2 + "px";
	}

	function dragFinito(e) {
		e.preventDefault();
	}
	return (
		<DivFrame
			style={{
				height: "500px",
				width: "500px",
			}}
			id="move"
			onDragStart={handleOnDragStart}
			onDrag={movement}
			onDragOver={dragFinito}
			draggable={true}
		>
			<ImgStyle id="img" draggable={false} src="" alt="" />
		</DivFrame>
	);
};
export default Ball;
