import React from "react";
import Home from "./components/Home/Home";
import IntroSection from "./components/IntroSection/IntroSection";
import WhyUs from "./components/WhyUs/WhyUs";
import PracticeArea from "./components/PracticeArea/PracticeArea";
import Clients from "./components/Clients/Clients";
import Team from "./components/Team/Team";
import FaqSection from "./components/FaqSection/FaqSection";
import Subscription from "./components/SubscriptionSection/Subscription";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Home />
      <IntroSection />
      <WhyUs />
      <PracticeArea />
      <Clients />
      <Team />
      <FaqSection />
      <Subscription />
      <Footer />
    </>
  );
}

export default App;