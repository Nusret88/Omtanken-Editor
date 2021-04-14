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

const Slide = {
    	title: title,
    	body: body,
    	startDate: startDate,
    	endDate: endDate,
    	unit: unit,
    	group: group,
    	type: type
    };

  

	return (<SlideContext.Provider value={{setTitle, setBody, setStartDate, setEndDate, setType, setGroup, setUnit, Slide}}>
    {props.children}
    </SlideContext.Provider>);
};
