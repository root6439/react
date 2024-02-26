const TemplateExpressions = () => {
	const data = {
		name: "Nicolas",
		age: 25,
		job: "Programador",
	};

	return (
		<p>
			Olá {data.name}, você atua como {data.job}, tudo bem?
		</p>
	);
};

export default TemplateExpressions;
