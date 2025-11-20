import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Log from './Log';
import Signup from './Signup';
import Upgrade from './Upgrade';
import Web from './Web';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="bg-blue-500 text-white p-4 flex gap-4">
          <Link to="/log">Log</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/upgrade">Upgrade</Link>
          <Link to="/web">Web</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/log" element={<Log />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/web" element={<Web />} />
          {/* Default route */}
          <Route path="*" element={<Log />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
