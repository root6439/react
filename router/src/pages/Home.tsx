import { Link, useParams } from "react-router-dom";

const Home = () => {
	const items = [{ id: 1, name: "parafusadeira", price: 500 }];
	const { id } = useParams();

	return (
		<div>
			<h1>Produtos</h1>

			{id && <><p>Dados do produto: {id}</p></>}

			<ul>
				{items.map((item) => (
					<li key={item.id}>
						<h2>{item.name}</h2>
						<p>R$ {item.price}</p>
						<Link to={`/home/${item.id}`}> Detalhes</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
