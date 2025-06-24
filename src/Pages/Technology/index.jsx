import React from "react";
import PageHeading from "../../Components/PageHeading";
import AboutUs from "../../Components/Aboutus";
import Vission from "../../Components/Vission/Vission";
import ValueSection from "../../Components/ValueSection";
import FeatureSection from "../../Components/FeatureSection";
import TeamMember from "../../Components/Team";
import BrandSection from "../../Components/BrandSection";
import WorkSection1 from "../../Components/WorksSection/WorkSection1";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";
import CTASection from "../../Components/CTASection";
import AnimatedTimeline from "../../Components/Aboutus/AnimatedTimeline";
import CoreValuesSection from "../../Components/Aboutus/CoreValuesSection";


import { useEffect } from "react";
import Aos from "aos";
import OurProcess from "../../Components/OurProcess";
import OurTechApart from "../../Components/OurTechApart";
import IndustrialApplicationComponent from "../../Components/IndustrialApplication";
import TechSpecsSnapshot from "../../Components/TechSpecsSnapshot";
import TechnologyHeroSection from "../../Components/TechnologyHeroSection";

const BreadcrumbsData = {
  backgroundImage: "/assets/img/technology-banner.jpg",
  title: "Innovation at the Core. Clean Energy as the Outcome.",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "Technology", active: true },
  ],
};


const technologyHeroSectionData = {
  introduction:
    `<span class='focused_first_para_letter_lightbg'>A</span>t Nataraj Hydrocarbons, our technology is engineer
for efficiency, sustainability, and scale. Using a
proprietary pyrolysis process, we convert non-
recyclable plastic waste into sulfur-free RDF Oil — a
clean, high calorific industrial fuel that rivals and
outperforms traditional fossil fuels.`,
  introduction1:
    `<span class='focused_first_para_letter_lightbg'>B</span>ut we didn’t stop at the convention. We’ve solved key
technical bottlenecks — like reactor descaling and fuel
refinement — to deliver better energy output, longer
equipment life, and consistent fuel quality.`,
  introduction2:
    `<span class='focused_first_para_letter_lightbg'>T</span>his is more than a recycling innovation. It’s a fuel
revolution.`,

  video: {
    videoUrl: "/assets/videos/nhc_feature_video.mp4",
    backgroundImage: "/assets/img/technology_image1.jpg",
  },
  cta: {
    backgroundImage: "/assets/img/technology_image1.jpg",
  },
};

const ourProcessData = [
  {
    step: 1,
    title: 'Waste Plastic Collection',
    desc: 'We source post-consumer and industrial plastic waste that’s non-recyclable and destined for landfills or incineration.'
  },
  {
    step: 2,
    title: 'Pyrolysis Conversion',
    desc: 'Inside our in-house designed reactors, the plastic is heated without oxygen. This breaks it down into hydrocarbon vapours without releasing harmful emissions.'
  },
  {
    step: 3,
    title: 'Fuel Recovery & Refinement',
    desc: 'The vapours are condensed and refined into RDF Oil — a sulfur-free, high-calorie alternative to furnace oil, LDO, and LSHS.'
  },
  {
    step: 4,
    title: 'Fuel Delivery',
    desc: 'We deliver ready-to-use fuel to industrial partners across India, backed by 100% repeat orders and rigorous QC standards.'
  }
];

const ourTechApartData = [
  {
    id: 1,
    icon: '/assets/img/reactor_design_img.png',
    title: 'In-House Reactor Design',
    desc: 'Engineered to reduce downtime, improve fuel purity, and eliminate scaling'
  },
  {
    id: 2,
    icon: '/assets/img/sulphur_refinement_img.png',
    title: 'Zero-Sulphur Refinement',
    desc: 'Clean fuel means cleaner emissions, no smoke, and easier compliance'
  },
  {
    id: 3,
    icon: '/assets/img/kcal_img.png',
    title: 'Consistent High Calorific Value',
    desc: 'Up to 10% more efficient than many conventional alternatives. '
  },
  {
    id: 4,
    icon: '/assets/img/high_calorific_img.png',
    title: 'Consistent High Calorific Value',
    desc: 'Engineered to reduce downtime, improve fuel purity, and eliminate scaling'
  }
]


const techSpecTableData = [
  {
    feature: "Fuel Type",
    value: "RDF Oil (Pyrolysis Derived)",
  },
  {
    feature: "Sulphur Content",
    value: '0%'
  },
  {
    feature: "Calorific Value",
    value: '11000 kcal/kg'
  },
  {
    feature: "Compatibility",
    value: 'Furnace oil/LDO applications'
  },
  {
    feature: "Environmental Impact",
    value: '0 smoke, reduced GHGs'
  }
];

const industrialApplicationData = {
  title: "Our RDF Oil is used by",
  list: ["Textile & Garment Units","Steel & Metal Processing Plants","Food Manufacturing Industries","Chemical Plants","Any industrial furnace relying on LDO or furnace oil"],
  image: '/assets/img/industrial_application_img.jpg'
};


export default function TechnologyPage() {

  useEffect(() => {
    Aos.init({
      disable: 'mobile',
      duration: 1200,
      delay: 0.2,
      once: true
    });
    return () => Aos.refreshHard(); // Cleanup function
  }, []);

  pageTitle("Technology | NHC");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <TechnologyHeroSection data={technologyHeroSectionData} />
      <section>
        <div className="container">
          <div className="cs_slider cs_style_1 cs_slider_gap_24">
            <div className="cs_section_heading cs_style_2 cs_color_1">
              <h2
                className="cs_section_title cs_fs_80 mb-0"
                data-aos="fade-down"
                dangerouslySetInnerHTML={{ __html: "Our Process" }}
              />
            </div>
            {/* <p className="cs_section_title cs_fs_32 mb-0 stepNumberText" data-aos="fade-down">In 4 Steps</p> */}
          </div>
        </div>
      </section>
      <OurProcess data={ourProcessData} />
      <section>
        <div className="container">
          <div className="cs_slider cs_style_1 cs_slider_gap_24">
            <div className="cs_section_heading cs_style_2 cs_color_1">
              <h2
                className="cs_section_title cs_fs_80 mb-0"
                data-aos="fade-down"
                dangerouslySetInnerHTML={{ __html: `What Sets <br />Our<span> Tech Apart</span>?` }}
              />
            </div>
          </div>
        </div>
      </section>
      <OurTechApart data={ourTechApartData} />
      <section>
        <div className="container">
          <div className="cs_slider cs_style_1 cs_slider_gap_24">
            <div className="cs_section_heading cs_style_2 cs_color_1">
              <h2
                className="cs_section_title cs_fs_80 mb-0"
                data-aos="fade-down"
                dangerouslySetInnerHTML={{ __html: "Tech Specs Snapshot" }}
              />
            </div>
            <p className=" " style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', marginTop: '1rem' }} data-aos="fade-down">For Industrial Clients</p>
          </div>
          <div className="cs_height_60 cs_height_lg_40" />          
        </div>
      </section>
      <TechSpecsSnapshot data={techSpecTableData} />
      <section>
        <div className="container">          
           <div className="cs_height_125 cs_height_lg_80" />
          <div className="cs_slider cs_style_1 cs_slider_gap_24">
            <div className="cs_section_heading cs_style_2 cs_color_1">
              <h2
                className="cs_section_title cs_fs_80 mb-0"
                data-aos="fade-down"
                dangerouslySetInnerHTML={{ __html: `Industrial  <br /><span>Application</span>` }}
              />
            </div>
          </div>
        </div>
      </section>
      <IndustrialApplicationComponent data={industrialApplicationData} />
    </>
  );
}
