import { useState } from "react";
import "./App.css";
import Editor from "./Components/Editor";
import Preview from "./Components/Preview";

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>markdown</h1>
      <Editor handleChange={handleChange} value={text} />
      <Preview />
    </div>
  );
}

export default App;
