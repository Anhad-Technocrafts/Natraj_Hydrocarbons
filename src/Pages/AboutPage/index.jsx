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

const BreadcrumbsData = {
  backgroundImage: "/assets/img/about_heading_bg.jpg",
  title: "ABOUT US",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "About", active: true },
  ],
};

const aboutUsData = {
  title: `WHO<br><span>ARE WE?</span>`,

  introduction:
    "<span class='focused_first_para_letter_lightbg'>F</span>ounded in 2022, Nataraj Hydrocarbons was born from a shared mission: to convert plastic waste into a cleaner, high-performance industrial fuel — and do it at scale. Since then, we've grown into one of India's fastest-rising clean-tech fuel companies, backed by proven technology, industrial traction, and environmental urgency.",
  introduction1:
    "<span class='focused_first_para_letter_lightbg'>O</span>ur RDF Oil offers a sustainable, sulfur-free alternative to furnace oil and LDO — helping industries reduce emissions, cut fuel costs, and adopt circular economy practices without disrupting operations.",

  video: {
    videoUrl: "/assets/videos/nhc_feature_video.mp4",
    backgroundImage: "/assets/img/video_block_bg.jpg",
  },
  cta: {
    backgroundImage: "/assets/img/cta_bg_3.jpg",
    buttonUrl: "/projects",
    buttonText: "Explore Projects",
  },
};

const valueData = {
  sectionTitle: "VALUES",
  values: [{ text: "Landscape Design" }, { text: "Indoor Garden" }],
};

const featureData = {
  sectionTitle: "OUR <span>TIMELINE </span> <br>AT A GLANCE</br> ",
  buttonText: "Our Products",
  buttonUrl: "/services",
  image: "/assets/img/feature_thumb.jpg",
  features: [
    {
      icon: "fa6-regular:heart",
      title: "Founding And Origins",
      description:
        "2022 – Founded in Kolkata by Rahul Bansal & Nitish Jain",
    },
    {
      icon: "fa6-solid:link",
      title: "Technology Development",
      description:
        "In-house pyrolysis reactors developed & tested",
    },
    {
      icon: "fa6-solid:layer-group",
      title: "Initial Production Capacity",
      description:
        "Initial production capacity: 50,000 litres/month",
    },
    {
      icon: "fa6-brands:ubuntu",
      title: "Client Retention",
      description:
        "100% repeat client orders from industrial buyers",
    },

    {
      icon: "fa6-brands:ubuntu",
      title: "Scaling And Growth Projection",
      description:
        "Now scaled to 150,000+ litres/month, expanding to 350,000 litres/month in FY26",
    },
  ],
};

const teamMembersData = {
  title: `Our Team <br>`,
  subtitle: "FOUNDERS",
  teamMembers: [
    {
      img: "/assets/img/team_member_1.jpg",
      name: "Rahul Bansal",
      role: "Director",
      description: "<span class='focused_first_para_letter_lightbg'>Director</span>, brings over 15 years of experience in energy, cold storage, and hydrocarbon R&D. After earning his M.Sc. from Cranfield University, U.K., he turned his lifelong dream into a clean-energy business rooted in technical depth and sustainable impact.",
    },
    {
      img: "/assets/img/team_member_2.jpg",
      name: "Nitish Jain",
      role: "Director",
      description: "<span class='focused_first_para_letter_lightbg'>Director and Chartered Accountant</span>, brings financial acumen and over 13 years of experience in the plastic manufacturing industry. His expertise ensures efficient raw material sourcing and operational excellence — core pillars of NHC’s growth.",
    },
    // {
    //   img: "/assets/img/team_member_3.jpg",
    //   name: "Emily Parker",
    //   role: "Horticulture Expert",
    //   description: "Experienced in 10 years of Garden Landscape design.",
    // },
    // {
    //   img: "/assets/img/team_member_4.jpg",
    //   name: "David Anderson",
    //   role: "Team Project Manager",
    //   description: "Experienced in 10 years of Garden Landscape design.",
    // },
    // {
    //   img: "/assets/img/team_member_2.jpg",
    //   name: "John Mason",
    //   role: "Landscape Architect",
    //   description: "Experienced in 10 years of Garden Landscape design.",
    // },
  ],
};

// const brandLogos = [
//   "/assets/img/brand_logo_1.svg",
//   "/assets/img/brand_logo_2.svg",
//   "/assets/img/brand_logo_3.svg",
//   "/assets/img/brand_logo_4.svg",
//   "/assets/img/brand_logo_5.svg",
//   "/assets/img/brand_logo_6.svg",
//   "/assets/img/brand_logo_3.svg",
// ];

const WorkingData = {
  title: "OUR <span>WORK</span>",
  subtitle: "GALLERY",
  galleryItems: [
    {
      imgSrc: "/assets/img/work_thumb_1.jpg",
      title: "Gallery A",
      year: "2024",
      height: "694px",
    },
    {
      imgSrc: "/assets/img/work_thumb_2.jpg",
      title: "Gallery B",
      year: "2024",
      height: "287px",
    },
    {
      imgSrc: "/assets/img/work_thumb_2.jpg",
      title: "Gallery B",
      year: "2024",
      height: "383px",
    },
    {
      imgSrc: "/assets/img/work_thumb_4.jpg",
      title: "Gallery D",
      year: "2024",
      height: "480px",
    },
    {
      imgSrc: "/assets/img/work_thumb_5.jpg",
      title: "Gallery E",
      year: "2024",
      height: "190px",
    },
  ],
};

const cardData = {
  backgroundImage: "/assets/img/card_bg.jpg",
  tags: ["Home", "Garden", "Landscape Design", "Expert"],
  title: "MAKE YOUR DREAM <br /> GARDEN INTO REALITY",
  buttonLink: "/projects",
};

const VisionUsData = {
  title: `VISION`,

  introduction:
    "<span class='focused_first_para_letter_lightbg'>T</span>o Lead the Global Transition from Fossil Fuels to Clean, Circular, Waste-Derived Energy.",
  introduction1:
    "<span class='focused_first_para_letter_lightbg'>M</span>ake Plastic Pollution a Resource -- Not Crisis.",

  // video: {
  //   videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
  //   backgroundImage: "/assets/img/video_block_bg.jpg",
  // },
  // cta: {
  //   backgroundImage: "/assets/img/cta_bg_3.jpg",
  //   buttonUrl: "/projects",
  //   buttonText: "Explore Projects",
  // },
};
const MissionUsData = {
  title: `MISSION`,

  // introduction:
  //   "To lead the global transition from fossil fuels to clean, circular, waste-derived energy — making plastic pollution a resource, not a crisis.",
  introduction:
    "<span class='focused_first_para_letter_lightbg'>T</span>o Produce High-Calorific, Sulfur-Free Fuel by Leveraging Non-Recyclable Plastic Waste.",
  introduction1:
    "<span class='focused_first_para_letter_lightbg'>D</span>rive both Industrial Performance and Environmental Restoraion and To Do It At Scale.",

  // video: {
  //   videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
  //   backgroundImage: "/assets/img/video_block_bg.jpg",
  // },
  // cta: {
  //   backgroundImage: "/assets/img/cta_bg_3.jpg",
  //   buttonUrl: "/projects",
  //   buttonText: "Explore Projects",
  // },
};

const ctaData = {
  backgroundImage: "/assets/img/cta_bg.jpg",
  title: "POWER YOUR INDUSTRY <br />LOWER EMISSIONS & COSTS.",
  buttonText: "Contact Us",
  buttonUrl: "/contact",
};

export default function AboutPage() {
  pageTitle("About Us | NHC");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <AboutUs data={aboutUsData} />
      {/* <div className="cs_heading_bg cs_white_color">
        <ValueSection data={valueData} />
        <FeatureSection data={featureData} />
      </div> */}
      {/* <hr className="conditional_pageflow_hr" /> */}
      <section>
        <div className="cs_height_100 cs_height_lg_70" />
        <div className="container">
          <div className="cs_slider cs_style_1 cs_slider_gap_24">
            <div className="cs_section_heading cs_style_2 cs_color_1">
              <h2
                className="cs_section_title cs_fs_80 mb-0"
                data-aos="fade-down"
                dangerouslySetInnerHTML={{ __html: "Our Purpose" }}
              />

              <div className="cs_section_right">
                <h3
                  className="cs_brackets_title cs_normal cs_fs_16 mb-0"
                  dangerouslySetInnerHTML={{ __html: "Vision and Mission" }}
                ></h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Vission data={VisionUsData} />
      <Vission data={MissionUsData} />
      <CoreValuesSection />
      {/* <hr className="conditional_pageflow_hr" /> */}

      {/* Our Story Stuff/ Timeline */}
       <section>
        <div className="cs_height_100 cs_height_lg_70" />
        <div className="container">
          <div className="cs_slider cs_style_1 cs_slider_gap_24">
            <div className="cs_section_heading cs_style_2 cs_color_1">
              <h2
                className="cs_section_title cs_fs_80 mb-0"
                data-aos="fade-down"
                dangerouslySetInnerHTML={{ __html: "Our Story" }}
              />

              <div className="cs_section_right">
                <h3
                  className="cs_brackets_title cs_normal cs_fs_16 mb-0"
                  dangerouslySetInnerHTML={{ __html: "Story" }}
                ></h3>
              </div>
            </div>
            <div className="cs_height_50 cs_height_lg_50" />
            <div className="row">
              <div className="col-lg-10">
                <AnimatedTimeline />
              </div>
              <div className="col-lg-2">
                <div className="w-100 h-100 cus_story_side" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <TeamMember data={teamMembersData} />
      {/* <BrandSection data={brandLogos} /> */}
      {/* <WorkSection1 data={WorkingData} /> */}
      {/* <CardSection data={cardData} /> */}
      <CTASection data={ctaData} />
    </>
  );
}
