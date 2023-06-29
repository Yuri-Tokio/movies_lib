import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import "./Styles/App.css"
import "./Styles/index.css"


function App() {

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App
