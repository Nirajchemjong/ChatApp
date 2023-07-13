import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/registration/Register";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Login />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/dashboard'
          element={<Dashboard />}
        ></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
