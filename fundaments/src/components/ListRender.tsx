import { useState } from "react";

const ListRender = () => {
	const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]);
	const [objList, setObjList] = useState([
		{ id: 1, name: "Alice", age: 25 },
		{ id: 2, name: "Bob", age: 30 },
		{ id: 3, name: "Charlie", age: 40 },
		{ id: 4, name: "David", age: 22 },
		{ id: 5, name: "Eve", age: 35 },
	]);

	const renderList = (item: string, id: number) => {
		return <li key={id}>{item}</li>;
	};

	const deleteUser = () => {
		const randomNumber = Math.floor(Math.random() * objList.length);

		setObjList((prevUser) => {
			return prevUser.filter((user) => randomNumber != user.id);
		});
	};

	return (
		<>
			<ul>{list.map((item, index) => renderList(item, index))}</ul>
			<ul>{objList.map((user) => renderList(user.name, user.id))}</ul>

			<button onClick={deleteUser}>Excluir usuário</button>
		</>
	);
};

export default ListRender;
