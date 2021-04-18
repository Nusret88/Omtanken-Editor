import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import React, {useState, useContext} from 'react';
import {SlideContext} from '../Context/slideContext';
import lang, {en, se} from 'suneditor/src/lang';
import './Components.css';


/* Användning för att justera toolbar, vad som skall finnas med*/
const Settings = {
	"mode": "classic",
	"rtl": false,
	"previewTemplate": "<div style='width:1920px; height:1080px; margin:auto;'> {{contents}} </div>",
	"katex": "window.katex",
	"imageGalleryUrl": "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo",
	"videoFileInput": true, // verkar inte fungera, men URL fungerar
	"imageFileInput": true,
	"audioFileInput": true,
	"tabDisable": false,
	"videoWidth": "300",
	"videoHeight": "600",
	"videoRotation": true,
	"videoRatio": "",
	"videoRatioList": [
		{
			"name": "Classic Film 3:2",
			"value": 0.6666
		},
		{
			"name": "HD",
			"value": 0.5625
		}
	],
	"videoUploadUrl": "",
	"videoMultipleFile": true,
	"videoUploadSizeLimit": "",
	"videoAccept": ".mp4, .MKV",
	"buttonList": [
		[
			"undo",
			"redo",
			"font",
			"fontSize",
			"formatBlock"
    ],
    [
			"paragraphStyle",
			"blockquote",
			"bold",
			"underline",
			"italic",
			"strike",
			"subscript",
			"superscript",
			"fontColor",
			"hiliteColor",
			"textStyle",
			"removeFormat"],
      "/",
      [
			"outdent",
			"indent",
			"align",
			"horizontalRule",
			"list",
			"lineHeight"],
      [
			"table",
			"link",
			"image",
			"video",
			"audio",
			"imageGallery"],
      [
			"fullScreen",
			"showBlocks",
			"codeView",
			"preview"],
      [
			"print",
			"save",
			"template"
		]
	],
	lang: lang['se'], // se = Svenska och en = Engelska
  callBackSave: function (contents, isChanged) {
    alert(contents);
}
};


export default function Editor() {
	const {Slide, setBody} = useContext(SlideContext);
	

	const handleChange = (content) =>{
		setBody(content);
		console.log();
	};
  return (
    <div>
      <SunEditor 
			setOptions={Settings} 
			height={"auto"} 
			fileinput={true} 
			onVideoUpload={() => {}}
			onChange={handleChange}
			/>
			<p>
				{Slide.Body}
			</p>
			<p>{Slide.StartDate} och {Slide.EndDate}</p>
			<p>{Slide.Title}</p>
    </div>
  );
}
