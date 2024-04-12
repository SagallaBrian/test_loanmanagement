import { Outlet, useNavigate } from "react-router-dom";
import "./MainLayout.css";
import SideBar from "../../components/sidebar/SideBar";
import { useContext, useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import { AuthContext } from "../../context/AuthContext";

function MainLayout() {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 840);
  const [isLess, setIsLess] = useState(window.innerWidth <= 840);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleResize = () => {
    setIsOpen(window.innerWidth >= 840);
    setIsLess(window.innerWidth <= 840);
  };

  useEffect(() => {
    if (!user.username) {
      navigate("/auth/login");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsOpen(false);
  };
  return (
    <div className="main-layout">
      <NavBar isOpen={isOpen} toggleNav={toggleNav} />
      <div className="cont">
        <SideBar isOpen={isOpen} isLess={isLess} closeNav={closeNav} />
        <div className={`p-3 main-content ${isOpen ? "shrink" : ""}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
