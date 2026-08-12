import { Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import PricingPage from "@/pages/PricingPage";
import DashboardPage from "@/pages/DashboardPage";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />} />
      </Routes>
    <fouter/>
  );
}
