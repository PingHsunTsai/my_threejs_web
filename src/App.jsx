import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, UnderConstruction } from './pages'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/underconstruction" element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
}

export default App;
