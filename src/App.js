import { useState } from "react";
import "./App.css";
import Editor from "./Components/Editor";
import Preview from "./Components/Preview";

function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    let res = e.target.value;
    setValue(res);
    setData(res.match(/.*[^\n]/g));
  };

  return (
    <div className="App">
      <h1>markdown</h1>
      <Editor handleChange={handleChange} value={value} />
      <Preview text={value} arr={data} />
    </div>
  );
}

export default App;
