import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login'
import Users from '../pages/Users'
import Para_ti from '../pages/Para_ti'
import Ayuda from '../pages/Ayuda'


function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Usuario/:user" element={<Users/>}/>
      <Route path="/Para_ti/:user" element={<Para_ti/>}/>
       <Route path="/Ayuda/:user" element={<Ayuda/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;