import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Button from "./components/Button";
import Cards from "./components/Cards";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <About />
      <Cards />
      <Button />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
