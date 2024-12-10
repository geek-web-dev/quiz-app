const Options = ({
  options,
  optionAny = true,
}: {
  options: string[] | number[];
  optionAny?: boolean;
}) => {
  return (
    <>
      {optionAny ? <option value={""}>Any</option> : null}
      {options.map((opt, i) => (
        <option value={opt} key={i}>
          {opt}
        </option>
      ))}
    </>
  );
};

export default Options;
