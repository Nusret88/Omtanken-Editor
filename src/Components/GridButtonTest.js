import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup, Table, Row, UncontrolledAlert } from "reactstrap";
import React, { useState } from "react";
import { AllInbox, SelectAll } from "@material-ui/icons";

export default function GridButtonTest() {
	const [cSelected, setCSelected] = useState([]);

	const button_list = [
		["Frölunda", "Intern", "Extern", "Prioritet"],
		["Mölndal", "Intern", "Extern", "Prioritet"],
    ["Göteborg", "Intern", "Extern", "Prioritet"]
	];

	const onCheckboxBtnClick = (selected) => {
		if (selected === 0) {
			if (cSelected.length === button_list.length) {
				setCSelected([]);
			} else {
				setCSelected([...Array(button_list.length).keys()]);
			}
		} else {
			if (cSelected.includes(selected)) {
				setCSelected(cSelected.filter((item) => item !== selected));
			} else {
				setCSelected([...cSelected, selected]);
			}
		}
	};

	return (
		<div className="GridContainer">
			{/* TESTING HERE */}
			<Table hover>
        
				<ButtonGroup>
					{button_list.map((btn, i) => (
            <Row>
						<Button
							outline
							color="success"
							onClick={() => onCheckboxBtnClick(i)}
							active={cSelected.includes(i)}
						>
							{btn}
						</Button>
            </Row>
					))}
				</ButtonGroup>
        
			</Table>
			{/* <p>Selected: {JSON.stringify(cSelected)}</p> */}
		</div>
	);
}
