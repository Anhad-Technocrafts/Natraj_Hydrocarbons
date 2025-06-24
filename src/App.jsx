// import Aos from "aos";
// import { Route, Routes, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import Layout from "./Layout/Layout";
// import HomePage from "./Pages/HomePage/HomePage";
// import AboutPage from "./Pages/AboutPage";
// import ServicePage from "./Pages/ServicePage";
// import ProjectPage from "./Pages/ProjectPage";
// import ContactPage from "./Pages/ContactPage";
// import GalleryPage from "./Pages/GalleryPage";
// import BlogPage from "./Pages/BlogPage";
// import BlogDetailsPage from "./Pages/BlogsDetails";
// import ServiceDetailsPage from "./Pages/ServiceDetails";
// import ProjectDetailsPage from "./Pages/ProjectDetails";
// import FaqPage from "./Pages/FaqPage";
// import Layout1 from "./Layout/Layout1";
// import Layout3 from "./Layout/Layout3";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import ForgotPassword from "./Pages/ForgotPassword";
// import Error404 from "./Pages/Error404";



// function App() {
//   // Aos.init({
//   //   duration: 1200,
//   //   delay: 0.2,
//   //   disable: window.innerWidth < 1024,
//   //   once: true
//   // });
//   const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  
  // useEffect(() => {
  //   Aos.init({
  //     disable: 'mobile',
  //     duration: 1200,
  //     delay: 0.2,
  //     once: true
//     });
//     return () => Aos.refreshHard(); // Cleanup function
//   }, []);

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout1 />}>
//           <Route index element={<HomePage />} />

//           {/* Template Pages */}
//           {/* <Route path="/services" element={<ServicePage />} /> */}
//         </Route>

//         <Route path="/" element={<Layout />}>
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactPage />} />


//           {/* Template Pages */}
//           {/* <Route path="/projects" element={<ProjectPage />} />
//           <Route path="/gallery" element={<GalleryPage />} />
//           <Route path="/blog" element={<BlogPage />} />
//           <Route path="/blog/:blogId" element={<BlogDetailsPage />} />
//           <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
//           <Route path="/faq" element={<FaqPage />} /> */}

//         </Route>

//         <Route path="/" element={<Layout3 />}>
//           <Route path="/superfuel" element={<ServiceDetailsPage />} />
//         </Route>

//         {/* Template Pages */}
//         {/* <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} /> */}

//         <Route path="*" element={<Error404 />} />
//       </Routes>
//     </>
//   );
// }

// export default App;


import Aos from "aos";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4"; // 
import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import ProjectPage from "./Pages/ProjectPage";
import ContactPage from "./Pages/ContactPage";
import GalleryPage from "./Pages/GalleryPage";
import BlogPage from "./Pages/BlogPage";
import BlogDetailsPage from "./Pages/BlogsDetails";
import ServiceDetailsPage from "./Pages/ServiceDetails";
import ProjectDetailsPage from "./Pages/ProjectDetails";
import FaqPage from "./Pages/FaqPage";
import Layout1 from "./Layout/Layout1";
import Layout3 from "./Layout/Layout3";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import Error404 from "./Pages/Error404";
import TechnologyPage from "./Pages/Technology";

function App() {
  
  const { pathname } = useLocation();

 
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.initialize("G-KR7KS34NKN"); 
    }
  }, []);

  //  Track page views on route change
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.send({ hitType: "pageview", page: pathname });
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  //  Initialize AOS
  useEffect(() => {
    Aos.init({
      disable: 'mobile',
      duration: 1200,
      delay: 0.2,
      once: true
    });
    return () => Aos.refreshHard();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout1 />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/services" element={<ServicePage />} /> */}
        </Route>

        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/technology" element={<TechnologyPage />} />


          {/* Template Pages */}
          {/* <Route path="/projects" element={<ProjectPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:blogId" element={<BlogDetailsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
          <Route path="/faq" element={<FaqPage />} /> */}
        </Route>

        <Route path="/" element={<Layout3 />}>
          <Route path="/superfuel" element={<ServiceDetailsPage />} />
        </Route>

        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> */}

        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
