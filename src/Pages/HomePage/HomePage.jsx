import React from "react";
import HeroSection from "../../Components/Hero";
import ValueSection from "../../Components/ValueSection";
import FeatureSection from "../../Components/FeatureSection";
import WorkingProcess from "../../Components/WorkingProcess";
import ServicesSection from "../../Components/ServicesSection";
import TestimonialSection from "../../Components/TestimonialSection";
import WorksSection from "../../Components/WorksSection";
import CTASection from "../../Components/CTASection";
import { pageTitle } from "../../helper";

const heroData = {
  title: "FROM TRASH <br/> <b>TO SUPER FUEL</b>",
  subtitle:
    "Transforming plastic waste into high-calorific, sulphur-free fuel — saving costs, cutting emissions, and closing the loop.",
  btnText1: "Get Super Fuel",
  btnUrl1: "/contact",
  btnText2: "Download Brochure",
  btnUrl2: "/brochure",

  funfact: {
    number: "500+",
    text: "Satisfied Clients",
  },
  box: {
    title: "Hachioji Garden",
    subtitle:
      "We design Hachioji Garden as a part of our new Landscape Design Commission in the country.",
    link: "/projects/hachioji-garden",
  },
  backgrounds: [
    "/assets/img/hero_bg.jpg",
    "/assets/img/hero_bg_4.jpg",
    "/assets/img/hero_bg_2.jpg",
    "/assets/img/hero_bg_4.jpg",
  ],
};

const valueData = {
  sectionTitle: "VALUES",
  values: [{ text: "Landscape Design" }, { text: "Indoor Garden" }],
};

const featureData = {
  sectionTitle: "Processing <span>Plastic</span> Fuelling Industries",
  buttonText: "Get Started",
  buttonUrl: "/services",
  image: "/assets/img/feature_thumb.jpg",
  features: [
    {
      icon: "fa6-regular:heart",
      title: "High Calorie Fuel",
      description:
        "More energy per litre than traditional furnace oil or LDO.",
    },
    {
      icon: "fa6-solid:link",
      title: "Near-Zero Sulphur Emissions",
      description:
        "No smoke. No pollution. Just high performance.",
    },
    {
      icon: "fa6-solid:layer-group",
      title: "Circular Economy in Action",
      description:
        "Diverting non-recyclable plastic from landfills to fuel tanks. Cleaning environment and enriching factories.",
    },
    {
      icon: "fa6-brands:ubuntu",
      title: "Over 10% Cost Savings",
      description:
        "Efficient combustion = lower fuel bills and cleaner operations.",
    },
  ],
};

const workingProcessData = {
  sectionTitle: "From <span>Trash to Tank</span> - How It Works",

  subtitle: "HOW IT WORKS",
  logo: "/assets/img/logo.svg",
  steps: [
    {
      title: "01 | Collect Waste Plastic",
      description:
        "Sourced from post-consumer and industrial plastic waste that’s otherwise non-recyclable.",
    },
    {
      title: "02 | Convert with Proprietary Tech",
      description:
        "Using our in-house pyrolysis reactors, we convert waste into RDF Oil, ready for industrial use.",
    },
    {
      title: "03 | Checks for Assured Quality",
      description:
        "Stringent quality checks of fuel to ensure delivery of high-quality, high-calorie, low sulphuric fuel.",
    },
    {
      title: "04 | Deliver Fuel to Industry",
      description:
        "Sulphur-free, high-energy clean fuel delivered directly to your industrial operations for cheaper, cleaner, low-pollution factory floor.",
    },
  ],
};

const servicesData = {
  title: "SERVICES",
  btnText: " See More Services",
  btnUrl: "/services",
  service: [
    {
      title: "1,800+ tons",
      subtitle:
        "of plastic waste processed",
      image: "/assets/img/service_thumb_1.jpg",
      link: "services/home-garden",
      tags: [
        // { label: "Home", url: "/" },
        // { label: "Garden", url: "/" },
        // { label: "Landscape Design", url: "/" },
        // { label: "Expert", url: "/" },
      ],
    },
    {
      title: "150,000+ litres/month",
      subtitle:
        "of clean fuel produced",
      image: "/assets/img/service_thumb_2.jpg",
      link: "services/plant-selection",
      tags: [
        // { label: "Home", url: "/" },
        // { label: "Garden", url: "/" },
        // { label: "Landscape Design", url: "/" },
        // { label: "Expert", url: "/" },
      ],
    },
    {
      title: "100% repeat orders",
      subtitle:
        "from industrial clients",
      image: "/assets/img/service_thumb_3.jpg",
      link: "services/hard-scaping",
      tags: [
        // { label: "Home", url: "/" },
        // { label: "Garden", url: "/" },
        // { label: "Landscape Design", url: "/" },
        // { label: "Expert", url: "/" },
      ],
    },
    {
      title: "Zero sulphur",
      subtitle:
        "in every litre we ship",
      image: "/assets/img/service_thumb_4.jpg",
      link: "services/public-garden",
      tags: [
        // { label: "Home", url: "/" },
        // { label: "Garden", url: "/" },
        // { label: "Landscape Design", url: "/" },
        // { label: "Expert", url: "/" },
      ],
    },
  ],
};

const testimonialData = {
  sectionTitle: "TESTIMONIAL",
  testimonials: [
    {
      text: `LeafLife's dedication to bringing our <span>vision</span> to life was exceptional. They turned our <span>backyard</span> into a haven of tranquility. Their attention to detail and sustainable practices on their design <span>impressed</span> us.`,
      name: "STEVE EVANS",
      designation: "CEO of Malley Company",
    },
    {
      text: `We were blown away by the transformation LeafLife delivered. The entire process was smooth and the results were beyond our expectations.`,
      name: "RACHEL SMITH",
      designation: "Founder of GreenNest",
    },
    {
      text: `Working with LeafLife was a breeze. Their eco-friendly approach and stunning designs brought our space to life.`,
      name: "MARK LEE",
      designation: "Architect at EcoSpace",
    },
  ],
};

const worksData = {
  title: "GET TO <span>KNOW</span> OUR <br /> LATEST GARDEN <span>WORKS</span>",
  subtitle: "WORKS",
  slides: [
    {
      image: "/assets/img/project_thumb_9.jpg",
      name: "SERENE RETREAT",
      location: "SUNNYVALE, CA",
      description:
        "A tranquil garden oasis perfect for your relaxation time with family or alone within your comfortable home.",
    },
    {
      image: "/assets/img/project_thumb_10.jpg",
      name: "ZEN HAVEN",
      location: "PALO ALTO, CA",
      description:
        "This modern garden blends minimalist design with nature for a peaceful retreat.",
    },
    {
      image: "/assets/img/project_thumb_11.jpg",
      name: "URBAN EDEN",
      location: "SAN FRANCISCO, CA",
      description:
        "An urban backyard transformed into a vibrant, green escape with blooming flowers and winding paths.",
    },
  ],
};

const ctaData = {
  backgroundImage: "/assets/img/cta_bg.jpg",
  title: "POWER YOUR INDUSTRY <br />LOWER EMISSIONS & COSTS.",
  buttonText: "Contact Us",
  buttonUrl: "/contact",
};

export default function HomePage() {
  pageTitle("Nature");
  return (
    <>
      <HeroSection data={heroData} />
      <ValueSection data={valueData} />
      <FeatureSection data={featureData} />
      <WorkingProcess data={workingProcessData} />
      <ServicesSection data={servicesData} />
      <TestimonialSection data={testimonialData} />
      {/* <WorksSection data={worksData} /> */}
      <CTASection data={ctaData} />
    </>
  );
}
