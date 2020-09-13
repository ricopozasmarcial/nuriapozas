import React from "react";
import styled from "styled-components";

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
	const Wrapper = styled.div`
		width: 150px;
		height: 150px;
		background-image: url("img/prueba.png");
		background-repeat: no-repeat;
		position: absolute;
		cursor: pointer;
	`;
	return <Wrapper onMouseDown={add} onMouseUp={remove} />;
};

export default Ball;
