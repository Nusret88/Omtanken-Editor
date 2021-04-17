import React, {useState, useContext} from 'react';
import MultiSelect from "react-multi-select-component";
import { Button, InputGroup, FormControl, Dropdown } from "react-bootstrap";
import {SlideContext} from '../Context/slideContext';

export default function SendToPicker(){
	const {Slide} = useContext(SlideContext);

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
  return(
		<div>
     {/* dropdown för lokaler */}
				 <MultiSelect
					className="locationSelect"
					options={options}
					value={selected}
					onChange={setSelected}
					labelledBy="Select"
				/> 
			 {/* dropdown för intern eller extern TV  */}
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
  );
}