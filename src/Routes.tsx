import { ReactNode } from "react";

// Icons Import 
import {  FaCartArrowDown, FaHome, FaProductHunt, FaRegImages } from "react-icons/fa"
import { BiSolidCategory } from "react-icons/bi";
import { BiSolidCoupon } from "react-icons/bi";


// Pages Import


// import BlogPage from "./Pages/Blog/Page";
// import AddBlogPage from "./Pages/Blog/View/AddPage";
// import EditBlog  from "./Pages/Blog/View/EditPage";


import DoctorsPage from "./Pages/Doctors/Page";
import AddDoctorsPage from "./Pages/Doctors/View/AddPage";
import EditDoctors  from "./Pages/Doctors/View/EditPage";



// import FooterPage from "./Pages/Footer/Page";
// import AddFooterPage from "./Pages/Footer/View/AddPage";
// import EditFooter  from "./Pages/Footer/View/EditPage";


import HomePage from "./Pages/Home/HomePage";



import PartnersPage from "./Pages/Partners/Page";
import AddPartnersPage from "./Pages/Partners/View/AddPage";
import EditPartners  from "./Pages/Partners/View/EditPage";


import ServicePage from "./Pages/Service/Page";
import AddServicePage from "./Pages/Service/View/AddPage";
import EditService  from "./Pages/Service/View/EditPage";


import ServiceBenefitPage from "./Pages/ServiceBenefit/Page";
import AddServiceBenefitPage from "./Pages/ServiceBenefit/View/AddPage";
import EditServiceBenefit  from "./Pages/ServiceBenefit/View/EditPage";
  


import SubServicePage from "./Pages/SubService/Page";
import AddSubServicePage from "./Pages/SubService/View/AddPage";
import EditSubService  from "./Pages/SubService/View/EditPage";
  
  


// import SliderPage from "./Pages/Slider/Page";
// import AddSliderPage from "./Pages/Slider/View/AddPage";
// import EditSlider  from "./Pages/Slider/View/EditPage";


interface RoutesLinksType {
    name?: string,
    href?: string,
    element?: ReactNode,
    icon?: any,
    Viewelement?: ReactNode,
    Viewhref?: string
    children?: any
    hidden?: boolean
}
export const RoutesLinks: RoutesLinksType[] = [
    {
        name: "Home",
        element: <HomePage />,
        icon: <FaHome />,
        href: "/",
    },
    {
        name: "Partners",
        element: <PartnersPage />,
        icon: <FaRegImages />,
        href: "/partners",
    },
    {
        href: "/partners/edit",
        element: <EditPartners />,
        hidden: true
    },
    {
        href: "/partners/add",
        element: <AddPartnersPage />,
        hidden: true
    },
    {
        name: "Doctors",
        element: <DoctorsPage />,
        icon: <FaProductHunt />,
        href: "/doctors",
    },
    {
        href: "/doctors/edit",
        element: <EditDoctors />,
        hidden: true
    },
    {
        href: "/doctors/add",
        element: <AddDoctorsPage />,
        hidden: true
    },
    // {
    //     name: "Blog",
    //     element: <BlogPage />,
    //     icon: <FaCartArrowDown />,
    //     href: "/Blog",
    // },
    // {
    //     href: "/Blog/edit",
    //     element: <EditBlog />,
    //     hidden: true
    // },
    // {
    //     href: "/Blog/add",
    //     element: <AddBlogPage />,
    //     hidden: true
    // },
    {
        name: "Service",
        element: <ServicePage />,
        icon: <BiSolidCategory />,
        href: "/service",
    },
    {
        href: "/service/:id",
        element: <EditService />,
        hidden: true
    },
    {
        href: "/service/add",
        element: <AddServicePage />,
        hidden: true
    },
    // {
    //     name: "SubService",
    //     element: <SubServicePage />,
    //     icon: <BiSolidCategory />,
    //     href: "/service/sub",
    // },
    {
        href: "/service/:id/sub/:id",
        element: <EditSubService />,
        hidden: true
    },
    {
        href: "/service/sub/add",
        element: <AddSubServicePage />,
        hidden: true
    },
    // {
    //     name: "ServiceBenefit",
    //     element: <ServiceBenefitPage />,
    //     icon: <BiSolidCategory />,
    //     href: "/service/benefit",
    // },
    {
        href: "/service/:id/benefit/:id",
        element: <EditServiceBenefit />,
        hidden: true
    },
    {
        href: "/service/benefit/add",
        element: <AddServiceBenefitPage />,
        hidden: true
    },
 
    // {
    //     name: "Slider",
    //     element: <SliderPage />,
    //     icon: <FaProductHunt />,
    //     href: "/Slider",
    // },
    // {
    //     href: "/Slider/edit",
    //     element: <EditSlider />,
    //     hidden: true
    // },
    // {
    //     href: "/Slider/add",
    //     element: <AddSliderPage />,
    //     hidden: true
    // },
    // {
    //     name: "Footer",
    //     element: <FooterPage />,
    //     icon: <BiSolidCoupon />,
    //     href: "/Footer",
    // },
    // {
    //     href: "/Footer/edit",
    //     element: <EditFooter />,
    //     hidden: true
    // },
    // {
    //     href: "/Footer/add",
    //     element: <AddFooterPage />,
    //     hidden: true
    // },
    // Add more pages following the same pattern...
];
