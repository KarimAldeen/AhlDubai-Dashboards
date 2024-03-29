import { ReactNode } from "react";

// Icons Import 
import {   FaHome, FaInfo, FaProductHunt, FaRegImages } from "react-icons/fa"
import { BiSolidCategory } from "react-icons/bi";

import { IoShareSocial } from "react-icons/io5";
import { PiFlagBanner } from "react-icons/pi";
import { FaUserDoctor } from "react-icons/fa6";

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




//socialmeida
import SocialMediaPage from "./Pages/SocialMedia/Page";
import AddSocialMedia from "./Pages/SocialMedia/View/AddPage";
import EditSocialMedia  from "./Pages/SocialMedia/View/EditPage";


//hero_section
import HeroSectionPage from "./Pages/HeroSection/Page";
import AddHeroSection from "./Pages/HeroSection/View/AddPage";
import EditHeroSection  from "./Pages/HeroSection/View/EditPage";


//patient_say
import PatientSayPage from "./Pages/PatientSay/Page";
import AddPatientSay from "./Pages/PatientSay/View/AddPage";
import EditPatientSay  from "./Pages/PatientSay/View/EditPage";



//website info 
import WebsiteInfoPage from "./Pages/WebsiteInfo/Page";
import AddWebsiteInfo from "./Pages/WebsiteInfo/View/AddPage";
import EditWebsteInfo  from "./Pages/WebsiteInfo/View/EditPage";

//sub_banner
import AddSubServiceBanner from "./Pages/SubService/Banner/View/AddPage";
import EditSubServiceBanner from "./Pages/SubService/Banner/View/EditPage";


//sub_Benfit
import AddSubServiceBenfit from "./Pages/SubService/Benfit/View/AddPage";
import EditSubServiceBenfit from "./Pages/SubService/Benfit/View/EditPage";



import AddSubServiceSubBenfit from "./Pages/SubService/SubBenfit/View/AddPage";
import EditSubServiceSubBenfit from "./Pages/SubService/SubBenfit/View/EditPage";

import ServicePage from "./Pages/Service/Page";
import AddServicePage from "./Pages/Service/View/AddPage";
import EditService  from "./Pages/Service/View/EditPage";


import AddServiceBenefitPage from "./Pages/ServiceBenefit/View/AddPage";
import EditServiceBenefit  from "./Pages/ServiceBenefit/View/EditPage";
  


import SubServicePage from "./Pages/SubService/Page";
import AddSubServicePage from "./Pages/SubService/View/AddPage";
import EditSubService  from "./Pages/SubService/View/EditPage";
import SingleAddPage from "./Pages/SubService/View/SingleAddPage";
  



import SettingPage from "./Pages/setting/EditPage";
import { SettingFilled } from "@ant-design/icons";


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
        name: "Service",
        element: <ServicePage />,
        icon: <BiSolidCategory />,
        href: "/service",
    },
    {
        name: "subservice",
        element: <SubServicePage />,
        icon: <FaHome />,
        href: "/subservice",
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
        icon: <FaUserDoctor />,
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
    {
        name: "SocialMedia",
        element: <SocialMediaPage />,
        icon: <IoShareSocial />,
        href: "/socialmedia",
    },
    {
        href: "/socialmedia/edit",
        element: <EditSocialMedia />,
        hidden: true
    },
    {
        href: "/socialmedia/add",
        element: <AddSocialMedia />,
        hidden: true
    },
    //hero section
    {
        name: "HeroSection",
        element: <HeroSectionPage />,
        icon: <PiFlagBanner />,
        href: "/herosection",
    },
    {
        href: "/herosection/edit",
        element: <EditHeroSection />,
        hidden: true
    },
    {
        href: "/herosection/add",
        element: <AddHeroSection />,
        hidden: true
    },
    //PatientSay
    {
        name: "PatientSay",
        element: <PatientSayPage />,
        icon: <FaProductHunt />,
        href: "/patient_say",
    },
    {
        href: "/patient_say/edit",
        element: <EditPatientSay />,
        hidden: true
    },
    {
        href: "/patient_say/add",
        element: <AddPatientSay />,
        hidden: true
    },
    //Website Info 

    {
        name: "WebsiteInfo",
        element: <WebsiteInfoPage />,
        icon: <FaInfo />,
        href: "/website_info",
    },
    {
        href: "/website_info/edit",
        element: <EditWebsteInfo />,
        hidden: true
    },
    {
        href: "/website_info/add",
        element: <AddWebsiteInfo />,
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
        href: "/service/:id",
        element: <EditService />,
        hidden: true
    },
    {
        href: "/service/add",
        element: <AddServicePage />,
        hidden: true
    },
 
    {
        element: <SingleAddPage />,
        href: "/subservice/add",
        hidden: true

    },
    {
        href: "/service/:id/sub/:sub_id",
        element: <EditSubService />,
        hidden: true
    },
    {
        href: "/service/:id/sub/add",
        element: <AddSubServicePage />,
        hidden: true
    },
    {
        href: "/service/:id/sub/:sub_id/banner/add",
        element: <AddSubServiceBanner />,
        hidden: true
    },
    {
        href: "/service/:id/sub/:sub_id/banner/:banner_id",
        element: <EditSubServiceBanner />,
        hidden: true
    },
    {
        href: "/service/:id/sub/:sub_id/benefit/add",
        element: <AddSubServiceBenfit />,
        hidden: true
    },
    {
        href: "/service/:id/sub/:sub_id/benefit/:benefit_id",
        element: <EditSubServiceBenfit />,
        hidden: true
    },
    {
        href: "/service/:id/sub/:sub_id/benefit/:benefit_id/sub/add",
        element: <AddSubServiceSubBenfit />,
        hidden: true
    },
    {
        href: "/service/:id/sub/:sub_id/benefit/:benefit_id/sub/:sub_benefit_id",
        element: <EditSubServiceSubBenfit />,
        hidden: true
    },
   
    // {
    //     name: "ServiceBenefit",
    //     element: <ServiceBenefitPage />,
    //     icon: <BiSolidCategory />,
    //     href: "/service/benefit",
    // },
    {
        href: "/service/:id/benefit/:benefit_id",
        element: <EditServiceBenefit />,
        hidden: true
    },
    {
        href: "/service/:id/benefit/add",
        element: <AddServiceBenefitPage />,
        hidden: true
    },

    {
        name: "Setting",
        element: <SettingPage />,
        icon: <SettingFilled />,
        href: "/setting",
    },
 

];
