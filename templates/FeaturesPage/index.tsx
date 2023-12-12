"use client";

import Layout from "@/components/Layout";
import Services from "@/components/Services";
import Join from "@/components/Join";
import Hero from "./Hero";
{% comment %} import Benefits from "./Benefits/Index"; {% endcomment %}
import Features from "./Features";
import Community from "./Community";

const FeaturesPage = () => {
    return (
        <Layout>
            <Hero />
            {% comment %} <Benefits /> {% endcomment %}
            {/* <Features /> */}
            <Community />
            <Services containerClassName="md:pb-10" />
            <Join />
        </Layout>
    );
};

export default FeaturesPage; {% endcomment %}
