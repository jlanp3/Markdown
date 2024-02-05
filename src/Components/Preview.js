const Preview = ({ text, arr }) => {
  return (
    <div className="preview">
      {arr
        ? arr.map((data) => {
            if (data.includes("#") && data.match(/^#* .*/g)) {
              let num = data.match(/#/g).length;
              const CustomTag = `h${num}`;
              // console.log(CustomTag);
              return <CustomTag>{data}</CustomTag>;
            } else {
              return <p>{data}</p>;
            }
          })
        : ""}
    </div>
  );
};

export default Preview;
