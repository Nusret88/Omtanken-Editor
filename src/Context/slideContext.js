import React, { useState, createContext } from "react";
import { UncontrolledAlert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import format from 'date-fns/format'
import axios from 'axios';

export const SlideContext = createContext();

export const SlideProvider = (props) => {
	const date = new Date();
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date(date.setMonth(date.getMonth()+1)));
	const [type, setType] = useState([]);
	const [group, setGroup] = useState([]);
	const [unit, setUnit] = useState([]);
	const [visible, setVisible] = useState(false);
	const [slideData, setSlideData] = useState([{}]);

  const onDismiss = () => setVisible(false);

// Formatera datumet till yyyy-MM-dd
function formatDate(date){
	return format(date, "yyyy-MM-dd");
}


function fillData (Data) {
	// setUnit([...unit, Unit]);
	// setGroup([...group, Group]);
	// setType([...type, Type]);
		setSlideData([...slideData, Data])
	return console.log(slideData);
	// console.log(unit + "\n" + group + "\n" + type);
};

// What will be sent to the api
const Slide = {
	Title: title,
	Body: body,
	StartDate: formatDate(startDate),
	EndDate: formatDate(endDate),
	Unit: unit,
	Group: "TV",
	Type: type
};

// #How it maybe should look like in order for it to work as we want it to?
// const Slide = {
// 	Title: "",
// 	Body: "",
// 	StartDate: formatDate(startDate),
// 	EndDate: formatDate(endDate),
// 	PostTo: [
// {Unit: "Frölunda", Group: "TV", Type: ["Intern", "Extern"]}, 
// {Unit: "Mölndal", Group: "TV", Type: ["Intern"]}
// ]
// };

// Send with Axios
const SendSlide = () => {
	axios.get('http://127.0.0.1:8000/infonewsapi/addslide?body='+body+'&title='+Slide.Title+'&date_to_publish='+Slide.StartDate+'&date_to_expire='+Slide.EndDate+'&unit='+Slide.Unit+'&group='+Slide.Group+'&type='+Slide.Type)
	setVisible(!visible)
}

	return (<SlideContext.Provider value={{setTitle, setBody, setStartDate, setEndDate, setType, setGroup, setUnit, Slide, startDate, endDate, SendSlide, onDismiss, visible, fillData, unit, group, type, setSlideData, slideData}}>
    {props.children}
    </SlideContext.Provider>);
};
