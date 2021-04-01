import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, Button, InputGroup, FormControl } from "react-bootstrap";
import Editor from "./Components/SunEditor";
import MultiSelect from "react-multi-select-component";

function App() {
	// För dropdown selector som innehåller lokalerna
	const [options, setOptions] = useState([
		{ label: "Göteborg", value: "Göteborg" },
		{ label: "Mölndal", value: " Mölndal" },
		{ label: "Frölunda", value: "Frölunda" },
	]);
	const [selected, setSelected] = useState([]);
	// för dropdown av TV
	const [tv, setTV] = useState("TV");
	const tvSelect = (e) => {
		console.log(e);
		setTV(e);
	};

	return (
		<div className="App">
			<div className="idContainer">
				{/* input för att skriva in id och knapp för att ladda (get funktion) id nummret som är skrivet */}
				<InputGroup className="idLoader" size="25%">
					<FormControl
						placeholder="ID"
						aria-label="ID"
						aria-describedby="basic-addon2"
						aria-setsize={25}
					/>
					<InputGroup.Append>
						<Button variant="success">LOAD SLIDE</Button>
					</InputGroup.Append>
				</InputGroup>
			</div>
			{/* Editorn */}
			<Editor />
			<div className="places">
				{/* dropdown för lokaler */}
				<MultiSelect
					className="locationSelect"
					options={options}
					value={selected}
					onChange={setSelected}
					labelledBy="Select"
				/>
				{/* dropdown för intern eller extern TV */}
				<Dropdown>
					<Dropdown.Toggle
						variant="success"
						id="dropdown-basic"
						alignRight
						onSelect={tvSelect}
					>
						{tv}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item
							href="#/action-1"
							eventKey="Intern"
							onSelect={tvSelect}
						>
							Intern
						</Dropdown.Item>
						<Dropdown.Item
							href="#/action-2"
							eventKey="Extern"
							onSelect={tvSelect}
						>
							Extern
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</div>
	);
}

export default App;
