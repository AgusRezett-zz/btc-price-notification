import React, { Component } from "react";

export default class priceData extends Component {
	render() {
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

		function parseJson(json) {
			var time = "<b>Last Updated: " + json["time"]["updated"] + "</b>";
			var usdValue = "Current price: $" + json["bpi"]["USD"]["rate"];
			var gbpValue = "1 BTC equals to &pound;" + json["bpi"]["GBP"]["rate"];
			var euroValue = "1 BTC equals to &euro;" + json["bpi"]["EUR"]["rate"];

			document.getElementById("data").innerHTML =
				time + "<br /> <p id='precio'>" + usdValue + "</p> <br />" + gbpValue + "<br />" + euroValue;
		}

		function showNotification() {
			new Notification("New message from btc!", {
				body: document.getElementById("precio").textContent,
			});
			console.log("Notificacion");
		}

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

		return <div></div>;
	}
}
