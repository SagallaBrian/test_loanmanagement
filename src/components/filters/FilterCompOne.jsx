import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { dict_filter_a } from "../../project-data/dictionary/filters_dictionary";

function FilterCompOne() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="">
      <div className="d-lg-flex py-3 my-3 border-bottom">
        <div className="flex-grow-1">
          <span className="fs-4  " style={{ fontWeight: "500" }}>
            {dict_filter_a[language].members_list}
          </span>
          {dict_filter_a[language].memberslistword}
        </div>
        <div className="d-lg-flex">
          <select
            className="form-select"
            name="parent"
            id="parent"
            style={{ minWidth: "200px" }}
          >
            <option value={null}>
              {dict_filter_a[language].ordebyapprovalstatus}
            </option>
            {dict_filter_a[language].status_list.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <select
            className="form-select mx-0 mx-lg-2 my-2 my-lg-0"
            name="parent"
            id="parent"
            style={{ minWidth: "220px" }}
          >
            <option value={null}>
              {dict_filter_a[language].orderbyapplicationdate}
            </option>
          </select>

          <select className="form-select" name="parent" id="parent">
            <option value={50}>50 {dict_filter_a[language].per_page}</option>
            {[100, 200].map((num) => (
              <option key={num} value={num}>
                {num} {dict_filter_a[language].per_page}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="d-lg-flex mb-3">
        <div className="flex-grow-1">
          <button className="btn btn-dark px-4 rounded-3 my-2 my-lg-0">
            {dict_filter_a[language].register}
          </button>
        </div>
        <div className="d-lg-flex align-items-center text-nowrap ">
          <div className="text-secondary text-nowrap me-2 mb-2 mb-lg-0">
            {dict_filter_a[language].items_selected}
          </div>
          <div className="d-flex">
            <select
              className="form-select me-2"
              name="parent"
              id="parent"
              style={{ minWidth: "200px" }}
            >
              <option value={null}>
                {dict_filter_a[language].change_approval}
              </option>
              {dict_filter_a[language].status_list_action.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <button className="btn btn-dark px-4 rounded-3">
              {dict_filter_a[language].save}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterCompOne;
