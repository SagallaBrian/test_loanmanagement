import "./App.css";
import { RouterProvider } from "react-router-dom";
import myroutes from "./myroutes.jsx";

function App() {
  return (
    <>
      <RouterProvider router={myroutes} />
    </>
  );
}

export default App;
