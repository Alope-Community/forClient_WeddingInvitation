import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from "react-router-dom";
import Layouts from "./Layouts/Layouts";

function App() {
  return (
    <Router>
      <Layouts />
    </Router>
  );
}

export default App;
