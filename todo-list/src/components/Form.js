const Form = ({ inputValue, onChange }) => {
  return (
    <input
      className="form-control"
      value={inputValue}
      onChange={onChange}
      placeholder="Add new task..."
    />
  );
};

export default Form;
