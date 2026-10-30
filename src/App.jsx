import { useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PropertySearch from "./components/PropertySearch/PropertySearch";
import Statistics from "./components/Statistics/Statistics";
import FeaturedProperties from "./components/FeaturedProperties/FeaturedProperties";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Affiliations from "./components/Affiliations/Affiliations";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import WhyChooseMarci from "./components/WhyChooseMarci/WhyChooseMarci";

function App() {
  const [searchFilters, setSearchFilters] = useState(null);

  return (
    <>
      <Header />

      <main>
        <Hero />
        {/* 
        <PropertySearch onSearch={setSearchFilters} />

        {searchFilters && (
          <p className="container small text-secondary mt-3" role="status">
            Selected: {searchFilters.location} · {searchFilters.propertyType} ·{" "}
            {searchFilters.priceRange}
          </p>
        )} */}

        <Statistics />
        <FeaturedProperties />
        <Affiliations />
        <About />
        <WhyChooseMarci />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
