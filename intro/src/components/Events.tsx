import { FormEvent, useState } from "react";

const Events = () => {
	const [count, setCount] = useState(0);
	const [text, setText] = useState("Nada");

	const handleMyEvent = () => {
		setCount(count + 10);
	};

	const updateText = (e: FormEvent<HTMLInputElement>) => {
		let value = (e.target as HTMLInputElement).value;

		if (value == "") {
			setText("nada");
		} else {
			setText(value);
		}
	};

	const renderSomething = (data: boolean) => {
		if (data) {
			return <h1>Possui data {data}</h1>;
		} else {
			return <h1>Não possui data {data}</h1>;
		}
	};

	return (
		<>
			<p>Contador: {count}</p>
			<label htmlFor="inputText">Digite algo:</label>
			<input type="text" id="inputText" onInput={updateText} />
			<p>Você escreveu: {text}</p>
			<button onClick={handleMyEvent}>Clique aqui</button>
			<button onClick={() => console.log("clicou de novo")}> Clique aqui também</button>
			<button
				onClick={() => {
					console.log("clicou de novo mais uma vez");
				}}
			>
				{" "}
				Clique aqui também
			</button>

			<div>
				{renderSomething(true)}
				{renderSomething(false)}
			</div>
		</>
	);
};

export default Events;
