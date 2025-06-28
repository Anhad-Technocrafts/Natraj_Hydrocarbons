import React from "react";
// import PageHeading1 from "../../Components/PageHeading/PageHeading1";
// import Sidebar from "../../Components/Sidebar/Sidebar";
import BlogDetailsSection from "../../Components/BlogsDetails";
// import CardSection from "../../Components/CardSection";
import PageHeading from "../../Components/PageHeading";
import { pageTitle } from "../../helper";
import CTASection from "../../Components/CTASection";

const BreadcrumbsData = {
  backgroundImage: "/assets/img/about_heading_bg.jpg",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "Investors", active: true },
  ],
  title: "Investors",
};

const SidebarData = {
  categoriesData: {
    category: "Categories",

    categories: [
      { name: "Corporate", url: "/category/corporate" },
      { name: "Company", url: "/category/company" },
      { name: "Search Engine", url: "/category/search-engine" },
      { name: "Information", url: "/category/information" },
      { name: "Painting", url: "/category/painting" },
    ],
  },

  recentPostsData: {
    recentPost: "Recent Posts",

    recentPosts: [
      {
        title: "How to studio setup...",
        date: "15 Aug 2022",
        image: "/assets/img/post_1.jpg",
        url: "/post/how-to-studio-setup",
      },
      {
        title: "Creative people mind...",
        date: "15 Aug 2022",
        image: "/assets/img/post_2.jpg",
        url: "/post/creative-people-mind",
      },
      {
        title: "AI take over human...",
        date: "15 Aug 2022",
        image: "/assets/img/post_3.jpg",
        url: "/post/ai-takeover-human",
      },
    ],
  },

  archivesData: {
    archive: "Archives",

    archives: [
      { name: "Archives", url: "/archives" },
      { name: "15 Aug 2025", url: "/archives/2025-08-15" },
      { name: "20 Sep 2024", url: "/archives/2024-09-20" },
      { name: "11 Dec 2023", url: "/archives/2023-12-11" },
      { name: "25 Jun 2022", url: "/archives/2022-06-25" },
    ],
  },

  tagsData: {
    tag: "Tags",

    tags: [
      { name: "Business", url: "/blog" },
      { name: "Agency", url: "/tag/agency" },
      { name: "Artwork", url: "/tag/artwork" },
      { name: "Marketing", url: "/tag/marketing" },
      { name: "Information", url: "/tag/information" },
      { name: "Design", url: "/tag/design" },
      { name: "Wordpress", url: "/tag/wordpress" },
    ],
  },
};

const blogData = {
  postThumb: "/assets/img/Social-Media-PostWebsite-Article-for-Nataraj-Hydrocarbons-Private-Limited.png",
  date: "24 June 2025",
  category: { title: "Investors", url: "/" },

  title: "Rigel Capital Invests in Nataraj Hydrocarbons Private Limited to Tackle Plastic Waste Through Clean Fuel Innovation",
  content: [
    {
      type: "p",
      text: `Singapore — Rigel Capital is deepening its focus on climate innovation with its latest investment in Nataraj Hydrocarbons Private Limited (“NHC”), a pioneering clean-tech company founded by Rahul Bansal and Nitish Jain. Rigel has invested in NHC’s first external round to support its mission of converting plastic waste into clean fuel—a scalable and environmentally sustainable alternative to traditional fossil fuels.`,
    },
    // {
    //   type: "blockquote",
    //   quote: `A well-designed landscape is more than just a beautiful yard; it’s an investment in your home’s value, functionality, and your overall lifestyle. Expert landscape design services bring your vision to life, creating an outdoor space that is both stunning and practical for years to come.`,
    //   author: "Loren Mulari",
    // },
    {
      type: "p",
      text: `NHC stands at the forefront of sustainable innovation. By leveraging proprietary pyrolysis solutions, the company transforms waste plastic into usable clean fuels, offering a scalable alternative to traditional fossil-based energy sources. NHC has developed in-house technology to address known limitations in the process, such as reactor descaling and fuel refinement, demonstrating both technical expertise and operational excellence.`,
    },
    {
      type: "p",
      text: `With an existing monthly capacity of 150,000 liters of clean fuel and 100% repeat orders from industrial clients, NHC is now building a new production line that will increase capacity to 350,000 liters/month. The demand for substitutes to Light Diesel Oil and Furnace Oil in India and other global markets is surging, and NHC is strategically positioned to capture this momentum.`,
    },
    {
      type: "p",
      text: `“We believe NHC offers not just a compelling business opportunity, but a critical environmental solution,” said Sebastian Togelang, Founding Partner of Rigel Capital. “Their proven technology, repeat customer traction, and clear roadmap to scale make them a standout in the clean energy space.”`,
    },
    {
      type: "p",
      text: `The two Directors and Co-Founders of Nataraj shared their thoughts: “We are grateful that Rigel Capital has believed in our vision of making India a benchmark in waste plastic recycling and processing clean fuels”, said Rahul Bansal, “We believe that we will meet the expectations of our investors in creating value in a sustainable and scalable manner “, said Nitish Jain.`,
    },
    {
      type: "p",
      text: `With plans for a Series A round underway, NHC aims to expand across new geographies, scale production further, and explore future innovations such as Methanol production. This investment aligns with Rigel Capital’s commitment to backing transformative ventures at the intersection of sustainability, technology, and impact.`,
    },
  ],
  // images: ["/assets/img/post_2.jpg", "/assets/img/post_3.jpg"],
//   sections: [
//     {
//       heading: "Personalized Designs for Every Style and Need",
//       paragraph: `A professional landscape designer brings a wealth of knowledge and creativity to the table. They will work closely with you to understand your vision, needs, and lifestyle. Whether you're looking for a tranquil retreat, a space for family gatherings, or a low-maintenance garden, an expert designer can craft a personalized landscape plan that aligns with your goals.<br/>
// Landscape designers consider various elements like color schemes, textures, plant selection, and layout to create a harmonious design that reflects your style. They can incorporate features such as garden paths, water elements, outdoor lighting, and even edible plants, giving your yard a unique, personalized touch.`,
//     },
//     {
//       heading: "Maximize Space and Functionality",
//       paragraph: `One of the main advantages of hiring a landscape designer is their ability to maximize the potential of your yard. No matter the size or shape of your outdoor space, an expert can design it to be both aesthetically pleasing and functional. They can transform even the smallest yard into a cozy retreat or optimize a large lawn to include areas for entertaining, gardening, or relaxation.`,
//     },
//   ],
  // videoUrl: "https://www.youtube.com/embed/uqWykluW2e4",
  // closingParagraph: `Professional landscape design services take into account how you'll use the space. For example, if you enjoy outdoor dining or entertaining, they can create an inviting patio or outdoor kitchen area. If you have children or pets, they can design a safe and engaging play area. A designer can also create zones for different activities, ensuring that every inch of your yard serves a purpose.`,

  property: {
    title: "About Rigel Capital:",
    description: `Rigel Capital is an investor and ecosystem builder focused on connecting the West and East to foster a global innovation ecosystem. We back hyper-growth companies across supply chain, logistics, green mobility, e-commerce enablement, health, sustainability and other transformative technology sectors. `
  },

  // formTitle: "Leave A Reply",
  // formNote:
  //   "Your email address will not be published. Required fields are marked *",
};

// const cardData = {
//   backgroundImage: "/assets/img/card_bg.jpg",
//   tags: ["Home", "Garden", "Landscape Design", "Expert"],
//   title: "MAKE YOUR DREAM <br /> GARDEN INTO REALITY",
//   buttonLink: "/projects",
// };
const ctaData = {
  backgroundImage: "/assets/img/cta_bg.jpg",
  title: "POWER YOUR INDUSTRY <br />LOWER EMISSIONS & COSTS.",
  buttonText: "Contact Us",
  buttonUrl: "/contact",
};

export default function BlogDetailsPage() {
  pageTitle("Investors | NHC");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <section>
        <div className="cs_height_100 cs_height_lg_70" />
        <div className="container">
          <div className="row">
            <BlogDetailsSection data={blogData} />
            {/* <Sidebar data={SidebarData} /> */}
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_70" />
      </section>
      <CTASection data={ctaData} />
    </>
  );
}
