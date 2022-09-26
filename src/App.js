import { Routes, Route } from "react-router-dom";

import HeaderComp from "./components/header";
import SidebarComp from "./components/sidebar";
import Dashboard from "./pages/Dashboard";

import Branch from "./pages/management/Branch";
import RegionalOffice from "./pages/management/RegionalOffice";
import Machine from "./pages/management/Machine";
import UAC from "./pages/management/UAC";
import UserAllocation from "./pages/management/UserAllocation";
import User from "./pages/management/User";
import BankProduct from "./pages/management/BankProduct";
import CardVariant from "./pages/management/CardVariant";
import ProductVariant from "./pages/management/ProductVariant";

import Transaction from "./pages/reporting/Transaction";

import { Layout } from "antd";
const { Footer } = Layout;

export default function App() {
  return (
    <Layout className="vh-100">
      <HeaderComp />
      <Layout>
        <SidebarComp />
        <Layout className="px-3">
          <Routes>
            {/* Dashboard */}
            <Route path="/" element={<Dashboard />} />
            {/* Management */}
            <Route path="/management-branch" element={<Branch />} />
            <Route path="/management-regional-office" element={<RegionalOffice />} />
            <Route path="/management-machine" element={<Machine />} />
            <Route path="/management-uac" element={<UAC />} />
            <Route path="/management-user-allocation" element={<UserAllocation />} />
            <Route path="/management-user" element={<User />} />
            <Route path="/management-bank-product" element={<BankProduct />} />
            <Route path="/management-card-variant" element={<CardVariant />} />
            <Route path="/management-product-variant" element={<ProductVariant />} />
            {/* Reporting */}
            <Route path="/reporting-transaction" element={<Transaction />} />
            {/* Login */}
            {/* <Route path="/Login" element={<Login />} /> */}
          </Routes>
          <Footer className="text-center p-2" style={{ fontSize: "10px" }}>
            v1.0.0  |  Powered by CPM Systems
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
