"use client";

import Layout from "@/components/Layout";
import Hero from "./Hero";
import Benefits from "./Benefits";
import Features from "./Features";
import Collaboration from "./Collaboration";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Roadmap from "./Roadmap";
import Services from "@/components/Services";
import Join from "@/components/Join";
import Faq from "../PricingPage/Faq";
import CalendlyWidget from "./Widget/CalendlyWidget";
import Contact from "../../components/Contact";
const HomePage = () => {
    return (
        <Layout>
            <Hero />
            <Benefits />
            <Features />
            {/* <Collaboration /> */}
      {/*  <HowItWorks /> Sign up */}     
            {/* <Services /> */}
            <Pricing />
            <Testimonials />
            {/* <Roadmap /> */}
            <Faq />
        
        
            <Join />
        <Contact />
        </Layout>
    );
};

export default HomePage;
