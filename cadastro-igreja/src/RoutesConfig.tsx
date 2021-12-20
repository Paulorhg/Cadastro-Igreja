import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Login} from './pages/Login'
import {Home} from './pages/Home'
import {Cadastro} from './pages/Cadastro'
import {Carteira} from './pages/Carteira'
import {Esqueceu} from './pages/Esqueceu'

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const _cookies = localStorage.getItem("session@sopesca");
//   console.log("_user", _cookies);
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         !_cookies ? <Redirect to="/admin/login" /> : <Component {...props} />
//       }
//     />
//   );
// };

function RoutesConfig () {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/cadastro-carteira" element={<Carteira />} />
      <Route path="/esqueceu-sua-senha" element={<Esqueceu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
