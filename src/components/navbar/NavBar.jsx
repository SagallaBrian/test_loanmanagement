import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./navbar.css";
import { Button, Dropdown, Space } from "antd";
import logo from "../../assets/project_images/logo.webp";
import avatar from "../../assets/project_images/avatar.5e179e90.png";
import settings from "../../assets/icons/setting.webp";
import external from "../../assets/icons/external-link.webp";
import bell from "../../assets/icons/bell.webp";
import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { dict_navbar } from "../../project-data/dictionary/navbar_dictionary";
import { redirect, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function NavBar({ isOpen, toggleNav }) {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { setGlobaluser } = useContext(AuthContext);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const toggleTopNav = () => {
    setIsCollapsed((prev) => !prev);
  };

  const logoutUser = () => {
    setGlobaluser({});
    navigate("/auth/login");
  };

  const items = [
    {
      key: "1",
      label: <a>{dict_navbar[language].profile}</a>,
    },
    {
      key: "2",
      label: <a onClick={logoutUser}> {dict_navbar[language].logout}</a>,
    },
  ];

  return (
    <nav
      className={`py-3 navbar sticky-top navbar-expand-lg border-bottom bg-white ${
        isCollapsed ? "collapsed" : ""
      }`}
    >
      <div className="container-fluid">
        <div
          className="navbar-brand d-flex align-items-end "
          style={{ minWidth: "230px" }}
        >
          {!isOpen && (
            <FaChevronRight
              className="text-secondary fs-5"
              onClick={toggleNav}
            />
          )}
          <img src={logo} alt="Logo Img" className="logo" />
          {isOpen && (
            <FaChevronLeft
              className="text-secondary fs-5"
              onClick={toggleNav}
            />
          )}
        </div>

        <button className="navbar-toggler" type="button" onClick={toggleTopNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="d-flex align-items-center">
                <img src={avatar} alt="" className="avatar" />
                <div className="small ">
                  {dict_navbar[language].texta}
                  <br />
                  {dict_navbar[language].textb}
                </div>
              </div>
            </li>
          </ul>
          <div className="d-lg-flex">
            <div>
              <select
                className="form-select"
                value={language}
                onChange={(e) => toggleLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="ko">한국어</option>
              </select>
            </div>
            <div className="icon-container my-2 my-lg-0">
              <img src={bell} alt="" className="icon" />
            </div>
            <div>
              <input
                type="text"
                name=""
                className="form-control form-control-dsm"
                placeholder={dict_navbar[language].searchplaceholder}
                style={{ minWidth: "270px" }}
              />
            </div>
            <div className="icon-container my-2 my-lg-0">
              <img src={external} alt="" className="icon" />
            </div>

            {/* <img src={settings} alt="" className="icon" /> */}
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomLeft"
            >
              <div className="icon-container">
                <img src={settings} alt="" className="icon" />
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
