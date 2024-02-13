import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Editor from "./Components/Editor";
import Preview from "./Components/Preview";

function App() {
  const [text, setText] = useState([]);
  const [arr, setArr] = useState([]);

  const handleChange = (e) => {
    let res = e.target.value;
    res = res.split(/\n/);
    setText(res);
  };

  const search = useCallback((text) => {
    let res = text.map((char) => {
      // symbols(char);
      if (char.match(/^[#][#]*/)) {
        return header(char);
      } else {
        return parag(char);
      }
    });
    setArr(res);
  }, []);

  useEffect(() => {
    search(text);
  }, [search, text]);

  const header = (data) => {
    let num = data.match(/^[#][#]*/)[0].length;
    data = data.replace(/^[#][#]*/, "").trim();
    const CustomTag = `h${num}`;
    let custom = <CustomTag>{data}</CustomTag>;
    return custom;
  };

  const parag = (data) => {
    if (data.match(/^\s|^\w|^\W/)) {
      return <p>{data}</p>;
    }
  };

  const symbols = (data) => {};

  console.log(text, arr);
  return (
    <div className="App">
      <h1>markdown</h1>
      <Editor handleChange={handleChange} />
      <Preview />
    </div>
  );
}

export default App;
