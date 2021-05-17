import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup } from "reactstrap";
import {SlideContext} from "../Context/slideContext";
// import { Button, ButtonGroup, Table, TableCell} from 'semantic-ui-react';

export default function MatrixComponent() {
  const {fillData, unit, setUnit, group, setGroup, type, setType, setSlideData, slideData} = useContext(SlideContext);
  const [data, setData] = useState([
    {
      "location": { "id": 1, "value": "Alla", "prio": 0 },
      "intern": { "id": 10, "value": "Intern", "prio": 0 },
      "extern": { "id": 19, "value": "Extern", "prio": 0 },
    },
    {
      location: { id: 2, value: "Järnhälsan", prio: 0, loc: "Järnhälsan" },
      intern: { id: 11, value: "", prio: 0, name: "Intern", loc: "Järnhälsan" },
      extern: { id: 20, value: "", prio: 0, name: "Extern", loc: "Järnhälsan" },
    },
    {
      location: { id: 3, value: "Pedagogen Park", prio: 0, loc: "Pedagogen Park"},
      intern: { id: 12, value: "", prio: 0, name: "Intern", loc: "Pedagogen Park" },
      extern: { id: 21, value: "", prio: 0, name: "Extern", loc: "Pedagogen Park" },
    },
    {
      location: { id: 4, value: "Landala", prio: 0, loc: "Landala" },
      intern: { id: 13, value: "", prio: 0, name: "Intern", loc: "Landala" },
      extern: { id: 22, value: "", prio: 0, name: "Extern", loc: "Landala" },
    },
    {
      location: { id: 5, value: "Åby", prio: 0, loc: "Åby" },
      intern: { id: 14, value: "", prio: 0, name: "Intern", loc: "Åby" },
      extern: { id: 23, value: "", prio: 0, name: "Extern", loc: "Åby" },
    },
    {
      location: { id: 6, value: "Majorna", prio: 0, loc: "Majorna" },
      intern: { id: 15, value: "", prio: 0, name: "Intern", loc: "Majorna" },
      extern: { id: 24, value: "", prio: 0, name: "Extern", loc: "Majorna" },
    },
    {
      location: { id: 7, value: "Grimmered", prio: 0, loc: "Grimmered" },
      intern: { id: 16, value: "", prio: 0, name: "Intern", loc: "Grimmered" },
      extern: { id: 25, value: "", prio: 0, name: "Extern", loc: "Grimmered" },
    },
    {
      location: { id: 8, value: "Frölunda Torg", prio: 0, loc: "Frölunda Torg" },
      intern: { id: 17, value: "", prio: 0, name: "Intern", loc: "Frölunda Torg" },
      extern: { id: 26, value: "", prio: 0, name: "Extern", loc: "Frölunda Torg" },
    },
    {
      location: { id: 9, value: "Ekenhälsan", prio: 0, loc: "Ekenhälsan" },
      intern: { id: 18, value: "", prio: 0, name: "Intern", loc: "Ekenhälsan" },
      extern: { id: 27, value: "", prio: 0, name: "Extern", loc: "Ekenhälsan" },
    },
  ]);
  const [workplaces, setWorkplaces] = useState({ 
    "alla": {
    "Järnhälsan": {
      "TV": 0, // 0 none, 1 extern, 2 intern, 3 both
      "intern": 0, // 0 none, 1 low, 2 medium, 3 high
      "extern": 0, // 0 none, 1 low, 2 medium, 3 high
    },
    "Pedagogen Park": {
      "TV": 0, // 0 none, 1 extern, 2 intern, 3 both
      "intern": 0, // 0 none, 1 low, 2 medium, 3 high
      "extern": 0, // 0 none, 1 low, 2 medium, 3 high
    }, 
    "Landala": {
      "TV": 0, // 0 none, 1 extern, 2 intern, 3 both
      "intern": 0, // 0 none, 1 low, 2 medium, 3 high
      "extern": 0, // 0 none, 1 low, 2 medium, 3 high
    }, 
    "Åby": {
      "TV": 0, // 0 none, 1 extern, 2 intern, 3 both
      "intern": 0, // 0 none, 1 low, 2 medium, 3 high
      "extern": 0, // 0 none, 1 low, 2 medium, 3 high
    }, 
    "Majorna": {
      "TV": 0, // 0 none, 1 extern, 2 intern, 3 both
      "intern": 0, // 0 none, 1 low, 2 medium, 3 high
      "extern": 0, // 0 none, 1 low, 2 medium, 3 high
    }, 
    "Grimmered": {
      "TV": 0, // 0 none, 1 extern, 2 intern, 3 both
      "intern": 0, // 0 none, 1 low, 2 medium, 3 high
      "extern": 0, // 0 none, 1 low, 2 medium, 3 high
    }, 
    "Frölunda Torg": {
      "TV": 0, // 0 none, 1 extern, 2 intern, 3 both
      "intern": 0, // 0 none, 1 low, 2 medium, 3 high
      "extern": 0, // 0 none, 1 low, 2 medium, 3 high
    }, 
    "Ekenhälsan": {
      "TV": 0, // 0 none, 1 extern, 2 intern, 3 both
      "intern": 0, // 0 none, 1 low, 2 medium, 3 high
      "extern": 0, // 0 none, 1 low, 2 medium, 3 high
    },} 
  })
  setType(workplaces.alla)
  const [cSelected, setCSelected] = useState([]);

  const onCheckboxBtnClick = (idx, selected) => {
    // If first row, handle Alla, Intern, Extern click
    if (idx === 0) {
      switch (selected.value) {
        case "Alla":
          // Make a list of ids
          let all_data_ids = [];

          data.forEach((item) => {
            all_data_ids.push(item.location.id);
            all_data_ids.push(item.intern.id);
            all_data_ids.push(item.extern.id);
          });
          // Workplaces["alla"].forEach((item) => { return setWorkplaces(item: {"TV": 3})})
          // setWorkplaces(...Workplaces, {"Frölunda Torg": {"TV": 3}})
          console.log(workplaces.alla);

          // NEW adds for all
          let Slide = [];
          data.forEach((item) => {
            Slide.push({unit: item.location.value, group: "", type: [item.intern.name, item.extern.name] })
          });
          let all_unit = [];
          let all_type = [];
          data.forEach((item) => {
            all_type.push(item.intern.name);
            all_type.push(item.extern.name);
            all_unit.push(item.location.loc);
          });

          // if all item already selected make selected empty else select all item
          if (cSelected.length === all_data_ids.length) {
            setCSelected([]);
            // NEW removes all
            setType([]);
            setUnit([])
          } else {
            setCSelected(all_data_ids);
            // NEW adds all
            setType(all_type);
            setUnit(all_unit);
          }
          console.log(slideData);
          break;
        case "Intern":
          // make a list of ids for intern column
          let column_2 = data.map((item) => item.intern.id);
          // NEW adds for column 2
          let column_2_type = data.map((item) => item.intern.name);
          let column_2_unit = data.map((item) => item.location.value);

          // If every item in intern column is selected, remove intern ids. Else add all ids to selection
          if (column_2.every((i) => cSelected.includes(i))) {
            setCSelected([
              ...cSelected.filter((item) => !column_2.includes(item)),
            ]);
            //NEW removes column 2
            setType([
              ...type.filter((item) => !column_2_type.includes(item)),
            ]);
            setUnit([
              ...unit.filter((item) => !column_2_unit.includes(item)),
            ]);
            console.log(type)
            console.log(cSelected)
            console.log(unit)
          } else {
            setCSelected([...cSelected, ...column_2]);
            //NEW adds column 2
            setType([...type, ...column_2_type]);
            setUnit([...unit, ...column_2_unit]);
            console.log(type)
            console.log(cSelected)
            console.log(unit)
          }
          break;
        case "Extern":
          // make a list of ids for extern column
          let column_3 = data.map((item) => item.extern.id);
          // NEW adds for column 3
          let column_3_type = data.map((item) => item.extern.name);
          let column_3_unit = data.map((item) => item.location.value);
          // If every item in Extern column is selected, remove extern ids. Else add all ids to selection
          if (column_3.every((i) => cSelected.includes(i))) {
            setCSelected([
              ...cSelected.filter((item) => !column_3.includes(item)),
            ]);
            //NEW removes column 3
            setType([
              ...type.filter((item) => !column_3_type.includes(item)),
            ]);
            setUnit([
              ...unit.filter((item) => !column_3_unit.includes(item)),
            ]);
            console.log(type)
            console.log(cSelected)
            console.log(unit)
          } else {
            setCSelected([...cSelected, ...column_3]);
            //NEW adds column 3
            setType([...type, ...column_3_type]);
            setUnit([...unit, ...column_3_unit]);
            console.log(type)
            console.log(cSelected)
            console.log(unit)
          }
          break;

        default:
          break;
      }
    } else {
      // If not first row check if the selected item has value.
      if (selected.value) {
        // Find the whole object from data
        let found_data = data.find(
          (item) => item.location.value === selected.value
        );
        // make a list of ids
        let found_data_ids = [
          found_data.location.id,
          found_data.intern.id,
          found_data.extern.id,
        ];
        //NEW adds for row
        let found_data_type = [
          found_data.intern.name,
          found_data.extern.name,
        ];
        let found_data_unit = [
          found_data.location.value
        ];

        // If ids are already selected, deselect ids. else add ids to selection
        if (found_data_ids.every((i) => cSelected.includes(i))) {
          setCSelected([
            ...cSelected.filter((item) => !found_data_ids.includes(item)),
          ]);
          //NEW removes row
          setType([
            ...type.filter((item) => !found_data_type.includes(item)),
          ]);
          setUnit([
            ...unit.filter((item) => !found_data_unit.includes(item)),
          ]);
        } else {
          setCSelected([...cSelected, ...found_data_ids]);
          //NEW adds row
          setType([...type, ...found_data_type]);
          setUnit([...unit, ...found_data_unit]);
          
        }
      } else {
        // If selected item doesn't have value then handle individual button click

        // if Item id already in selection remove it, else add it
        if (cSelected.includes(selected.id)) {
          setCSelected(cSelected.filter((item) => item !== selected.id));
          //NEW remove selected
          setType(type.filter((item) => item !== selected.name));
          setUnit(unit.filter((item) => item !== selected.loc));
          console.log(type)
            console.log(cSelected)
            console.log(unit)
        } else {
          setCSelected([...cSelected, selected.id]);
          //NEW add selected
          setType([...type, selected.name]);
          setUnit([...unit, selected.loc]);
          console.log(type)
            console.log(cSelected)
            console.log(unit)
        }
      }
    }
  };

  const renderTableData = () => {
    return data.map((data, i) => {
      // const { location, intern, extern, prio } = data; //destructuring
      return (
        <tr key={data}>
          <ButtonGroup id={i} key={i}>
            <tc>
              <Button
                id={data.location.id}
                className="DataGridButton"
                outline
                color="success"
                onClick={() => onCheckboxBtnClick(i, data.location)}
                active={cSelected.includes(data.location.id)}
              >
                {data.location.value}
              </Button>
            </tc>
            <td key={data}>
              <tc>
                <Button
                  id={data.intern.id}
                  className="DataGridButton"
                  outline
                  color="success"
                  onClick={() => onCheckboxBtnClick(i, data.intern)}
                  active={cSelected.includes(data.intern.id)}
                >
                  {data.intern.value}
                </Button>
              </tc>
            </td>
            <tc>
              <Button
                id={data.extern.id}
                className="DataGridButton"
                outline
                color="success"
                onClick={() => onCheckboxBtnClick(i, data.extern)}
                active={cSelected.includes(data.extern.id)}
              >
                {data.extern.value}
              </Button>
            </tc>
          </ButtonGroup>
        </tr>
      );
    });
  };

  return (
    <div>
      <table id="Data">
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
}
