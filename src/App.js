import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {Home} from './page/home/home.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="" element={<Navigate to="home"/>}></Route>
          <Route path="home" element={<Home/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
