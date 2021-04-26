import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup, UncontrolledAlert } from "reactstrap";
import React, { useState } from "react";

export default function GridComponent() {
	const [colorValue, setColorValue] = useState([
		"secondary",
		"success",
		"warning",
		"danger"
	]);
	const [state, setState] = useState([1, 1, 1, 1]);
	const [color, setColor] = useState([
		colorValue[0],
		colorValue[0],
		colorValue[0],
		colorValue[0]
	]);

	function LocationButton() {
		if (state[0] === 0) {
			setColor([colorValue[0], colorValue[0], colorValue[0], colorValue[0]]);
		} else if (state[0] === 1) {
			setColor([colorValue[1], colorValue[1], colorValue[1], colorValue[1]]);
		} else if (state[0] === 2) {
			setColor([colorValue[2], colorValue[2], colorValue[2], colorValue[2]]);
		} else if (state[0] === 3) {
			setColor([colorValue[3], colorValue[3], colorValue[3], colorValue[3]]);
		}
	}

	function InternButton() {
		if (state[1] === 0) {
			setColor([color[0], colorValue[0], color[2], color[3]]);
		} else if (state[1] === 1) {
			setColor([color[0], colorValue[1], color[2], color[3]]);
		} else if (state[1] === 2) {
			setColor([color[0], colorValue[2], color[2], color[3]]);
		} else if (state[1] === 3) {
			setColor([color[0], colorValue[3], color[2], color[3]]);
		}
	}

	function ExternButton() {
		if (state[2] === 0) {
			setColor([color[0], color[1], colorValue[0], color[3]]);
		} else if (state[2] === 1) {
			setColor([color[0], color[1], colorValue[1], color[3]]);
		} else if (state[2] === 2) {
			setColor([color[0], color[1], colorValue[2], color[3]]);
		} else if (state[2] === 3) {
			setColor([color[0], color[1], colorValue[3], color[3]]);
		}
	}

	function ProButton() {
		if (state[3] === 0) {
			setColor([color[0], color[1], color[2], colorValue[0]]);
		} else if (state[3] === 1) {
			setColor([color[0], color[1], color[2], colorValue[1]]);
		} else if (state[3] === 2) {
			setColor([color[0], color[1], color[2], colorValue[2]]);
		} else if (state[3] === 3) {
			setColor([color[0], color[1], color[2], colorValue[3]]);
		}
	}

	function LocationCheck() {
    LocationButton();
		setState([state[0] + 1, state[1] + 1, state[2] + 1, state[3] + 1]);
		if (state[0] >= 3) {
			setState([state[0] = 0, state[1] = 0, state[2] = 0, state[3] = 0]);
		}
		
	}

	function InternCheck() {
    InternButton();
    setState([state[0], state[1] + 1, state[2], state[3]]);
		if (state[1] >= 3) {
			setState([state[0], state[1] = 0, state[2], state[3]]);
		}
		
	}

	function ExternCheck() {
    ExternButton();
    setState([state[0], state[1], state[2] + 1, state[3]]);
		if (state[2] >= 3) {
			setState([state[0], state[1], state[2] = 0, state[3]]);
		}
		
	}

	function ProCheck() {
    ProButton();
    setState([state[0], state[1], state[2], state[3] + 1]);
		if (state[3] >= 3) {
			setState([state[0], state[1], state[2], state[3] = 0]);
		}
		
	}
	return (
		<div className="TableContainer">
			{/* TESTING HERE */}
			<ButtonGroup>
				<Button className="DataGridButton" color={color[0]} onClick={() => LocationCheck()}>
					Frölunda
				</Button>
				<Button className="DataGridButton" color={color[1]} onClick={() => InternCheck()}>
					Intern
				</Button>
				<Button className="DataGridButton" color={color[2]} onClick={() => ExternCheck()}>
					Extern
				</Button>
				<Button className="DataGridButton" color={color[3]} onClick={() => ProCheck()}>
					Prioritet
				</Button>
			</ButtonGroup>
			{/* <p>{state}</p> */}
		</div>
	);
}
