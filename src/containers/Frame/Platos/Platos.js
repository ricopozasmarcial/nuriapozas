import React, { useState, forwardRef, useImperativeHandle } from "react";
import { PlatosDiv } from "./Platos.style";
import Ball from "./Editor/Editor";
const Platos = forwardRef((props, ref) => {
	const [ value, setValue ] = useState(false);

	const showToast = (name) => {
		if (!value) {
			setValue(true);
			document.getElementById("img").setAttribute("src", process.env.PUBLIC_URL + "/img/" + name + ".png");
			document.getElementById("img").setAttribute("height", "150");
			document.getElementById("img").setAttribute("width", "150");
		} else {
			setValue(false);
			document.getElementById("img").setAttribute("src", "");
		}
	};

	useImperativeHandle(ref, () => {
		return {
			showToast: showToast
		};
	});

	return (
		<PlatosDiv>
			<img id="img" src="" />
			<Ball />
		</PlatosDiv>
	);
});

export default Platos;
