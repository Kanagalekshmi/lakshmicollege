import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Staff from "../Pages/Staff";
import Apply from "../Pages/Apply";
import Signup from "../Pages/Signup";
import AdminLogin from "../Pages/adminlogin";
import Admin from "../Pages/admin";
import Privacy from "../Pages/Privacy";
import Terms from "../Pages/Terms";
import Faq from "../Pages/Faq";
import CourseDetails from "../Pages/CourseDetails";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms-and-conditions" element={<Terms />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/courses/:courseId" element={<CourseDetails />} />
    </Routes>
  );
}

export default AppRoute;
