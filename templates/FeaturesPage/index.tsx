"use client";

import Layout from "@/components/Layout";
{% comment %} import Services from "@/components/Services"; {% endcomment %}
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
            {% comment %} <Services containerClassName="md:pb-10" /> {% endcomment %}
            <Join />
        </Layout>
    );
};

export default FeaturesPage; {% endcomment %}
