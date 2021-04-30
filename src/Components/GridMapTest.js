import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup } from "reactstrap";

export default function GridMapTest() {
  const [data, setData] = useState([
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
  ]);
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

          // if all item already selected make selected empty else select all item
          if (cSelected.length === all_data_ids.length) {
            setCSelected([]);
          } else {
            setCSelected(all_data_ids);
          }
          break;
        case "Intern":
          // make a list of ids for intern column
          let column_2 = data.map((item) => item.intern.id);

          // If every item in intern column is selected, remove intern ids. Else add all ids to selection
          if (column_2.every((i) => cSelected.includes(i))) {
            setCSelected([
              ...cSelected.filter((item) => !column_2.includes(item)),
            ]);
          } else {
            setCSelected([...cSelected, ...column_2]);
          }
          break;
        case "Extern":
          // make a list of ids for extern column
          let column_3 = data.map((item) => item.extern.id);

          // If every item in Extern column is selected, remove extern ids. Else add all ids to selection
          if (column_3.every((i) => cSelected.includes(i))) {
            setCSelected([
              ...cSelected.filter((item) => !column_3.includes(item)),
            ]);
          } else {
            setCSelected([...cSelected, ...column_3]);
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

        // If ids are already selected, deselect ids. else add ids to selection
        if (found_data_ids.every((i) => cSelected.includes(i))) {
          setCSelected([
            ...cSelected.filter((item) => !found_data_ids.includes(item)),
          ]);
        } else {
          setCSelected([...cSelected, ...found_data_ids]);
        }
      } else {
        // If selected item doesn't have value then handle individual button click

        // if Item id already in selection remove it, else add it
        if (cSelected.includes(selected.id)) {
          setCSelected(cSelected.filter((item) => item !== selected.id));
        } else {
          setCSelected([...cSelected, selected.id]);
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
