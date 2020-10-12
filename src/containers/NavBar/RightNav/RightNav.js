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
			<Nav.Link target="_parent" href="https://nuria-pozas.myshopify.com/pages/contacto" style={elementos}>
				CONTACTO
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
			<Nav.Link
				style={{
					marginTop: "15px"
				}}
			>
				<select onchange="doGTranslate(this);" id="selector" class="fa">
					<option value="es|es">Español</option>

					<option value="es|en">English</option>
					<option value="es|fr">Français</option>
					<option value="es|de">Deutsch</option>
					<option value="es|it">Italiano</option>
					<option value="es|pt">Português</option>
					<option value="es|ja">日本語</option>
					<option value="es|ko">한국어</option>
					<option value="es|zh-CN">简体中文</option>
				</select>
			</Nav.Link>

			<script>{`
if(typeof GTranslateGetCurrentLang != 'function')function GTranslateGetCurrentLang() {var keyValue = document.cookie.match('(^|;) ?googtrans=([^;]*)(;|$)');return keyValue ? keyValue[2].split('/')[2] : null;}
function gt_loadScript(url,callback){var script=document.createElement("script");script.type="text/javascript";if(script.readyState){script.onreadystatechange=function(){if(script.readyState=="loaded"||script.readyState=="complete"){script.onreadystatechange=null;callback()}}}else{script.onload=function(){callback()}}script.src=url;document.getElementsByTagName("head")[0].appendChild(script)}
var gtSwitcherJS = function($){/*{auto_detect_code}*/}
gt_loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js", function(){jQuery_gtranslate = jQuery.noConflict(true);gtSwitcherJS(jQuery_gtranslate);});

`}</script>

			<style>{`

  #selector{
  
   font-family: 'Montserrat', sans-serif;
    font-size: 12px;
  }

#goog-gt-tt {display:none !important;}
.goog-te-banner-frame {display:none !important;}
.goog-te-menu-value:hover {text-decoration:none !important;}
body {top:0 !important;}
#google_translate_element2 {display:none!important;}
`}</style>

			<div id="google_translate_element2" />
			<script>{`
function googleTranslateElementInit2() {new google.translate.TranslateElement({pageLanguage: 'es',autoDisplay: false}, 'google_translate_element2');}
`}</script>
			<script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2" />

			<script>{`
if(typeof GTranslateGetCurrentLang != 'function')function GTranslateGetCurrentLang() {var keyValue = document.cookie.match('(^|;) ?googtrans=([^;]*)(;|$)');return keyValue ? keyValue[2].split('/')[2] : null;}
function GTranslateFireEvent(element,event){try{if(document.createEventObject){var evt=document.createEventObject();element.fireEvent('on'+event,evt)}else{var evt=document.createEvent('HTMLEvents');evt.initEvent(event,true,true);element.dispatchEvent(evt)}}catch(e){}}
function doGTranslate(lang_pair){if(lang_pair.value)lang_pair=lang_pair.value;if(lang_pair=='')return;var lang=lang_pair.split('|')[1];if(GTranslateGetCurrentLang() == null && lang == lang_pair.split('|')[0])return;if(typeof ga == 'function'){ga('send', 'event', 'GTranslate', lang, location.hostname+location.pathname+location.search);}else{if(typeof _gaq!='undefined')_gaq.push(['_trackEvent', 'GTranslate', lang, location.hostname+location.pathname+location.search]);}var teCombo;var sel=document.getElementsByTagName('select');for(var i=0;i<sel.length;i++)if(/goog-te-combo/.test(sel[i].className))teCombo=sel[i];if(document.getElementById('google_translate_element2')==null||document.getElementById('google_translate_element2').innerHTML.length==0||teCombo.length==0||teCombo.innerHTML.length==0){setTimeout(function(){doGTranslate(lang_pair)},500)}else{teCombo.value=lang;GTranslateFireEvent(teCombo,'change');GTranslateFireEvent(teCombo,'change')}}
`}</script>
		</Ul>
	);
};

export default RightNav;
