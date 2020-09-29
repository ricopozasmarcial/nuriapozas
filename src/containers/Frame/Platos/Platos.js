import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Button, Form, Col, Tabs, Tab, OverlayTrigger, Tooltip } from "react-bootstrap";
import Draggable from "react-draggable";
import * as firebase from "firebase";
import Alert from "react-bootstrap/Alert";
import Client from "shopify-buy";
import ShopifyBuy from "@shopify/buy-button-js";

import { DivStyle, DivFrame, ImgStyle } from "./Platos.style";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
var enlace = "";
var imagenes = [];
var link;
var angle = 0;
var productos = [];
var input = [];
var pru = 'url("img/fondoPlato.png")';
const Platos = forwardRef((props, ref) => {
	const [ value, setValue ] = useState(false);
	const [ fondo, setFondo ] = useState("");
	const [ links, setLinks ] = useState([]);
	const [ limite, setLimite ] = useState();
	const [ left, setLeft ] = useState("0px");
	const [ show, setShow ] = useState(false);
	const client = Client.buildClient({
		domain: "nuria-pozas.myshopify.com",
		storefrontAccessToken: "c23d72381b2e48034a6cb4d8bca27ad8"
	});
	var data = null;

	var ui = ShopifyBuy.UI.init(client);

	const aniadir = () => {
		document.getElementById("carrito").innerHTML = "";
		ui.createComponent("product", {
			id: "5740566708388",
			node: document.getElementById("carrito"),
			moneyFormat: "%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D",
			options: {
				product: {
					contents: {
						img: false,
						title: false,
						price: false
					},

					styles: {
						product: {
							"@media (min-width: 601px)": {
								"max-width": "calc(25% - 20px)",
								"margin-left": "20px",
								"margin-bottom": "50px"
							}
						},
						button: {
							"font-family": "Montserrat, sans-serif",
							"font-size": "16px",
							"padding-top": "16px",
							"padding-bottom": "16px",
							color: "#000000",
							":hover": {
								color: "#000000",
								"background-color": "#e6e6e6"
							},
							"background-color": "#ffffff",
							":focus": {
								"background-color": "#e6e6e6"
							}
						},
						quantityInput: {
							"font-size": "16px",
							"padding-top": "16px",
							"padding-bottom": "16px"
						}
					},
					order: [ "img", "title", "price", "quantity", "options", "button" ],

					text: {
						button: "Add to cart"
					},
					googleFonts: [ "Montserrat" ]
				},
				productSet: {
					styles: {
						products: {
							"@media (min-width: 601px)": {
								"margin-left": "-20px"
							}
						}
					}
				},
				modalProduct: {
					contents: {
						img: false,
						imgWithCarousel: true,
						button: false,
						buttonWithQuantity: true
					},
					styles: {
						product: {
							"@media (min-width: 601px)": {
								"max-width": "100%",
								"margin-left": "0px",
								"margin-bottom": "0px"
							}
						},
						button: {
							"font-family": "Montserrat, sans-serif",
							"font-size": "16px",
							"padding-top": "16px",
							"padding-bottom": "16px",
							color: "#e9ecef",
							":hover": {
								color: "#000000",
								"background-color": "#e6e6e6"
							},
							"background-color": "#e9ecef",
							":focus": {
								"background-color": "#e6e6e6"
							}
						},
						quantityInput: {
							"font-size": "16px",
							"padding-top": "16px",
							"padding-bottom": "16px"
						}
					},
					googleFonts: [ "Montserrat" ],
					text: {
						button: "Añadir al carrito"
					}
				},
				cart: {
					startOpen: true,
					events: {
						openCheckout: function(cart) {
							cart.checkout = null;
							var input = [
								{
									variantId: Buffer.from("gid://shopify/ProductVariant/36415912509604").toString(
										"base64"
									),
									quantity: 1,
									customAttributes: [
										{
											key: "Link",
											value:
												"https://firebasestorage.googleapis.com/v0/b/nuriapozas.appspot.com/o/"
										}
									]
								}
							];
							client.checkout.create().then((checkout) => {
								client.checkout.addLineItems(checkout.id, input).then((e) => {
									window.parent.location.href = e.webUrl;
								});
							});
							//console.log(cart.props.client);
						}
					},
					styles: {
						button: {
							"font-family": "Montserrat, sans-serif",
							"font-size": "16px",
							"padding-top": "16px",
							"padding-bottom": "16px",
							top: "0px",
							color: "#000000",
							":hover": {
								color: "#000000",
								"background-color": "#e6e6e6"
							},
							"background-color": "#ffffff",
							":focus": {
								"background-color": "#e6e6e6"
							}
						},
						title: {
							color: "#252424"
						},
						header: {
							color: "#252424"
						},
						lineItems: {
							color: "#252424"
						},
						subtotalText: {
							color: "#252424"
						},
						subtotal: {
							color: "#252424"
						},
						notice: {
							color: "#252424"
						},
						currency: {
							color: "#252424"
						},
						close: {
							color: "#252424",
							":hover": {
								color: "#252424"
							}
						},
						empty: {
							color: "#252424"
						},
						noteDescription: {
							color: "#252424"
						},
						discountText: {
							color: "#252424"
						},
						discountIcon: {
							fill: "#252424"
						},
						discountAmount: {
							color: "#252424"
						}
					},
					text: {
						title: "Carrito",
						total: "Subtotal",
						empty: "Tu carrito está vacío",
						button: "TRAMITAR",
						notice: "Los costes de envío o descuentos serán calculados en el momento del pago."
					},

					popup: true,
					googleFonts: [ "Montserrat" ]
				},
				toggle: {
					styles: {
						toggle: {
							"font-family": "Montserrat, sans-serif",
							"background-color": "#ffffff",
							":hover": {
								"background-color": "#e6e6e6"
							},
							":focus": {
								"background-color": "#e6e6e6"
							}
						},
						count: {
							"font-size": "16px",
							color: "#000000",
							":hover": {
								color: "#000000"
							}
						},
						iconPath: {
							fill: "#000000"
						}
					},
					googleFonts: [ "Montserrat" ]
				},
				lineItem: {
					order: [ "image", "title", "variantTitle", "price", "priceWithDiscounts", "quantity" ],
					styles: {
						variantTitle: {
							color: "#252424"
						},
						title: {
							color: "#252424"
						},
						price: {
							color: "#252424"
						},
						fullPrice: {
							color: "#252424"
						},
						discount: {
							color: "#252424"
						},
						discountIcon: {
							fill: "#252424"
						},
						quantity: {
							color: "#252424"
						},
						quantityIncrement: {
							color: "#252424",
							"border-color": "#252424"
						},
						quantityDecrement: {
							color: "#252424",
							"border-color": "#252424"
						},
						quantityInput: {
							color: "#252424",
							"border-color": "#252424"
						}
					}
				}
			}
		});
	};

	var config = {
		apiKey: "AIzaSyDEjGJmen7XuwDCFqveAH8kJ4Fhk65Ewpo",
		authDomain: "nuriapozas.firebaseapp.com",
		databaseURL: "https://nuriapozas.firebaseio.com",
		projectId: "nuriapozas",
		storageBucket: "nuriapozas.appspot.com",
		messagingSenderId: "1017937514584",
		appId: "1:1017937514584:web:9a88c4c9d003441c61ba2d",
		measurementId: "G-HVEQ3WDZS1"
	};
	if (!firebase.apps.length) {
		firebase.initializeApp(config);
	}
	const db = firebase.firestore();

	var storage = firebase.storage();
	// Create a root reference
	const linksPlatoG = [
		{
			id: "prueba2",
			link: "36415912509604"
		},
		{
			id: "prueba3",
			link: "36417471479972"
		},
		{
			id: "prueba4",
			link: "36417316847780"
		},
		{
			id: "prueba5",
			link: "36417447592100"
		},
		{
			id: "prueba6",
			link: "36415973163172"
		},
		{
			id: "prueba7",
			link: "36417295089828"
		},
		{
			id: "prueba8",
			link: "36196485759140"
		},
		{
			id: "prueba9",
			link: "36417368096932"
		},
		{
			id: "prueba10",
			link: "36417461420196"
		},
		{
			id: "prueba11",
			link: "36417258913956"
		},
		{
			id: "prueba12",
			link: "36415931318436"
		},
		{
			id: "prueba13",
			link: "36417386381476"
		},
		{
			id: "prueba14",
			link: "36417247969444"
		},
		{
			id: "prueba15",
			link: "36417283588260"
		},
		{
			id: "prueba16",
			link: "36417490649252"
		},
		{
			id: "prueba17",
			link: "36417405780132"
		},

		{
			id: "prueba19",
			link: "36417507852452"
		},
		{
			id: "prueba20",
			link: "36417516568740"
		}
	];
	const linksPlatoP = [
		{
			id: "prueba2",
			link: "36415916867748"
		},
		{
			id: "prueba3",
			link: "36417467580580"
		},
		{
			id: "prueba4",
			link: "36417300136100"
		},
		{
			id: "prueba5",
			link: "36417430749348"
		},
		{
			id: "prueba6",
			link: "36415978930340"
		},
		{
			id: "prueba7",
			link: "36417299185828"
		},
		{
			id: "prueba8",
			link: "36415845335204"
		},
		{
			id: "prueba9",
			link: "36417370620068"
		},
		{
			id: "prueba10",
			link: "36417464139940"
		},
		{
			id: "prueba11",
			link: "36417263435940"
		},
		{
			id: "prueba12",
			link: "36415940821156"
		},
		{
			id: "prueba13",
			link: "36417382056100"
		},
		{
			id: "prueba14",
			link: "36417231356068"
		},
		{
			id: "prueba15",
			link: "36417272283300"
		},
		{
			id: "prueba16",
			link: "36417493467300"
		},
		{
			id: "prueba17",
			link: "36417409613988"
		},

		{
			id: "prueba19",
			link: "36417505427620"
		},
		{
			id: "prueba20",
			link: "36417521025188"
		}
	];
	const linksCuencos = [
		{
			id: "prueba2",
			link: "36415879479460"
		},
		{
			id: "prueba3",
			link: "36417483604132"
		},
		{
			id: "prueba4",
			link: "36417322025124"
		},
		{
			id: "prueba5",
			link: "36417454833828"
		},
		{
			id: "prueba6",
			link: "36415967592612"
		},
		{
			id: "prueba7",
			link: "36417290141860"
		},
		{
			id: "prueba8",
			link: "36415854313636"
		},
		{
			id: "prueba9",
			link: "36417336377508"
		},
		{
			id: "prueba10",
			link: "36417457225892"
		},
		{
			id: "prueba11",
			link: "36417254228132"
		},
		{
			id: "prueba12",
			link: "36415864504484"
		},
		{
			id: "prueba13",
			link: "36417393918116"
		},
		{
			id: "prueba14",
			link: "36417250492580"
		},
		{
			id: "prueba15",
			link: "36417285292196"
		},
		{
			id: "prueba16",
			link: "36417486225572"
		},
		{
			id: "prueba17",
			link: "36417399390372"
		},

		{
			id: "prueba19",
			link: "36417512308900"
		},
		{
			id: "prueba20",
			link: "36417514930340"
		}
	];

	const showToast = (name, xX, xY, w, h, angle2, limite) => {
		setValue(true);
		document.getElementById("img").setAttribute("src", "");
		document.getElementById("img").setAttribute("src", process.env.PUBLIC_URL + "/img/" + name + ".png");
		if (angle2 === undefined) {
			angle = 0;
		} else {
			angle = angle2.slice(7, -4);
			angle = parseInt(angle);
			if (isNaN(angle)) {
				angle = 0;
			}
			document.getElementById("move").style.transform = angle2;
		}
		document.getElementById("move").style.width = w;
		document.getElementById("move").style.height = h;
		document.getElementById("move2").style.transform = "translate(" + xY + "px," + xX + "px)";
		document.getElementById("move2").style.width = w;
		document.getElementById("move2").style.height = h;
		setLimite(limite);
		if (name === "") {
			enlace = null;
		} else {
			data = links.filter((item) => item.id === name);

			if (name !== "" && data !== undefined) {
				enlace = data[0].link;
			}
		}
		aniadir();
	};

	const setFondoA = (id) => {
		if (id === "1") {
			setLinks(linksPlatoG);
			document.getElementById("fondo").style.backgroundImage = "url('img/fondoPlato.png')";
		} else if (id === "2") {
			setLinks(linksPlatoP);
			document.getElementById("fondo").style.backgroundImage = "url('img/fondoPlato.png')";
		} else if (id === "3") {
			setLinks(linksCuencos);
			document.getElementById("fondo").style.backgroundImage = "url('img/cuenco.png')";
		}
	};

	const zoomOut = () => {
		let str = document.getElementById("move").style.height.toString();
		var alturaAux = str.replace("px", "");
		var alturaNew = parseInt(alturaAux) - 20;
		document.getElementById("move").style.height = alturaNew + "px";
		let str2 = document.getElementById("move").style.width.toString();
		var anchoAux = str2.replace("px", "");
		var anchoNew = parseInt(anchoAux) - 20;
		document.getElementById("move").style.width = anchoNew + "px";
	};

	const zoomIn = () => {
		let str = document.getElementById("move").style.height.toString();
		var alturaAux = str.replace("px", "");
		var alturaNew = parseInt(alturaAux) + 20;
		document.getElementById("move").style.height = alturaNew + "px";
		let str2 = document.getElementById("move").style.width.toString();
		var anchoAux = str2.replace("px", "");
		var anchoNew = parseInt(anchoAux) + 20;
		document.getElementById("move").style.width = anchoNew + "px";
	};
	const rotarD = () => {
		angle += 20;
		document.getElementById("move").style.transform = "rotate(" + angle + "deg)";
	};
	const rotarI = () => {
		angle -= 20;

		document.getElementById("move").style.transform = "rotate(" + angle + "deg)";
	};

	const crearProducto = (name, index) => {
		const page = document.getElementById("fondo");
		html2canvas(page, {
			backgroundColor: null,
			useCORS: true,
			allowTaint: false,
			scrollY: -window.scrollY
		}).then((canvas) => {
			var imgData = canvas.toDataURL("image/png", 1.0);
			if (name === null) {
				productos[index] = null;
			} else {
				var a = links.filter((item) => item.id === name);
				productos[index] = {
					variantId: Buffer.from("gid://shopify/ProductVariant/" + a[0].link).toString("base64"),
					quantity: 1,
					imagen: imgData
				};
			}
		});
	};

	const redirect = () => {
		var x = productos.filter((item) => item === null);
		console.log(x);
		if (document.getElementById("img").getAttribute("src") === "" || enlace === null || x[0] === null) {
			setShow(true);
			document.getElementById("tramitar").disabled = true;
		} else {
			const page = document.getElementById("fondo");
			html2canvas(page, {
				backgroundColor: null,
				useCORS: true,
				allowTaint: false,
				scrollY: -window.scrollY
			}).then((canvas) => {
				var imgData = canvas.toDataURL("image/png", 1.0);

				if (productos.length < limite) {
					productos[productos.length] = {
						variantId: Buffer.from("gid://shopify/ProductVariant/" + enlace).toString("base64"),
						quantity: 1,
						imagen: imgData
					};
					console.log(productos);
				}
			});
			client.checkout.create().then((checkout) => {
				var lineItemsToAdd = [];
				for (var i = 0; i < productos.length; i++) {
					var id = makeid();
					uploadImagenes(productos[i].imagen, id);
					lineItemsToAdd.push({
						variantId: productos[i].variantId,
						quantity: productos[i].quantity,
						customAttributes: [
							{
								key: "Link",
								value:
									"https://firebasestorage.googleapis.com/v0/b/nuriapozas.appspot.com/o/" +
									id +
									"?alt=media"
							}
						]
					});
				}
				client.checkout.addLineItems(checkout.id, lineItemsToAdd).then((e) => {
					console.log(productos);
					window.parent.location.href = e.webUrl;
				});
			});
		}
	};
	const makeid = () => {
		var result = "";
		var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		var charactersLength = 12;
		for (var i = 0; i < charactersLength; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	};

	const uploadImagenes = (imagen, id) => {
		var storageRef = firebase.storage().ref().child(id);
		var uploadTask = storageRef.putString(imagen, "data_url");
		var e;
		uploadTask.on(
			"state_changed",
			function(snapshot) {
				var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
				console.log("Upload is " + progress + "% done");
				switch (snapshot.state) {
					case firebase.storage.TaskState.PAUSED: // or 'paused'
						console.log("Upload is paused");
						break;
					case firebase.storage.TaskState.RUNNING: // or 'running'
						console.log("Upload is running");
						break;
				}
			},
			function(error) {},
			function() {
				uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
					e = downloadURL;
				});
			}
		);
		return Promise.resolve(e);
	};

	useImperativeHandle(ref, () => {
		return {
			showToast: showToast,
			setFondoA: setFondoA,
			crearProducto: crearProducto
		};
	});

	return (
		<div id="fer">
			<Alert show={show} onClose={() => setShow(false)} transition variant="dark" dismissible fade="true">
				Antes de añadir al carrito, selecciona un dibujo y muévelo por la pieza. Puedes hacerlo más grande o más
				pequeño.
			</Alert>
			<Button id="tramitar" variant="outline-dark" onClick={redirect} disabled={limite === 1 ? "true" : ""}>
				TRAMITAR VAJILLA
			</Button>

			<div id="carrito" />
			<OverlayTrigger placement="top" overlay={<Tooltip>Aumenta el tamaño</Tooltip>}>
				<Button id="zoom" className="pepe" variant="outline-dark" onClick={zoomIn}>
					<i id="iconZoom" className="fa fa-search-plus fa-lg" />
				</Button>
			</OverlayTrigger>
			<OverlayTrigger placement="top" overlay={<Tooltip>Disminuye el tamaño</Tooltip>}>
				<Button id="zoomMinus" className="pepe" variant="outline-dark" onClick={zoomOut}>
					<i id="iconZoom" className="fa fa-search-minus fa-lg" />
				</Button>
			</OverlayTrigger>
			<OverlayTrigger placement="top" overlay={<Tooltip>Rota izquierda</Tooltip>}>
				<Button id="zoomMinus" className="pepe" variant="outline-dark" onClick={rotarI}>
					<i id="iconZoom" className="fa fa-undo fa-lg" />
				</Button>
			</OverlayTrigger>
			<OverlayTrigger placement="top" overlay={<Tooltip>Rota derecha</Tooltip>}>
				<Button id="zoomMinus" className="pepe" variant="outline-dark" onClick={rotarD}>
					<i id="iconZoom" className="fa fa-repeat fa-lg" />
				</Button>
			</OverlayTrigger>
			<DivStyle
				style={{
					backgroundImage: { pru },
					backgroundColor: "white"
				}}
				id="fondo"
			>
				<Draggable handle="#img">
					<div
						id="move2"
						style={{
							top: "0px",
							left: "0px",
							height: "300px",
							width: "300px",
							position: "absolute"
						}}
					>
						<DivFrame
							id="move"
							style={{
								height: "300px",
								width: "300px"
							}}
						>
							<ImgStyle id="img" draggable={false} src="" alt="" />
						</DivFrame>
					</div>
				</Draggable>
			</DivStyle>
		</div>
	);
});

export default Platos;
