import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup } from "reactstrap";

export default function GridMapTest() {
  // const [data, setData] = useState([
  // 	{ location: "Alla", intern: "Intern", extern: "Extern", prio: "Prioritet" },
  // 	{ location: "Järnhälsan", intern: "", extern: "", prio: "" },
  // 	{ location: "Pedagogen Park", intern: "", extern: "", prio: "" },
  // 	{ location: "Landala", intern: "", extern: "", prio: "" },
  // 	{ location: "Åby", intern: "", extern: "", prio: "" },
  // 	{ location: "Majorna", intern: "", extern: "", prio: "" },
  // 	{ location: "Grimmered", intern: "", extern: "", prio: "" },
  // 	{ location: "Frölunda Torg", intern: "", extern: "", prio: "" },
  // 	{ location: "Ekenhälsan", intern: "", extern: "", prio: "" },
  // ]);

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
    if (idx === 0) {
      switch (selected.value) {
        case "Alla":
          let column_1 = data.map((item) => item.location.id);

          if (column_1.every((i) => cSelected.includes(i))) {
            setCSelected([
              ...cSelected.filter((item) => !column_1.includes(item)),
            ]);
          } else {
            setCSelected([...cSelected, ...column_1]);
          }
          break;
        case "Intern":
          let column_2 = data.map((item) => item.intern.id);

          if (column_2.every((i) => cSelected.includes(i))) {
            setCSelected([
              ...cSelected.filter((item) => !column_2.includes(item)),
            ]);
          } else {
            setCSelected([...cSelected, ...column_2]);
          }
          break;
        case "Extern":
          let column_3 = data.map((item) => item.extern.id);

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
      if (cSelected.includes(selected.id)) {
        setCSelected(cSelected.filter((item) => item !== selected.id));
      } else {
        setCSelected([...cSelected, selected.id]);
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
			<p>{cSelected}</p>
    </div>
  );
}