import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Authn from "./pages/Authn";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}></Route>
          <Route path="/card-scan/LOGIN" element={<Authn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
