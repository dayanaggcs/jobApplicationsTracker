import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { Applications } from "./components/Applications";
import { ApplicationsPage } from "./components/pages/Applications";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ApplicationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
