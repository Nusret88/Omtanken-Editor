import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, Button, InputGroup, FormControl } from "react-bootstrap";
import Editor from "./Components/SunEditor";
import MultiSelect from "react-multi-select-component";

//Date picker
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

function App() {
	// För dropdown selector som innehåller lokalerna
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	// dropdown options
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
			<div className="titleContainer">
				{/* input för att skriva in title och knapp för att ladda (get funktion) title  som är skrivet */}
				{/* <InputGroup className="titleLoader" size="25%">
					<Dropdown>
						<Dropdown.Toggle variant="success" id="dropdown-basic">
							Dropdown Button
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<InputGroup.Append>
						<Button variant="success">LOAD SLIDE</Button>
					</InputGroup.Append>
				</InputGroup> */}

				<InputGroup className="titleLoader" size="25%">
					<FormControl
						placeholder="Title"
						aria-label="Title"
						aria-describedby="basic-addon2"
						aria-setsize={25}
					/>
				</InputGroup>
			</div>
			{/* Editorn */}
			<Editor />
			<div className="places">
				{/* dropdown för lokaler */}
				{/* <MultiSelect
					className="locationSelect"
					options={options}
					value={selected}
					onChange={setSelected}
					labelledBy="Select"
				/> */}
				{/* dropdown för intern eller extern TV */}
				{/* <Dropdown>
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
				</Dropdown> */}

				{/* Date Pickers */}
				<div className="datePickerContainer">
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<KeyboardDatePicker
						disableToolbar
						variant="inline"
						format="yyyy-MM-dd"
						margin="normal"
						id="date-picker-inline"
						label="Start Date"
						value={startDate}
						onChange={(date) => setStartDate(date)}
						KeyboardButtonProps={{
							"aria-label": "change date",
						}}
					/>
					<KeyboardDatePicker
						disableToolbar
						variant="inline"
						format="yyyy-MM-dd"
						margin="normal"
						id="date-picker-inline"
						label="End Date"
						value={endDate}
						onChange={(date) => setEndDate(date)}
						KeyboardButtonProps={{
							"aria-label": "change date",
						}}
					/>
				</MuiPickersUtilsProvider>
				</div>
			</div>
			<div className="postButtonContainer">
			<Button variant="success">POST</Button>
			</div>
			
		</div>
	);
}

export default App;
