import { useState } from "react";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<FirstComponent />
			<TemplateExpressions />
			<MyComponent />
			<Events />
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
			</div>
		</>
	);
}

export default App;
