import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import SarBuilder from "./pages/SarBuilder";
import Signup from "./pages/Signup";
import Alert from "./pages/Alert";
import { Route, Routes } from "react-router-dom";
import Investpanel from "./pages/Investpanel";
function App()
{
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Sarbuilder" element={<SarBuilder />} />
      <Route path="/login" element={<Login />} />
      <Route path="/alert" element={<Alert />} />
      <Route path="/investpanel" element={<Investpanel />} />    
      </Routes>
  );
}

export default App;