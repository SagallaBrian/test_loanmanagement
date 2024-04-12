import "./fillterbox.css";
function FilterBaxCheckBox({ optionsProp, paddleft }) {
  return (
    <>
      {optionsProp.map(([key, val], ind) => (
        <div className="form-check form-check-inline" key={key}>
          <input
            className="form-check-input pl-5 "
            style={{ fontSize: "22px" }}
            type="checkbox"
            id={key}
          />
          <label className="form-check-label pt-1 " htmlFor={key}>
            {val}
          </label>
        </div>
      ))}
    </>
  );
}

export default FilterBaxCheckBox;
