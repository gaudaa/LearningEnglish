import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {Home} from './page/home/home.jsx'
import { Navigationcontainer } from "./page/navigationcontainer.jsx";
import { Login } from './page/Login'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigationcontainer/>}>
          <Route path="" element={<Navigate to="home"/>}></Route>
          <Route path="home" element={<Home/>}></Route>
          <Route path="login" element={<Login/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
