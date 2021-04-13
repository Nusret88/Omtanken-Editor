import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";








/* Användning för att justera toolbar, vad som skall finnas med*/
const Settings = {
	"mode": "classic",
	"rtl": false,
	"katex": "window.katex",
	"imageGalleryUrl": "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo",
	"videoFileInput": true,
	"tabDisable": false,

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
  callBackSave: function (contents, isChanged) {
    alert(contents);
}
};

export default function Editor() {
  return (
    <div>
      <SunEditor setOptions={Settings} height={"auto"} />
    </div>
  );
}
