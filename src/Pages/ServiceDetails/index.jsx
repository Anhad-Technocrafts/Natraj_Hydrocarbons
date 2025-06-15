import ServiceDetailsSection from "../../Components/ServiceDetails";
import WorkingProcess from "../../Components/WorkingProcess";
// import TestimonialSection1 from "../../Components/TestimonialSection/TestimonialSection1";
// import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";
import TechnicalSpecifications from "../../Components/TECHNICAL SPECIFICATIONS/TechnicalSpecifications";
import Table from "../../Components/Table/Table";

const serviceDetailsData = {
  breadcrumb: [
    { label: "Home", url: "/" },
    // { label: "Services", url: "/services" },
    { label: "Super Fuel" },
  ],
  titleHighlight: "RDF Oil",
  video: {
    url: "https://www.youtube.com/embed/rRid6GCJtgc",
    bgImage: "/assets/img/video_block_bg_2.jpg",
  },
  cta: {
    buttonUrl: "#",
    buttonText: "See More",
    bgImage: "/assets/img/cta_bg_4.jpg",
  },
  description: `
    Our flagship product, RDF Oil (Refuse-Derived Fuel Oil), is a sulphur-free, high-calorific industrial fuel derived entirely from non-recyclable plastic waste. Designed as a drop-in replacement for furnace oil, LDO, and LSHS, it offers better efficiency, cleaner emissions, and a measurable cost advantage.
From steel plants to textile units, industries across India are switching to RDF Oil to cut costs — and carbon.

  `,
  iconBoxes: [
    {
      iconClass: "fa6-solid:hand-holding-droplet",
      title: " Logistics & Shipping",
    },
    {
      iconClass: "fa6-solid:utensils",
      title: "Manufacturing & Heavy Industries",
    },
    {
      iconClass: "fa6-solid:vials",
      title: "Textiles & Garments"
    },
    {
      iconClass: "fa6-solid:feather",
      title: " Metal & Forging Plants",
    },
    {
      iconClass: "fa6-solid:seedling",
      title: "Chemical Processing Units",
    },
    // {
    //   iconClass: "fa6-solid:handshake",
    //   title: "Sustainable Eco-Friendly Options",
    // },
  ],
};

const workingProcessData = {
  sectionTitle: "INDUSTRIES <span>USING</span> RDF OIL ",

  subtitle: "HOW IT WORKS",
  logo: "/assets/img/logo.svg",
  steps: [
    {
      title: "01 | Zero Sulphur Content",
      description:
        " Means no smoke, reduced maintenance, and cleaner combustion.",
    },
    {
      title: "02 |  High Calorific Value",
      description:
        "Approx. 10,500 kcal/kg — more energy output per litre than many traditional fuels.",
    },
    {
      title: "03 |  Plastic Waste Reuse",
      description:
        " Each litre keeps harmful waste out of landfills and oceans.",
    },
    {
      title: "04 | Proven Savings",
      description:
        "Clients report over 10% cost savings in operational fuel usage.",
    },
  ],
};

// const testimonialData = {
//   title: "TESTIMONIAL",
//   testimonialData: [
//     {
//       text: `NHC's dedication to bringing our <span>vision</span> to life was exceptional. They turned our <span>backyard</span> into a haven of tranquility. Their attention to detail and sustainable practices on their design <span>impressed</span> us.`,
//       img: "/assets/img/avatar.png",
//       name: "MARIA HUGH",
//       designation: "Marketing of Elston Company",
//     },
//     {
//       text: `NHC's dedication to bringing our <span>vision</span> to life was exceptional. They turned our <span>backyard</span> into a haven of tranquility. Their attention to detail and sustainable practices on their design <span>impressed</span> us.`,
//       img: "/assets/img/avatar.png",
//       name: "STEVE EVANS",
//       designation: "CEO of Malley Company",
//     },
//     {
//       text: `NHC's dedication to bringing our <span>vision</span> to life was exceptional. They turned our <span>backyard</span> into a haven of tranquility. Their attention to detail and sustainable practices on their design <span>impressed</span> us.`,
//       img: "/assets/img/avatar.png",
//       name: "STEVE EVANS",
//       designation: "CEO of Malley Company",
//     },
//   ],
// };

const cardData = {
  backgroundImage: "/assets/img/card_bg_2.jpg",
  tags: ["Home", "Garden", "Landscape Design", "Expert"],
  title: "MAKE YOUR DREAM <br /> GARDEN INTO REALITY",
  buttonLink: "/projects",
};

export default function ServiceDetailsPage() {
  pageTitle("Service Details | NHC");
  return (
    <>
      <ServiceDetailsSection data={serviceDetailsData} />{" "}
      <Table />
      <TechnicalSpecifications />
      <WorkingProcess data={workingProcessData} />
      {/* <TestimonialSection1 data={testimonialData} /> */}
      {/* <CardSection data={cardData} bgColor={"cs_color_1"} /> */}
    </>
  );
}
