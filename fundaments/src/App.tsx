import { useState } from "react";
import "./App.css";
import reactSvg from "./assets/react.svg";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import Message from "./components/Message";
import HandleMessage from "./components/HandleMessage";

function App() {
	const age = 21;

	const [count, setCount] = useState(0);

	const cars = [
		{ id: 1, brand: "Ford", km: 12000, color: "preto" },
		{ id: 2, brand: "Toyota", km: 15000, color: "azul" },
		{ id: 3, brand: "Chevrolet", km: 8000, color: "vermelho" },
		{ id: 4, brand: "Honda", km: 20000, color: "prata" },
		{ id: 5, brand: "Volkswagen", km: 10000, color: "branco" },
	];

	const showMessage = () => {
		setCount(count + 1);
	};

	const [message, setMessage] = useState("");

	const handleMessage = (msg: string) => {
		setMessage(msg);
	};

	return (
		<div className="App">
			<img src="vite.svg" alt="Vite logo" />

			<img src={reactSvg} alt="React logo" />

			<ManageData />
			<ListRender />
			<ConditionalRender />
			<ShowUserName name="Matheus" age={age} />
			<CarDetails brand="Ford" km={12000} color="preto" />
			<CarDetails brand="Volkswagen" km={6000} color="branco" />

			{cars.map((car) => (
				<CarDetails brand={car.brand} km={car.km} color={car.color} />
			))}

			<Container>
				<p>Alguma coisa</p>
				<p>Outra coisa</p>
			</Container>

			<ExecuteFunction myFunction={showMessage} count={count} />

			<Message message={message} />

			<HandleMessage handleMessage={handleMessage} />
		</div>
	);
}

export default App;
