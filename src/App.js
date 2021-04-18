import React, { useState, useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Editor from "./Components/SunEditor";
import TitleComponent from "./Components/TitleComponent";
import DatePicker from "./Components/DatePicker";
import { SlideContext } from "./Context/slideContext";

function App() {
	const { Slide, PostSlide, SendSlide } = useContext(SlideContext);

	return (
		<div className="App">
			{/* Title */}
			<TitleComponent />
			{/* Editorn */}
			<Editor />
			<div className="places">
				{/* Date Pickers */}
				<DatePicker />
			</div>
			<div className="postButtonContainer">
				<Button variant="success" onClick={SendSlide}>
					POST
				</Button>
			</div>
		</div>
	);
}

export default App;
