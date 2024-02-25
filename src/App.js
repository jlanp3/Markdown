import { useEffect, useState } from "react";
import "./App.css";
import Editor from "./Components/Editor";
import Preview from "./Components/Preview";
// markdown libs
import { marked } from "marked";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    let ini = [
      "# Welcome to my React Markdown Previewer!",
      "## This is a sub-heading...",
      "\n",
      "Heres some code, `<div></div>`, between 2 backticks.",
      "\n",
      "```",
      "// this is multi-line code:",
      "function anotherExample(firstLine, lastLine) {",
      "  if (firstLine == '```' && lastLine == '```') {",
      "    return multiLineCode;",
      "  }",
      "}",
      "```",
      "\n",
      "You can also make text **bold**... whoa!",
      "There's also [links](https://www.freecodecamp.org), and",
      "> Block Quotes!",
      "- And of course there are lists.",
      "  - Some are bulleted.",
      "     - With different indentation levels.",
      "        - That look like this.",
      "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)",
    ];
    setText(ini.join("\n", <br />));
  }, []);

  useEffect(() => {
    document.getElementById("preview").innerHTML = marked.parse(text);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="header">Markdown</h1>
      <Editor handleChange={handleChange} value={text} />
      <Preview text={text} />
    </div>
  );
}

export default App;
