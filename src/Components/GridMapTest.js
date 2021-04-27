import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup } from "reactstrap";
import { Prev } from "react-bootstrap/esm/PageItem";

export default function GridMapTest() {
	let data = [
		{
			location: { id: 1, value: "Alla", prio: 0 },
			intern: { id: 10, value: "Intern", prio: 0 },
			extern: { id: 19, value: "Extern", prio: 0 },
		},
		{
			location: { id: 2, value: "Järnhälsan", prio: 0 },
			intern: { id: 11, value: "", prio: 0 },
			extern: { id: 20, value: "", prio: 0 },
		},
		{
			location: { id: 3, value: "Pedagogen Park", prio: 0 },
			intern: { id: 12, value: "", prio: 0 },
			extern: { id: 21, value: "", prio: 0 },
		},
		{
			location: { id: 4, value: "Landala", prio: 0 },
			intern: { id: 13, value: "", prio: 0 },
			extern: { id: 22, value: "", prio: 0 },
		},
		{
			location: { id: 5, value: "Åby", prio: 0 },
			intern: { id: 14, value: "", prio: 0 },
			extern: { id: 23, value: "", prio: 0 },
		},
		{
			location: { id: 6, value: "Majorna", prio: 0 },
			intern: { id: 15, value: "", prio: 0 },
			extern: { id: 24, value: "", prio: 0 },
		},
		{
			location: { id: 7, value: "Grimmered", prio: 0 },
			intern: { id: 16, value: "", prio: 0 },
			extern: { id: 25, value: "", prio: 0 },
		},
		{
			location: { id: 8, value: "Frölunda Torg", prio: 0 },
			intern: { id: 17, value: "", prio: 0 },
			extern: { id: 26, value: "", prio: 0 },
		},
		{
			location: { id: 9, value: "Ekenhälsan", prio: 0 },
			intern: { id: 18, value: "", prio: 0 },
			extern: { id: 27, value: "", prio: 0 },
		},
	];
	const [cSelected, setCSelected] = useState([]);
	const [check, setCheck] = useState([]);

	// const onCheckboxBtnClick = (selected) => {
	// 	if (selected === 0) {
	// 		// if (cSelected.length === data.length) {
	// 		// 	setCSelected([]);
	// 		// } else {
	// 		// 	setCSelected([...Array(data.length).keys(data)]);
	// 		// }
	// 	} else {
	// 		if (cSelected.includes(selected)) {
	// 			setCSelected(cSelected.filter((item) => item !== selected));
	// 		} else {
	// 			setCSelected([...cSelected, selected]); 
	// 		}
	// 	}
	// };

	const onCheckboxBtnClick = (selected) => {
			if (cSelected.includes(selected)) {
				setCSelected(cSelected.filter((item) => item !== selected));
				
			} else {
				setCSelected([...cSelected, selected]); 
			}
	};

	const renderTableData = () => {
		return data.map((data, i) => {
			return (
				<tr key={data}>
					<td key={data.location}>
						
						<Button
							id={data.location.id}
							className="DataGridButton"
							outline
							color="success"
							onClick={() => onCheckboxBtnClick(data.location.id)}
							active={cSelected.includes(data.location.id)}
						>
							{data.location.value}
						</Button>
					</td>
					<td kay={data.intern}>
						<Button
							id={data.intern.id}
							className="DataGridButton"
							outline
							color="success"
							onClick={() => onCheckboxBtnClick(data.intern.id)}
							active={cSelected.includes(data.intern.id)}
						>
							{data.intern.value}
						</Button>
					</td>
					<td key={data.extern}>
						<Button
							id={data.extern.id}
							className="DataGridButton"
							outline
							color="success"
							onClick={() => onCheckboxBtnClick(data.extern.id)}
							active={cSelected.includes(data.extern.id)}
						>
							{data.extern.value}
						</Button>
					</td>
				</tr>
			);
		});
	};

	return (
		<div>
			<table id="Data">
				<tbody>{renderTableData()}</tbody>
			</table>
			<p>{cSelected}</p>

			{data.map((info, x) => {
				return (
					<div>
						<table>
							<tr>
								<td>
								<p>{data[x].location.prio}</p>
								</td>
								<td>
								<p>{data[x].intern.prio}</p>
								</td>
								<td>
								<p>{data[x].extern.prio}</p>
								</td>
							</tr>
						</table>
				</div>
				);
			})}
			
		</div>
	);
}
