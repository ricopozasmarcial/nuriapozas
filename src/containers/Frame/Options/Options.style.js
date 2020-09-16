import styled from "styled-components";

export const DivStyle = styled.div`
	position: relative;
	display: block;
	background-color: black;
	background-position: 50% 50%;
	background-size: cover;
	border-radius: 50%;
	width: 60%;
	height: auto;
	padding-top: 60%;
	margin: auto;
	margin-bottom: 2%;
	object-fit: cover;
	z-index: 1;
	overflow: hidden;
`;

export const DivFrame = styled.div`
	position: static;
	overflow: auto;
	height: 100%;
	width: 100%;
`;

export const H2Plato = styled.h2`
	position: relative;
	font-weight: 600;
	color: black;
	margin-top: 40px;
	font-size: 15px;
	letter-spacing: 2px;
	background-color: none;
`;

export const H2Select = styled.h2`
	º: relative;
	font-weight: 600;
	color: black;
	margin-top: 40px;
	font-size: 15px;
	letter-spacing: 2px;

	background-color: none;
`;

export const DivOptions = styled.div`
	position: relative;
	overflow: auto;
	height: 100vh;
	display: block;
	width: 100%;
`;

export const DivPlatos = styled.div`
	position: relative;
	display: block;
	overflow: hidden;
	height: auto;
	display: block;
	width: 100%;
`;

export const GridRoot = styled.div`
	position: relative;
	width: 100%;
	justify-content: space-around;
	background-color: transparent;
`;
