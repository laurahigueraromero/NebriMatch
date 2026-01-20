import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login'
import Users from '../pages/Users'
import Para_ti from '../pages/Para_ti'
import Ayuda from '../pages/Ayuda'
import NotFound from "../pages/NotFound";
import Comunidades from "../componentes/Comunidades";


function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Usuario/:user" element={<Users/>}/>
      <Route path="/Para_ti/:user" element={<Para_ti/>}/>
      <Route path="/Comunidades/:user" element={<Comunidades/>}/>
       <Route path="/NotFound/:user" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;