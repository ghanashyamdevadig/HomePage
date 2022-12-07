import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import MyCart from "./Pages/MyCart/Mycart"
import SavedAddress from "./Pages/SavedAddress/SavedAddress";

import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="cart" element={< MyCart />} />
          <Route exact path="SavedAddress" element={< SavedAddress />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
