import { ReactNode } from "react";

// Icons Import 
import {  FaCartArrowDown, FaHome, FaProductHunt, FaRegImages } from "react-icons/fa"
import { BiSolidCategory } from "react-icons/bi";
import { BiSolidCoupon } from "react-icons/bi";


// Pages Import


import BlogPage from "./Pages/Blog/Page";
import AddBlogPage from "./Pages/Blog/View/AddPage";
import EditBlog  from "./Pages/Blog/View/EditPage";


import DoctorsPage from "./Pages/Doctors/Page";
import AddDoctorsPage from "./Pages/Doctors/View/AddPage";
import EditDoctors  from "./Pages/Doctors/View/EditPage";



import FooterPage from "./Pages/Footer/Page";
import AddFooterPage from "./Pages/Footer/View/AddPage";
import EditFooter  from "./Pages/Footer/View/EditPage";


import HomePage from "./Pages/Home/HomePage";



import PartnersPage from "./Pages/Partners/Page";
import AddPartnersPage from "./Pages/Partners/View/AddPage";
import EditPartners  from "./Pages/Partners/View/EditPage";


import ServicesPage from "./Pages/Services/Page";
import AddServicesPage from "./Pages/Services/View/AddPage";
import EditServices  from "./Pages/Services/View/EditPage";
  


import SliderPage from "./Pages/Slider/Page";
import AddSliderPage from "./Pages/Slider/View/AddPage";
import EditSlider  from "./Pages/Slider/View/EditPage";


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
        href: "/Partners",
    },
    {
        href: "/Partners/:id",
        element: <EditPartners />,
        hidden: true
    },
    {
        href: "/Partners/add",
        element: <AddPartnersPage />,
        hidden: true
    },
    {
        name: "Doctors",
        element: <DoctorsPage />,
        icon: <FaProductHunt />,
        href: "/Doctors",
    },
    {
        href: "/Doctors/:id",
        element: <EditDoctors />,
        hidden: true
    },
    {
        href: "/Doctors/add",
        element: <AddDoctorsPage />,
        hidden: true
    },
    {
        name: "Blog",
        element: <BlogPage />,
        icon: <FaCartArrowDown />,
        href: "/Blog",
    },
    {
        href: "/Blog/:id",
        element: <EditBlog />,
        hidden: true
    },
    {
        href: "/Blog/add",
        element: <AddBlogPage />,
        hidden: true
    },
    {
        name: "Services",
        element: <ServicesPage />,
        icon: <BiSolidCategory />,
        href: "/Services",
    },
    {
        href: "/Services/:id",
        element: <EditServices />,
        hidden: true
    },
    {
        href: "/Services/add",
        element: <AddServicesPage />,
        hidden: true
    },
    {
        name: "Slider",
        element: <SliderPage />,
        icon: <FaProductHunt />,
        href: "/Slider",
    },
    {
        href: "/Slider/:id",
        element: <EditSlider />,
        hidden: true
    },
    {
        href: "/Slider/add",
        element: <AddSliderPage />,
        hidden: true
    },
    {
        name: "Footer",
        element: <FooterPage />,
        icon: <BiSolidCoupon />,
        href: "/Footer",
    },
    {
        href: "/Footer/:id",
        element: <EditFooter />,
        hidden: true
    },
    {
        href: "/Footer/add",
        element: <AddFooterPage />,
        hidden: true
    },
    // Add more pages following the same pattern...
];
