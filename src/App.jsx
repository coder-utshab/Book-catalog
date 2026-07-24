import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;