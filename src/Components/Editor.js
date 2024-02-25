const Editor = ({ handleChange, value }) => {
  return (
    <div className="editor">
      <textarea
        value={value}
        onChange={handleChange}
        name="markdown"
        id="editor"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};
export default Editor;
