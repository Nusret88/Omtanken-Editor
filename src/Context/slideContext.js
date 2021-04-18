import React, { useState, createContext } from "react";
import format from 'date-fns/format'

export const SlideContext = createContext();

export const SlideProvider = (props) => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [type, setType] = useState("");
	const [group, setGroup] = useState("");
	const [unit, setUnit] = useState("");

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


const PostSlide = () => {
	fetch('http://127.0.0.1:8000/infonewsapi/addslide?body='+body+'&title='+Slide.Title+'&date_to_publish='+Slide.StartDate+'&date_to_expire='+Slide.EndDate+'&unit='+Slide.Unit+'&group='+Slide.Group+'&type='+Slide.Type)
  .then(response => response.json())
  .then(data => console.log(data));
}

// useEffect(() => {
// 	setAppState({ loading: true });
// 	const apiUrl = ''http://127.0.0.1:8000/infonewsapi/addslide?body='+body+'&title='+Slide.Title+'&date_to_publish='+Slide.StartDate+'&date_to_expire='+Slide.EndDate+'&unit='+Slide.Unit+'&group='+Slide.Group+'&type='+Slide.Type';
// 	axios.get(apiUrl).then((repos) => {
// 		const allRepos = repos.data;
// 		setAppState({ loading: false, repos: allRepos });
// 	});
// }, [setAppState]);

	return (<SlideContext.Provider value={{setTitle, setBody, setStartDate, setEndDate, setType, setGroup, setUnit, Slide, PostSlide, startDate, endDate}}>
    {props.children}
    </SlideContext.Provider>);
};
