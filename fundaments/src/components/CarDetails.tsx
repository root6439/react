type CarDetails = {
	brand: string;
	km: number;
	color: string;
};

const CarDetails = ({ brand, km, color }: CarDetails) => {
	return (
		<>
			<div>Detalhes do carro:</div>
			<ul>
				<li>Marca: {brand}</li>
				<li>KM: {km}</li>
				<li>Cor: {color}</li>
			</ul>
		</>
	);
};

export default CarDetails;
