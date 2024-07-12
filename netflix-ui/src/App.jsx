import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="netflix-sans-font-loaded">
      <Outlet />
    </div>
  );
}

export default App;
