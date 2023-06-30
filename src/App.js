import { ApiContext } from './context/ApiContext';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './views/Home';

function App() {
  return (
    <ApiContext>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
    </ApiContext>
  );
}

export default App;
