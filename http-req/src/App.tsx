import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [products, setProducts] = useState<any>([]);
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);

	useEffect(() => {
		loadData();
	}, []);

	const loadData = () => {
		fetch("http://localhost:3000/products")
			.then((resp) => resp.json())
			.then((data) => setProducts(data));
	};

	const addProd = async (e) => {
		e.preventDefault();

		console.log(name, price);

		const res = await fetch("http://localhost:3000/products", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, price }),
		});
	};

	return (
		<>
			{products.map((prod: any) => (
				<p key={prod.id}>
					{prod.id}, {prod.name}, {prod.price}
				</p>
			))}

			<form onSubmit={addProd}>
				<label>
					Nome
					<input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
				</label>
				<label>
					Preço
					<input
						type="text"
						value={price}
						name="price"
						onChange={(e) => setPrice(Number(e.target.value))}
					/>
				</label>

				<button type="submit">Cadastrar</button>
			</form>
		</>
	);
}

export default App;
