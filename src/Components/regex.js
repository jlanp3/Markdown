{
  arr
    ? arr.map((data) => {
        if (data.includes("#") && data.match(/^#* /g)) {
          let num = data.match(/^[#][#]*/g)[0].length;
          data = data.replaceAll(/^[#][#]*/g, "").trim();
          const CustomTag = `h${num}`;
          return (
            <CustomTag style={{ borderBottom: "2px solid #224b4b" }}>
              {data}
            </CustomTag>
          );
        } else if (data.includes("`") && data.match(/^[`{1-3}].*[`{1-3}]$/g)) {
          return (
            <code style={{ background: "white" }}>
              {data.replaceAll("`", "")}
            </code>
          );
        } else {
          return <p>{data}</p>;
        }
      })
    : "";
}

let headers = text.match(/(?<header>^(#|\n#).*)/gm);
let codes = text.match(/(.*`.*`.*)/gm);
console.log(headers ? headers : "");
console.log(codes ? codes : "");

{
  headers
    ? headers.map((header, i) => {
        let num = header.match(/^[#][#]*/g)[0].length;
        header = header.replaceAll(/^[#][#]*/g, "").trim();
        const CustomTag = `h${num}`;
        return (
          <CustomTag key={i} style={{ borderBottom: "2px solid #224b4b" }}>
            {header}
          </CustomTag>
        );
      })
    : "";
}

{
  headers
    ? headers.map((header, i) => {
        let num = header.match(/^[#][#]*/g)[0].length;
        header = header.replaceAll(/^[#][#]*/g, "").trim();
        const CustomTag = `h${num}`;
        return (
          <CustomTag key={i} style={{ borderBottom: "2px solid #224b4b" }}>
            {header}
          </CustomTag>
        );
      })
    : "";
}
