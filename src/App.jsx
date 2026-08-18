
import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
;

import RootLayout from "./layout/rootLayout";
import NotFound from "./components/NotFound/NotFound";
import HomePage from "./Pages/HomePage";
import MoneyBag from "./Pages/moneyBag";
import SignIn from "./Pages/AuthenticationPages/SignIn/signIn";
import SignUp from "./Pages/AuthenticationPages/SignUp";
import { DashboardLayout } from "./layout/DashboardLayout";
import Dashboard from "./Pages/Dashboard";
import { MyWallet } from "./Pages/myWallet";
import Transactions from "./Pages/Transactions";
import Settings from "./Pages/Settings";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="about" element={<About />} /> */}
          <Route path="moneybag" element={<MoneyBag />} />
        </Route>
        <Route path="signUp" element={<SignUp />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />

        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="my-wallet" element={<MyWallet />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
