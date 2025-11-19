import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Log from "./Log";
import Signup from "./Signup";
import Upgrade from "./Upgrade";
import Web from "./Web";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upgrade" element={<Upgrade />} />
        <Route path="/web" element={<Web />} />
      </Routes>
    </Router>
  );
}

export default App;
