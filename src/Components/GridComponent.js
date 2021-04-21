import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup, UncontrolledAlert } from "reactstrap";
import React, {useState} from 'react';



export default function GridComponent() {
  const [cSelected, setCSelected] = useState([]);

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  }
  return(
<div className="GridContainer">
  {/* TESTING HERE */}
<ButtonGroup>
<Button outline color="success" onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>Frölunda</Button>
<Button outline color="success" onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)}>Två</Button>
<Button outline color="success" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>Tre</Button>
<Button outline color="success" onClick={() => onCheckboxBtnClick(4)} active={cSelected.includes(4)}>Fyra</Button>
</ButtonGroup>
{/* <p>Selected: {JSON.stringify(cSelected)}</p> */}
</div>
  );
}
