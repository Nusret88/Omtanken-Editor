import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup, Table, Row, UncontrolledAlert } from "reactstrap";

export default function GridMapTest() {
	const [data, setData] = useState([
		{ location: "Alla", intern: "Intern", extern: "Extern", prio: "Prioritet" },
		{ location: "Järnhälsan", intern: "", extern: "", prio: "" },
		{ location: "Pedagogen Park", intern: "", extern: "", prio: "" },
		{ location: "Landala", intern: "", extern: "", prio: "" },
		{ location: "Åby", intern: "", extern: "", prio: "" },
		{ location: "Majorna", intern: "", extern: "", prio: "" },
		{ location: "Grimmered", intern: "", extern: "", prio: "" },
		{ location: "Frölunda Torg", intern: "", extern: "", prio: "" },
		{ location: "Ekenhälsan", intern: "", extern: "", prio: "" },
	]);

	const [cSelected, setCSelected] = useState([]);

	const onCheckboxBtnClick = (selected) => {
		if (selected === 0) {
			if (cSelected.length === data.length) {
				setCSelected([]);
			} else {
				setCSelected([...Array(data.length).keys()]);
			}
		} else {
			if (cSelected.includes(selected)) {
				setCSelected(cSelected.filter((item) => item !== selected));
			} else {
				setCSelected([...cSelected, selected]);
			}
		}
	};
  
	const renderTableData = () => {
		return data.map((data, i) => {
			const { location, intern, extern, prio } = data; //destructuring
			return (
				<tr key={location}>
					<ButtonGroup key={location}>
						<tc>
							<Button
								className="DataGridButton"
								outline
								color="success"
								onClick={() => onCheckboxBtnClick(i)}
								active={cSelected.includes(i)}
							>
								{location}
							</Button>
						</tc>
						<tc>
							<Button
								className="DataGridButton"
								outline
								color="success"
								onClick={() => onCheckboxBtnClick(i)}
								active={cSelected.includes(i)}
							>
								{intern}
							</Button>
						</tc>
						<tc>
							<Button
								className="DataGridButton"
								outline
								color="success"
								onClick={() => onCheckboxBtnClick(i)}
								active={cSelected.includes(i)}
							>
								{extern}
							</Button>
						</tc>
						<tc>
							<Button
								className="DataGridButton"
								outline
								color="success"
								onClick={() => onCheckboxBtnClick(i)}
								active={cSelected.includes(i)}
							>
								{prio}
							</Button>
						</tc>
					</ButtonGroup>
				</tr>

				// <tr key={location}>
				// 	<td>{location}</td>
				// 	<td>{intern}</td>
				// 	<td>{extern}</td>
				// 	<td>{prio}</td>
				// </tr>
			);
		});
	};

	return (
		<div>
			<table id="students">
				<tbody>{renderTableData()}</tbody>
			</table>
		</div>
	);
}
