import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ContextualSidebar from './components/layout/ContextualSidebar';
import CustomCursor from './components/ui/CustomCursor';

import Home from './pages/Home';
import Platform from './pages/Platform';

import Students from './pages/stakeholders/Students';
import Teachers from './pages/stakeholders/Teachers';
import Parents from './pages/stakeholders/Parents';
import SchoolManagement from './pages/stakeholders/SchoolManagement';
import PolicyMakers from './pages/stakeholders/PolicyMakers';

import GyanBank from './pages/products/GyanBank';
import GyanScan from './pages/products/GyanScan';
import GyanAnalytx from './pages/products/GyanAnalytx';
import GyanGuru from './pages/products/GyanGuru';
import GyanTest from './pages/products/GyanTest';

import Testimonials from './pages/Testimonials';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <ContextualSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />

        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/school-management" element={<SchoolManagement />} />
        <Route path="/policy-makers" element={<PolicyMakers />} />

        <Route path="/products/gyanbank" element={<GyanBank />} />
        <Route path="/products/gyanscan" element={<GyanScan />} />
        <Route path="/products/gyananalytx" element={<GyanAnalytx />} />
        <Route path="/products/gyanguru" element={<GyanGuru />} />
        <Route path="/products/gyantest" element={<GyanTest />} />

        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </ThemeProvider>
  );
}
