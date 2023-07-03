import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/registration/Register";

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
      </Routes>
    </div>
  );
}

export default App;
