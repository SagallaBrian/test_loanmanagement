import { Outlet } from "react-router-dom";
import "../fonts.css";

function RootLayout() {
  return (
    <div style={{ fontFamily: "Pretendard", fontWeight: "400" }}>
      <Outlet />
    </div>
  );
}

export default RootLayout;
