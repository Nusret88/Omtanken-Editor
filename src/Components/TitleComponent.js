import React, {useContext} from 'react';
import { Button, InputGroup, FormControl } from "react-bootstrap";
import {SlideContext} from '../Context/slideContext';

export default function TitleComponent(){
  const {Slide, setTitle} = useContext(SlideContext);

  return (
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
						// onChange={}
					/>
				</InputGroup>
			</div>
      );
    }