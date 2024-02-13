const Preview = ({ text, arr }) => {
  return (
    <div className="preview">
      {arr &&
        arr.map((data) => {
          return data;
        })}
    </div>
  );
};

export default Preview;
