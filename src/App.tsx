import "@/assets/CSS/App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import ClosedRegistrations from "./pages/ClosedRegistrations";

function App() {

  /**
   * turn this to true when registrations are done
   */
  const isClosedRegistratins = true;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={ isClosedRegistratins ? <ClosedRegistrations /> : <Register />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
