import React, { Component } from "react";

export default class priceData extends Component {
	render() {
		//*Al cargar la página recibe la petición y la envía al servidor
		var xmlhttp = new XMLHttpRequest();
		var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
		xmlhttp.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				const json = JSON.parse(xmlhttp.responseText);
				parseJson(json);
			}
		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();

		//*Obtiene el precio actual y le da un formato
		function parseJson(json) {
			var time = "<b>Last Updated: " + json["time"]["updated"] + "</b>";
			var usdValue = "Current price: $" + json["bpi"]["USD"]["rate"];
			/* var gbpValue = "1 BTC equals to &pound;" + json["bpi"]["GBP"]["rate"];
			var euroValue = "1 BTC equals to &euro;" + json["bpi"]["EUR"]["rate"]; */

			document.getElementById("data").innerHTML =
				time + "<br /> <p id='precio'>" + usdValue + "</p> <br />" /*  + gbpValue + "<br />" + euroValue */;
		}

		//*Al cargar la página se obtienen los permisos de notificaciones
		window.addEventListener("load", function (event) {
			if (Notification.permission === "granted") {
				showNotification();
			} else if (Notification.permission === "denied" || Notification.permission === "default") {
				Notification.requestPermission().then((permission) => {
					if (permission === "granted") {
						showNotification();
					}
				});
			}
		});

		//*Envía la notificación de la aplicación con el precio actual
		function showNotification() {
			new Notification("New message from btc!", {
				body: document.getElementById("precio").textContent,
			});
			console.log("Notificacion");
		}

		//*Obtiene los segundos de la hora actual del dispositivo
		function clock() {
			const date = new Date();
			const seconds = date.getSeconds();
			console.log(seconds);
			return seconds;
		}

		//*Cada 1000 milisegundos obtiene reiteradamente los segundos del dispositivo
		setInterval(function () {
			console.log("hola");
			/* if (clock() === 10) {
			} */
		}, 1000);

		return <div></div>;
	}
}

//*Hola
//!Alerta
//?No sé
//TODO: Algo
////Tachadísimmo
