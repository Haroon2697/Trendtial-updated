import Hero from "../../components/Hero";
import Features from "../../components/Features";
import DataVisuals from "../../components/DataVisuals";
import Pricing from "../../components/Pricing";
import FAQ from "../../components/FAQ";
import PartnerForm from "../../components/PartnerForm";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <DataVisuals />
      <Pricing />
      <FAQ />
      <PartnerForm />
    </main>
  );
};

export default HomePage;
