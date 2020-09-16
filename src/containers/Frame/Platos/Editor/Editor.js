import React from "react";
import { DivFrame, ImgStyle } from "./Editor.style";
import Draggable from "react-draggable";
export const Ball = () => {
	return (
		<DivFrame
			id="move"
			style={{
				height: "500px",
				width: "500px"
			}}
		>
			<Draggable>
				<ImgStyle id="img" draggable={false} src="" alt="" />
			</Draggable>
		</DivFrame>
	);
};
export default Ball;
