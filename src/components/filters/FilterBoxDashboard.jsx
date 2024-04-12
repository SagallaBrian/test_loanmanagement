import { DatePicker } from "antd";
import { dict_filterbox } from "../../project-data/dictionary/filterbox_dictionary";
import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import FilterBaxCheckBox from "./FilterBaxCheckBox";
import { dict_members_dashboard } from "../../project-data/dictionary/members_dictionary";

const { RangePicker } = DatePicker;

function FilterBoxDashboard() {
  const [selectedOption, setSelectedOption] = useState("all");
  const { language } = useContext(LanguageContext);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.id);
  };

  return (
    <>
      <div
        className="px-1 pt-4 pb-2 pe-2 rounded-3"
        style={{ backgroundColor: "#f4f5f6" }}
      >
        <ul>
          <li>
            <div className="row align-items-center">
              <div className=" pt-3 pt-lg-0 col-lg-1">
                {dict_filterbox[language].regdate.name}
              </div>
              <div className="col-lg-11">
                <div className="d-lg-flex">
                  <div className="text-nowrap  table-responsive py-3 py-lg-0">
                    {Object.entries(
                      dict_filterbox[language].regdate.options
                    ).map(([key, value]) => (
                      <span key={key}>
                        <input
                          type="radio"
                          key={key}
                          className="btn-check"
                          name="options"
                          id={key}
                          checked={selectedOption === key}
                          onChange={handleOptionChange}
                        />
                        <label
                          className={`btn small ${
                            selectedOption === key ? "btn-dark" : "bg-white"
                          } me-2`}
                          htmlFor={key}
                        >
                          {value}
                        </label>
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 pt-lg-0 flex-grow-1 ">
                    <RangePicker
                      placeholder={dict_filterbox[language].regdate.placeholder}
                      size={"large"}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="row gx-1 py-0 py-lg-2">
              <div className=" pt-3 pt-lg-0 col-lg-1">
                {dict_filterbox[language].channel.name}
              </div>
              <div className="col-lg-7">
                <div>
                  <FilterBaxCheckBox
                    optionsProp={Object.entries(
                      dict_filterbox[language].channel.options
                    )}
                    paddleft
                  />
                </div>
              </div>

              <div className=" pt-3 pt-lg-0 col-lg-1">
                {dict_filterbox[language].loan_status.name}
              </div>
              <div className="col-lg-3">
                <FilterBaxCheckBox
                  optionsProp={Object.entries(
                    dict_filterbox[language].loan_status.options
                  )}
                />
              </div>
            </div>
          </li>

          <li>
            <div className="row gx-1 py-0 py-lg-2">
              <div className=" pt-3 pt-lg-0 col-lg-1">
                <div className="text-nowrap overflow-hidden">
                  {dict_filterbox[language].invt_type_status.name}
                </div>
              </div>
              <div className="col-lg-11">
                <FilterBaxCheckBox
                  optionsProp={Object.entries(
                    dict_filterbox[language].invt_type_status.options
                  )}
                />
              </div>
            </div>
          </li>

          <li>
            <div className="row gx-1 py-0 py-lg-2">
              <div className=" pt-3 pt-lg-0 col-lg-1">
                {dict_filterbox[language].search.name}
              </div>
              <div className="col-lg-11">
                <div className="d-flex">
                  <select
                    className="form-select me-3"
                    name="parent"
                    id="parent"
                    style={{ width: "200px" }}
                  >
                    {Object.entries(dict_members_dashboard[language]).map(
                      ([key, value]) => {
                        if (key === "number") {
                          return;
                        }
                        return (
                          <option key={key} value={value}>
                            {value}
                          </option>
                        );
                      }
                    )}
                  </select>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder={dict_filterbox[language].search.placeholder}
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="row py-3">
        <div className="col-6 text-end">
          <button className="btn btn-dark px-5">
            {dict_filterbox[language].search.name}
          </button>
        </div>
        <div className="col-6 text-end">
          <button className="btn bg-white border-dark">
            {dict_filterbox[language].search.initialize}
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterBoxDashboard;
