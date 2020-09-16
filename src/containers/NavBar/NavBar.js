import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from 'styled-components';
import Burger from './Burger/Burger';

const logo = {
	color: "black",
	fontSize: "23px",
	letterSpacing: "3px",
	fontFamily: "Montserrat Light",
	fontWeight: 650,
	marginTop: "5px",
	marginRight: "220px"
};

const NavB = styled.nav`
  background: transparent;
  margin: 10px;
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
  z-index: 1;
`
class NavBar extends React.Component {
	render() {
		return (
			<div style={{ position: "relative" }}>
				<Navbar>
					<div className="mx-auto">
						<NavB>
							<Nav.Link target="_parent" href="https://nuria-pozas.myshopify.com/" style={logo}>
								NURIA POZAS
							</Nav.Link>
							<Burger />
						</NavB>
					</div>
				</Navbar>
			</div>
		);
	}
}

export default NavBar;
