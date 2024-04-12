import "./SideBar.css";
import project_routes from "../../project-data/project_routes.jsx";
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

function SideBar({ isOpen, isLess, closeNav }) {
  const { language } = useContext(LanguageContext);
  const { pathname } = useLocation();

  const setTitle = (itmname) => {
    document.title = itmname;
    if (isLess) {
      closeNav();
    }
  };
  return (
    <div
      className={`sidebar p-3 text-body-tertiary ${isOpen ? "open" : "close"}`}
    >
      {project_routes[language].map((itm) => (
        <NavLink
          key={itm.link}
          to={itm.link}
          className={`nav-link my-1 d-block p-1 ${
            pathname === itm.link ? "fw-bold shadow rounded px-2" : ""
          }`}
          onClick={() => setTitle(itm.name)}
        >
          <div
            className="d-flex my-2 align-items-center"
            style={{ color: pathname === itm.link ? "#333333" : "" }}
          >
            <div
              className={`px-2 py-1 rounded-2 me-2 ${
                pathname === itm.link ? "bg-dark text-white" : "shadow-sm"
              } `}
            >
              {itm.icon}
            </div>
            {itm.name}
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default SideBar;
