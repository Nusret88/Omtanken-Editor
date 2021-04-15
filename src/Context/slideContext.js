import React, { useState, createContext } from "react";

export const SlideContext = createContext();

export const SlideProvider = (props) => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [type, setType] = useState("");
	const [group, setGroup] = useState("");
	const [unit, setUnit] = useState("");

// const Slide = {
//     	title: title,
//     	body: body,
//     	startDate: startDate,
//     	endDate: endDate,
//     	unit: unit,
//     	group: group,
//     	type: type
//     };

let start = startDate.toString;
const Slide = {
	title: "Test from React",
	body: body,
	startDate: startDate.toDateString,
	endDate: endDate.toDateString,
	unit: "Frölunda",
	group: "Ledning",
	type: "Extern"
};


const PostSlide = () => {
	fetch('http://127.0.0.1:8000/infonewsapi/addslide?body='+Slide.body+'&title=slide test från React&date_to_publish=2021-05-12&date_to_expire=2021-06-23&unit=Mölndal&group=Ledning&type=Extern')
  .then(response => response.json())
  .then(data => console.log(data));
}

// const PostSlide = () => {
// 	fetch('http://127.0.0.1:8000/infonewsapi/addslide?body='+Slide.body+'&title=slide test från React&date_to_publish='+startDate+'&date_to_expire='+endDate+'&unit=Mölndal&group=Ledning&type=Extern')
//   .then(response => response.json())
//   .then(data => console.log(data));
// }

  

	return (<SlideContext.Provider value={{setTitle, setBody, setStartDate, setEndDate, setType, setGroup, setUnit, Slide, PostSlide, startDate, endDate}}>
    {props.children}
    </SlideContext.Provider>);
};
