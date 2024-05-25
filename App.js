import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signupusr from "./Signupusr";
import Loginuser from "./Loginuser";
import Homemain from "./pages/Homemain";
import Expensetable from "./pages/Expensetable";
import Expensedelete from "./pages/Expensedelete";
import Expenseupdate from "./pages/Expenseupdate";
import Expenseview from "./pages/Expenseview";
import { UserDataProvider } from "./contexts/UserContext";

function App() {
  return (
    <>
      <UserDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/signup" element={<Signupusr />}></Route>
            <Route path="/login" element={<Loginuser />}></Route>
            <Route path="/homemain" element={<Homemain />}></Route>
            <Route path="/tableexp" element={<Expensetable />}></Route>
            <Route path="/edititem/:user" element={<Expenseupdate />}></Route>
            <Route path="/deleteitem/:user" element={<Expensedelete />}></Route>
            <Route path="/viewitem/:user" element={<Expenseview />}></Route>
            <Route path="/tableexp" element={<Expensetable />}></Route>
          </Routes>
        </BrowserRouter>
      </UserDataProvider>
    </>
  );
}

export default App;
