import styled from "styled-components";

export const DivStyle = styled.div`
	position: relative;
	display: block;
	background-position: center;
	background-color: white;
	background-size: 106%;
	border-radius: 50%;
	width: 60%;
	height: 60%;
	padding-top: 60%;
	margin: auto;
	object-fit: cover;
	z-index: 1;
	overflow: hidden;
`;
export const ImgStyle = styled.img`
	max-width: 100%;
	max-height: 100%;
	cursor: move;
`;

export const DivFrame = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
`;
