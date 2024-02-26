import { useState } from "react";

const ManageData = () => {
	const [number, setNumber] = useState(10);

	return (
		<>
			<div>{number}</div>
			<button onClick={() => setNumber(number + 10)}>Mudar valor</button>
		</>
	);
};

export default ManageData;