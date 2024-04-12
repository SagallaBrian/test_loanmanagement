import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { dict_member_detail_tabs } from "../../project-data/dictionary/members_dictionary";
import { LanguageContext } from "../../context/LanguageContext";

function MemberDetailsTabs() {
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    document.title = "회원상세";
  }, []);

  return (
    <div className="table-responsive pb-3">
      <div className="btn-group d-flex text-nowrap" role="group">
        {Object.entries(dict_member_detail_tabs[language]).map(
          ([key, value]) => (
            <NavLink
              key={key}
              to={key}
              className={({ isActive }) =>
                `btn ${isActive ? "btn-dark" : "btn-light"} w-100`
              }
            >
              {value}
            </NavLink>
          )
        )}
      </div>
    </div>
  );
}

export default MemberDetailsTabs;
