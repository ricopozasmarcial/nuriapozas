import React from "react";
import styled from "styled-components";
import { Nav } from "react-bootstrap";

const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row nowrap;
	li {
		padding: 18px 10px;
	}
	@media (max-width: 768px) {
		flex-flow: column nowrap;
		background-color: #ffffff;
		position: fixed;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
		top: 0;
		right: 0;
		height: 100vh;
		width: 300px;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;
		li {
			color: #fff;
		}
	}
	z-index: 2;
`;

const elementos = {
	color: "black",
	fontSize: "14px",
	letterSpacing: "2px",
	fontWeight: 630,
	marginTop: "20px",
	marginRight: "10px"
};

const RightNav = ({ open }) => {
	return (
		<Ul open={open}>
			<Nav.Link target="_parent" href="https://nuria-pozas.myshopify.com/" style={elementos}>
				HOME
			</Nav.Link>
			<Nav.Link target="_parent" href="https://nuria-pozas.myshopify.com/collections/all" style={elementos}>
				TIENDA
			</Nav.Link>
			<Nav.Link target="_parent" href="https://nuria-pozas.myshopify.com/pages/creatuvajilla" style={elementos}>
				VAJILLA A MEDIDA
			</Nav.Link>
			<Nav.Link target="_parent" href="https://nuria-pozas.myshopify.com/" style={elementos}>
				CURSOS
			</Nav.Link>
			<Nav.Link target="_parent" href="https://nuria-pozas.myshopify.com/cart" style={elementos}>
				<div>
					<i className="fa fa-shopping-cart" />
				</div>
			</Nav.Link>
		</Ul>
	);
};

export default RightNav;
