import React from "react";
import StatisticsCard from "../../Components/Ui/StaticsCard/StaticCard";
import { FaProductHunt, FaRedRiver, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Card, Col, Row } from "reactstrap";
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart3 } from "react-icons/bs";
import Chart from "./Chart";
import { CgWebsite } from "react-icons/cg";
import { useGetHome } from "../../api/home";
import LastUserTable from "./tables/LastUser/LastUserTable";
import LastWhatsappClickTable from "./tables/LastWhatsappClick/LastWhatsappClickTable";
import { BiSolidCategory } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";

export default function HomePage() {
  const { t } = useTranslation();
  
  const {data} = useGetHome()
  console.log(data);
  
  const cardsData = [
    {
      icon: <FaUserDoctor className="warning" size={20} />,
      count: data?.doctor_count, // Example count
      pathWhenClick: '/',
      titleKey: "doctor_count",
      contentKey: "doctor_in_your_Application"
    },
    {
      icon: <BiSolidCategory className="warning" size={20} />,
      count: data?.service_count, // Example count
      pathWhenClick: "/",
      titleKey: "service",
      contentKey: "service_in_your_Application"
    },
    {
      icon: <FaProductHunt className="warning" size={20} />,
      count: data?.patient_count, // Example count
      pathWhenClick: "/",
      titleKey: "patient_say",
      contentKey: "patient_in_your_Application"
    },
    {
      icon: <CgWebsite className="warning" size={20} />,
      count: data?.user_visit_website_count, // Example count
      pathWhenClick: "/",
      titleKey: "user",
      contentKey: "user_visit_website_count"
    },
    {
      icon: <FaWhatsapp className="warning" size={20} />,
      count: data?.user_whatsapp_click_count, // Example count
      pathWhenClick: "/",
      titleKey: "user",
      contentKey: "user_whatsapp_click_count"
    }
  ];

  return (
    <>
      <Row xs={1} sm={1} md={1} lg={3} xl={3}>
        {cardsData.map((card, index) => (
          <Col key={index} style={{ padding: "0.5rem" }}>
            <div style={{ cursor: "pointer" }}>
              <StatisticsCard
                pathWhenClick={card.pathWhenClick}
                icon={card.icon}
                count={`${card.count ?? 1}`}
                CardContent={t(`You_have`) + "  " + ((card.count) ?? 1) + "  " + t(card.contentKey)}
                CardTitle={t(card.titleKey)}
              />
            </div>
          </Col>
        ))}
      </Row>

          <Row>
          <Col>
            <LastUserTable
              data={data?.last_user_visit_website}
          />
          </Col>
          <Col>
            <LastWhatsappClickTable
                  data={data?.last_user_whatsapp_click}
            />
           </Col>
          </Row>
       
      <Row xs={1} sm={1} md={1} lg={2} xl={2} style={{ margin: "30px 0 " }}>
        <Chart dataMonth={data?.getMonthlyData}/>
      </Row>
    </>
  );
}
