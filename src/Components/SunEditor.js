import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import React, { useState, useContext } from "react";
import { SlideContext } from "../Context/slideContext";
import lang, { en, se } from "suneditor/src/lang";
import "./Components.css";
import image from "suneditor/src/plugins/dialog/link";
import list from "suneditor/src/plugins/submenu/list";
import { font,
	fontSize,
	formatBlock,
	fontColor,
	hiliteColor,
	align,
	horizontalRule,
	table,
	link,
	video } from "suneditor/src/plugins";

/* Användning för att justera toolbar, vad som skall finnas med*/
const Settings = {
	mode: "classic",
	rtl: false,
	previewTemplate:
		"<div style='width:1920px; height:1080px; margin:auto;'> {{contents}} </div>",
	katex: "window.katex",
	imageGalleryUrl:
		"https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo",
	videoFileInput: false, // verkar inte fungera, men URL fungerar
	imageFileInput: true,
	audioFileInput: true,
	iframe: false,
	plugins: [
    font,
    fontSize,
    formatBlock,
    fontColor,
    hiliteColor,
    align,
    horizontalRule,
    list,
    table,
    link,
    image,
    video
]  ,
	tabDisable: false,
	videoWidth: "1200",
	videoHeight: "600",
	videoRotation: true,
	videoRatio: "",
	videoRatioList: [
		{
			name: "Classic Film 3:2",
			value: 0.6666,
		},
		{
			name: "HD",
			value: 0.5625,
		},
	],
	videoUploadUrl: "",
	// videoMultipleFile: true,
	// videoUploadSizeLimit: "",
	// videoAccept: ".mp4, .MKV",
	printTemplate:
		"<div style='width:auto; max-width:1080px; margin:auto;'>    <h1>Print Template</h1>     {{contents}}     <div>_Footer_</div></div>            ",
	// TEMPLATE LISTA HÄR:
	templates: [
		{
			name: "Template-1",
			html: `<p><h3>Rubrik, syns på hopfälld nyhet</h3>
			<div class="se-component se-image-container __se__float-right" contenteditable="false">
					<figure>
							<img src="https://webdoc.vasterleden.se/webdoc/publish/assets/pics/image-placeholder-portrait.png" alt="" data-proportion="true" data-size="507px,418px" data-align="right" data-file-name="image-placeholder-portrait.png" data-file-size="0" data-origin="100%,auto" data-index="1" origin-size="137,180" style="width: 507px; height: 418px;">
					</figure>
			</div>
			<h5>Ingress. Synliga fel som överstrykningar m.m. saknas, vilket stöder teorin om en nonsenstext.</h5>
			
			<h5>Några forskare tror sig dock ha hittat ändringar av bokstäver som kan vara kort </h5>
			
			<div>En Wikipediaartikels tillförlitlighet kan bedömas bland annat genom att studera artikelns historik, som framgår av forskningsresultat nedan.</div>
			
			<div><span><br>
			</span></div>
			
			<div><span>Jenny Fogelberg </span><br>
			<span>Kommunikatör</span><br>
			 </div>
			
			<div style="width:750px;">  
					<table>
							<tbody>
									<tr>
											<td>
													<p>En Wikipediaartikels tillförlitlighet kan bedömas bland annat genom att studera artikelns historik, som framgår av forskningsresultat nedan.</p>
											</td>
											<td>
													<p>En Wikipediaartikels tillförlitlighet kan bedömas bland annat genom att studera artikelns historik, som framgår av forskningsresultat nedan.</p>
											</td>
									</tr>
							</tbody>
					</table>
			</div>
			</p>`,
		},
		{
			name: "Template-2",
			html: `<p><div class="image-text-left color-brown">
			<span class="image-text-image" style="background-image:url(images/YOUR-IMAGE.jpg);"  >mountain</span>
			<div class="image-text-column">
			
			<div>
			<h2>Your Title<h2>
			
			<p>Your text here<p>
			
			</div>
			</div>
			</div></p>`,
		},
		{
			name: "Template-3",
			html: `<p><span style="font-size: 48px;">Välkomna till&nbsp;</span></p><div class="se-component se-image-container __se__float-none" contenteditable="false"><figure style="margin: 0px;"><img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/02/a9/16.jpg" alt="Bird-White eagle" data-rotate="" data-proportion="true" data-rotatex="" data-rotatey="" data-size="," data-align="none" data-percentage="auto,auto" data-index="0" data-file-name="white-eagle.jpg" data-file-size="0" origin-size="640,380" data-origin="," style=""></figure></div>`,
		},
	],
	buttonList: [
		["undo", "redo", "font", "fontSize", "formatBlock"],
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
			"removeFormat",
		],
		"/",
		["outdent", "indent", "align", "horizontalRule", "list", "lineHeight"],
		["table", "link", "image", "video", "audio", "imageGallery"],
		["fullScreen", "showBlocks", "codeView", "preview"],
		["print", "save", "template"],
	],
	colorList: [
		[
			"brown",
			"#daa520",
			"darkred",
			"red",
			"orange",
			"yellow",
			"lightgreen",
			"green",
			"darkgreen",
			"teal",
			"aqua",
			"lightblue",
			"blue",
			"darkblue",
			"purple",
			"pink",
			"white",
			"grey",
			"black",
		],
	],
	lang: lang["se"], // se = Svenska och en = Engelska
	callBackSave: function (contents, isChanged) {
		alert(contents);
	},
};

export default function Editor() {
	const { Slide, setBody } = useContext(SlideContext);

	const handleChange = (content) => {
		setBody(content);
		console.log();
	};
	const [array, setArray] = useState(["Frölunda", "Göteborg", "Mölndal"]);
	return (
		<div>
			<SunEditor
				setOptions={Settings}
				height={"auto"}
				fileinput={true}
				onVideoUpload={() => {}}
				onChange={handleChange}
			/>
		</div>
	);
}
