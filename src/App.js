import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Admin from './components/Admin';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
function App() {

  const Users = {
    registered: "register",
    public: "public",
    admin: "admin"
  }

  const currentUser = Users.public;


  return (
    <div>
      <Navbar currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<User  currentUser={currentUser} />}></Route>
        <Route path="/admin" element={<Admin currentUser={currentUser} />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="*" element={<div>Page Not Found</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
