import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Nav, Button, Overlay } from "react-bootstrap";
import Client from "shopify-buy";
import ShopifyBuy from "@shopify/buy-button-js";
const API_KEY = process.env.REACT_APP_STORE_API_KEY;

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
const client = Client.buildClient({
	domain: "nuria-pozas.myshopify.com",
	storefrontAccessToken: API_KEY
});
var ui = ShopifyBuy.UI.init(client);

const RightNav = ({ open }) => {
	const abrir = () => {
		if (ui.components.cart === [] || ui.components.cart[0] === undefined || ui.components.cart[0] === null) {
			setShow(true);
			setTimeout(function() {
				setShow(false);
			}, 1000);
		} else {
			setShow(false);
			setTimeout(function() {
				ui.openCart();
			}, 15);
		}
	};
	const [ show, setShow ] = useState(false);

	const target = useRef(null);

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
			<Nav.Link
				ref={target}
				target="_parent"
				href=""
				style={{
					color: "black",
					fontSize: "14px",
					marginTop: "20px",
					marginRight: "10px",
					padding: "5px"
				}}
			>
				<div>
					<i className="fa fa-shopping-cart  fa-lg" onClick={abrir} />
				</div>
			</Nav.Link>
			<Overlay target={target.current} show={show} placement="right">
				{({ placement, arrowProps, show: _show, popper, ...props }) => (
					<div
						{...props}
						style={{
							backgroundColor: "white",
							padding: "2px 10px",
							color: "black",
							borderRadius: 3,
							...props.style
						}}
					>
						Tu carrito está vacío
					</div>
				)}
			</Overlay>
		</Ul>
	);
};

export default RightNav;
