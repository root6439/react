const ExecuteFunction = ({ myFunction, count }: ExecuteFunctionProps) => {
	return (
		<>
			<button onClick={myFunction}>Chamar função</button>
			{count > 0 && <p>Função chamada {count} vezes</p>}
		</>
	);
};

export default ExecuteFunction;

type ExecuteFunctionProps = {
	myFunction(): void;
	count: number;
};
