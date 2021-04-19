import React, { useState, useContext } from "react";
import MultiSelect from "react-multi-select-component";
import { Button, InputGroup, FormControl, Dropdown } from "react-bootstrap";
import { SlideContext } from "../Context/slideContext";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from '@material-ui/core/Checkbox';

function createData(Lokal, TV, Grupp) {
	return { Lokal, TV, Grupp };
}

export function TV() {
	// dropdown options
	const [options, setOptions] = useState([
		{ label: "Intern", value: "Intern" },
		{ label: "Extern", value: " Extern" },
	]);
	const [selected, setSelected] = useState([]);
	return (
		<div>
			{/* dropdown för lokaler */}
			<MultiSelect
				className="locationSelect"
				options={options}
				value={selected}
				onChange={setSelected}
				labelledBy="Select"
			/>
		</div>
	);
}

export function Grupp() {
	// dropdown options
	const [options, setOptions] = useState([
		{ label: "TV", value: "TV" },
		{ label: "Ledning", value: " Ledning" },
	]);
	const [selected, setSelected] = useState([]);
	// för dropdown av TV
	const [tv, setTV] = useState("TV");
	const tvSelect = (e) => {
		console.log(e);
		setTV(e);
	};
	return (
		<div>
			{/* dropdown för lokaler */}
			<MultiSelect
				className="locationSelect"
				options={options}
				value={selected}
				onChange={setSelected}
				labelledBy="Select"
			/>
		</div>
	);
}

const rows = [
	createData("Frölunda", <TV />, <Grupp />),
	createData("Göteborg", <TV />, <Grupp />),
	createData("Mölndal", <TV />, <Grupp />),
];

export function SendToPicker() {
	const { Slide } = useContext(SlideContext);
	const [isSelected, setIsSelected] = useState(false);

	return (
		<div className="TableContainer">
			<div className="LokalTable">
				<TableContainer component={Paper}>
					<Table className={"table"} size="large" aria-label="a dense table">
						<TableHead>
							<TableRow>
								<TableCell> 
								<Checkbox
                          checked={isSelected}
                        />
								</TableCell>
				
								<TableCell>Lokal</TableCell>
								<TableCell align="left">TV</TableCell>
								<TableCell align="left">Grupp</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.Lokal}>
									<TableCell>
									<Checkbox
                          checked={isSelected}
                        />
									</TableCell>
									<TableCell align="left">{row.Lokal}</TableCell>
									<TableCell align="left">{row.TV}</TableCell>
									<TableCell align="left">{row.Grupp}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}
