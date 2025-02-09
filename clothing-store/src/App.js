import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";

// Components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedCollections from "./components/FeaturedCollections";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import ProductCarousel from "./components/ProductCarousel";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <Router>
      <Header />
      <HeroSection />
      <FeaturedCollections />
      <AboutUs />
      <ProductCarousel />
      <Testimonials />
      <Newsletter />
      <Footer />
    </Router>
  );
}

export default App;
