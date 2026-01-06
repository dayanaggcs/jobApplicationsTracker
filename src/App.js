import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Applications } from "./components/Applications";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Applications />} />
      </Routes>
    </Router>
  );
}

export default App;
