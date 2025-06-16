import React from "react";
import PageHeading from "../../Components/PageHeading";
import ContactSection from "../../Components/Contact";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";

export default function ContactPage() {
  const BreadcrumbsData = {
    backgroundImage: "/assets/img/contact_heading_bg.jpg",
    title: "CONTACT US",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Contact", active: true },
    ],
  };

  const contactData = {
    mapTitle: "SEND US A <span>MESSAGE</span>",
    sectionTitle: "GET IN <span>TOUCH</span>",
    contactList: [
      {
        label: "EMAIL",
        value: "sales@nhcoil.com",
      },
      {
        label: "Contact",
        value: "+91 98310 16957 <br/> +91 98310 22021",
      },
      {
        label: "ADDRESS",
        value: "7A Bentinck Street, <br/>Old Wing,1st Floor, <br/>Kolkata 700001, <br/>West Bengal, India",
      },
    ],
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2439041246907!2d88.35056417651381!3d22.569979279493484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277af7b58c38f%3A0x36a425b19ed612f4!2sBentinck%20St%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1749970116126!5m2!1sen!2sin",
    formButtonText: "Send Message",
  };

  // const cardData = {
  //   backgroundImage: "/assets/img/card_bg.jpg",
  //   tags: ["Home", "Garden", "Landscape Design", "Expert"],
  //   title: "MAKE YOUR DREAM <br /> GARDEN INTO REALITY",
  //   buttonLink: "/projects",
  // };
  pageTitle("Contact | NHC");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <ContactSection data={contactData} />
      {/* <CardSection data={cardData} /> */}
    </>
  );
}
