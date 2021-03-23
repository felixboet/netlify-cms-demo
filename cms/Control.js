const Control = (props) => {
  const { forID, value, onChange, classNameWrapper } = props;
  return (
    <input
      type="text"
      id={forID}
      className={classNameWrapper}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Control;
