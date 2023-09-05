import { ApiContext } from './context/ApiContext';
import { UserContext } from './context/UserContext';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './views/Home';
import LogIn from './views/LogIn';
import SignUp from './views/SignUp';
import GetPassword from './views/GetPassword';
import Profile from './views/Profile';

function App() {
  return (
    <ApiContext>
      <UserContext>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logIn" element={<LogIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/getPassword" element={<GetPassword />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </Router>
      </UserContext>
    </ApiContext>
  );
}

export default App;
