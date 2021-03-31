import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";


/* Användning för att justera toolbar, vad som skall finnas med*/
const Settings = {
  imageFileInput: false,
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
      "superscript"
    ],
    ["fontColor", "hiliteColor", "textStyle", "removeFormat"],
    [
      "outdent",
      "indent",
      "align",
      "horizontalRule",
      "list",
      "lineHeight",
      "table",
      "link",
      "image",
      "video",
      "fullScreen",
      "showBlocks",
      "print",
      "save"
    ]
  ]
};

export default function App() {
  return (
    <div>
      <SunEditor setOptions={Settings} height={"60vh"} />
    </div>
  );
}
