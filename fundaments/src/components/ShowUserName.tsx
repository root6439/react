const ShowUserName = (props: { name: string; age: number }) => {
	return (
		<>
			<div>
				O nome do usuário é: {props.name}, idade: {props.age}
			</div>
		</>
	);
};

export default ShowUserName;
