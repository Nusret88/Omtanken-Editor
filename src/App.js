import React, { useState, useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup, UncontrolledAlert } from "reactstrap";
import Editor from "./Components/SunEditor";
import TitleComponent from "./Components/TitleComponent";
import DatePicker from "./Components/DatePicker";
import { SlideContext } from "./Context/slideContext";
import GridComponent from "./Components/GridComponent";
import GridMapTest from "./Components/GridMapTest";
import GridButtonTest from "./Components/GridButtonTest";

function App() {
	const { SendSlide, onDismiss, visible } = useContext(
		SlideContext,
	);

	return (
		<div className="App">
			<UncontrolledAlert color="success" isOpen={visible} toggle={onDismiss}>
				Your slide has been sent
			</UncontrolledAlert>
			{/* Title */}
			<TitleComponent />
			{/* Editorn */}
			<Editor />
			<div className="places">
				{/* Date Pickers */}
				<DatePicker />
			</div>
			<p style={{textAlign: "center"}}>First try</p>
			<div>
			<GridComponent />
			<GridComponent />
			<GridComponent />
			<GridComponent />
			</div>
			{/* <GridButtonTest /> */}
			<p style={{textAlign: "center"}}>Second try</p>
			<div className="GridContainer">
			<GridMapTest />
			</div>
			<div className="postButtonContainer">
				<Button color="success" onClick={SendSlide}>
					Post Slide
				</Button>{" "}
			</div>
			
		</div>
	);
}

export default App;
