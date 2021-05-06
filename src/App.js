import React, { useState, useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup, UncontrolledAlert } from "reactstrap";
import Editor from "./Components/SunEditor";
import TitleComponent from "./Components/TitleComponent";
import DatePicker from "./Components/DatePicker";
import { SlideContext } from "./Context/slideContext";
import MatrixComponent from "./Components/MatrixComponent";

function App() {
	const { SendSlide, onDismiss, visible, printData } = useContext(
		SlideContext,
	);

	return (
		<div className="App">
			<UncontrolledAlert color="success" isOpen={visible} toggle={onDismiss}>
				Your slide has been sent
			</UncontrolledAlert>
			{/* Editorn */}
			<Editor />
			{/* Title */}
			<TitleComponent />
			<div className="places">
				{/* Date Pickers */}
				<DatePicker />
			</div>
			{/* <div>
			<GridComponent />
			<GridComponent />
			<GridComponent />
			<GridComponent />
			</div> */}
			{/* <GridButtonTest /> */}
			<div className="GridContainer">
			<MatrixComponent />
			</div>
			<div className="postButtonContainer">
				<Button color="success" onClick={SendSlide}>
					Post Slide
				</Button>{" "}
			</div>
			< printData />
			
		</div>
	);
}

export default App;
