const HandleMessage = ({ handleMessage }: any) => {
	return (
		<>
			<button onClick={() => handleMessage("Mensagem alterada")}> Alterar mensagem </button>
		</>
	);
};

export default HandleMessage;
