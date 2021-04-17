import logo from "./logo.svg";
import "./App.css";
import Price from "./priceData.js";

export default function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Price />
				<img src={logo} className="App-logo" alt="logo" />
				<p id="data"></p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					GO BINANCE
				</a>
			</header>
		</div>
	);
}
