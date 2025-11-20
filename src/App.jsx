import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import WhatWeDo from "./components/WhatWeDo";
import WhyWeDo from "./components/WhyWeDo";
import Guarantees from "./components/Guarantees";
import ValuePerActor from "./components/ValuePerActor";
import PricingCTA from "./components/PricingCTA";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";

function App() {
  return (
    <div className="min-h-screen" style={{ background: "#0B1630" }}>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <WhyWeDo />
      <Guarantees />
      <ValuePerActor />
      <PricingCTA />
      <FAQ />
      <FinalCTA />
    </div>
  );
}

export default App;
