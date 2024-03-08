import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>React Router</h1>

			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/home/:id" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
