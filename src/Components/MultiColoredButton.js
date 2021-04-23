import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup, UncontrolledAlert } from "reactstrap";
import React, {useState} from 'react';



export default function GridComponent() {
  // const [cSelected, setCSelected] = useState([]);

  // const onCheckboxBtnClick = (selected) => {
  //   const index = cSelected.indexOf(selected);
  //   if (index < 0) {
  //     cSelected.push(selected);
  //   } else {
  //     cSelected.splice(index, 1);
  //   }
  //   setCSelected([...cSelected]);
  // }
  const [colorValue, setColorValue] = useState(["secondary", "success", "warning", "danger"])
  const [state, setState] = useState(1);
  const [color, setColor] = useState(colorValue[0]);

function ButtonColor (number) {
  if(state === 0) {
    setColor(colorValue[0])
  }
  else if(state === 1) {
    setColor(colorValue[1])
  }
  else if(state === 2) {
    setColor(colorValue[2])
  }
  else if(state === 3) {
    setColor(colorValue[3])
  }
}

function stateCheck (index) {
  setState(state+1)
  if (state === 3) {
    setState(0);
  }
  ButtonColor();
  return state
}

  return(
<div>
  {/* TESTING HERE */}
<Button color={color} onClick={() => stateCheck()}>Hello!</Button>
{/* <p>Selected: {JSON.stringify(cSelected)}</p> */}
</div>
  );
}
