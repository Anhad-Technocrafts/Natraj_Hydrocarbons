import React from "react";
import PageHeading from "../../Components/PageHeading";
import ServiceSection1 from "../../Components/ServicesSection/ServiceSection1";
import CtaSection from "../../Components/CTASection/CtaSection";
import { pageTitle } from "../../helper";
// import Table from "../../Components/Table/Table";

export default function ServicePage() {
  const BreadcrumbsData = {
    backgroundImage: "/assets/img/service_heading_bg.jpg",
    title: "OUR SERVICES",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Services", active: true },
    ],
  };

  const servicesData = [
    {
      title: "RDF Oil",
      description:
        "The Smart Alternative to Traditional Industrial Fuels",
      imgSrc: "/assets/img/project_thumb_1.jpg",
      link: "/services/services-details",
    },
    // {
    //   title: "PLANT SELECTION",
    //   description:
    //     "Hand-picked greenery for your oasis. Our experts select the right plants, ensuring they thrive in your garden's unique conditions.",
    //   imgSrc: "/assets/img/project_thumb_2.jpg",
    //   link: "/services/services-details",
    // },
    // {
    //   title: "HARDSCAPING",
    //   description:
    //     "Adding structure to your landscape. We create functional and aesthetic hardscape features like patios, walkways, and retaining walls.",
    //   imgSrc: "/assets/img/project_thumb_3.jpg",
    //   link: "/services/services-details",
    // },
    // {
    //   title: "GARDEN MAINTENANCE",
    //   description:
    //     "Preserving your garden's allure. We offer ongoing maintenance services to ensure your garden looks its best year-round.",
    //   imgSrc: "/assets/img/project_thumb_4.jpg",
    //   link: "/services/services-details",
    // },
    // {
    //   title: "AQUASCAPE INSTALLATION",
    //   description:
    //     "Enhance the serenity of your garden with captivating water features like fountains, ponds, and waterfalls for the soothing sound of water.",
    //   imgSrc: "/assets/img/project_thumb_5.jpg",
    //   link: "/services/services-details",
    // },

    // {
    //   title: "GARDEN MAINTENANCE",
    //   description:
    //     "Preserving your garden's allure. We offer ongoing maintenance services to ensure your garden looks its best year-round.",
    //   imgSrc: "/assets/img/project_thumb_6.jpg",
    //   link: "/services/services-details",
    // },
  ];

  const ctaData = {
    backgroundImage: "/assets/img/cta_bg_2.jpg",
    title: "READY TO DESIGN YOUR GARDEN?",
    buttonText: "Contact Us",
    buttonUrl: "/contact",
  };

  pageTitle("Service | NHC");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />

      <ServiceSection1 data={servicesData} />

    

      <CtaSection data={ctaData} />
    </>
  );
}
