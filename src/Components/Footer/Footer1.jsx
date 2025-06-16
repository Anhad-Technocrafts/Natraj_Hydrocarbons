import React from "react";
import { Link } from "react-router-dom";
const data = {
  logo: "/assets/img/nhc_logo_small.png",
  newsletterText:
    " Stay updated with our latest <br /> projects and gardening tips.",
  menus: [
    {
      title: "SUPPORT",
      links: [
        { label: "CONTACT", url: "/contact" },
        // { label: "USER GUIDE", url: "/" },
        // { label: "TESTIMONIAL", url: "/" },
        // { label: "CUSTOMER", url: "/" },
      ],
    },
    {
      title: "LINKS",
      links: [
        { label: "ABOUT US", url: "/about" },
        // { label: "GALLERY", url: "/gallery" },
        // { label: "PROJECTS", url: "/projects" },
        // { label: "BLOG", url: "/blog" },
      ],
    },
    {
      title: "INDUSTRIES",
      links: [
        { label: "SUPER FUEL", url: "/superfuel" },
        // { label: "HOME GARDEN", url: "/services/services-details" },
        // { label: "PLANT SELECTION", url: "/services/services-details" },
        // { label: "HARDSCAPING", url: "/services/services-details" },
        // { label: "PUBLIC GARDEN", url: "/services/services-details" },
      ],
    },
  ],
  copyright: "Natraj Hydrocarbons © 2025. ALL RIGHTS RESERVED.",
  bottomLinks: [
    { label: "Powered with ❤️ by Anhad Technocrafts", url: "/" },
    // { label: "TERMS & CONDITION", url: "/" },
  ],
};

export default function Footer1() {
  return (
    <footer className={`cs_footer cs_style_1 `}>
      <div className="container">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <div className="cs_text_widget">
                <Link className="" to={data.logoUrl}>
                <img
                  data-aos="zoom-in"
                  src={data.logo}
                  alt="Logo"
                  className="wow zoomIn"
                />
                </Link>
              </div>
            </div>
          </div>

          {data.menus.map((menu, i) => (
            <div className="cs_footer_col" key={i}>
              <div className="cs_footer_widget">
                <h4 className="cs_footer_widget_title">{menu.title}</h4>
                <ul className="cs_footer_widget_menu cs_mp_0">
                  {menu.links.map((link, index) => (
                    <li key={index}>
                      <Link to={link.url}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="cs_bottom_footer">
          <div className="cs_bottom_footer_left" data-aos="fade-right">
            <div
              className="cs_copyright"
              dangerouslySetInnerHTML={{ __html: data.copyright }}
            ></div>
          </div>
          <div className="cs_bottom_footer_right" data-aos="fade-left">
            <ul className="cs_footer_links cs_mp_0">
              {data.bottomLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
