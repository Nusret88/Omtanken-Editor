import React, { useState, createContext } from "react";
import { UncontrolledAlert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import format from 'date-fns/format'
import axios from 'axios';

export const SlideContext = createContext();

export const SlideProvider = (props) => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [type, setType] = useState("");
	const [group, setGroup] = useState("");
	const [unit, setUnit] = useState("");
	const [visible, setVisible] = useState(false);

  const onDismiss = () => setVisible(false);

// Formatera datumet till yyyy-MM-dd
function formatDate(date){
	return format(date, "yyyy-MM-dd");
}

const Slide = {
	Title: title,
	Body: body,
	StartDate: formatDate(startDate),
	EndDate: formatDate(endDate),
	Unit: "Frölunda",
	Group: "TV",
	Type: "Extern"
};


// - What Is the Maximum Length of a URL? 
// Technically speaking, your URL should never be longer than 2,048 characters.

// Send with Axios
const SendSlide = () => {
	axios.get('http://127.0.0.1:8000/infonewsapi/addslide?body='+body+'&title='+Slide.Title+'&date_to_publish='+Slide.StartDate+'&date_to_expire='+Slide.EndDate+'&unit='+Slide.Unit+'&group='+Slide.Group+'&type='+Slide.Type)
	setVisible(!visible)
}

	return (<SlideContext.Provider value={{setTitle, setBody, setStartDate, setEndDate, setType, setGroup, setUnit, Slide, startDate, endDate, SendSlide, onDismiss, visible}}>
    {props.children}
    </SlideContext.Provider>);
};
