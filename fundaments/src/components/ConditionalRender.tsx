import { useState } from "react";

const ConditionalRender = () => {
	const [data] = useState(false);

	return (
		<>
			{data && <p>Se data for true, exibe!</p>}
			{!data && <p>Se data for false, não exibe!</p>}
		</>
	);
};

export default ConditionalRender;
