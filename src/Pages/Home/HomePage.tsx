import React from "react";
import StatisticsCard from "../../Components/Ui/StaticsCard/StaticCard";
import { FaRedRiver } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Card, Col, Row } from "reactstrap";
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart3 } from "react-icons/bs";
import Chart from "./Chart";

export default function HomePage() {
  const { t } = useTranslation();
  
  const cardsData = [
    {
      icon: <FaRedRiver className="warning" size={24} />,
      count: 20, // Example count
      pathWhenClick: "products",
      titleKey: "products",
      contentKey: "Product_in_your_Application"
    },
    {
      icon: <AiOutlineUser className="warning" size={24} />,
      count: 20, // Example count
      pathWhenClick: "categories",
      titleKey: "categories",
      contentKey: "categories_in_your_Application"
    },
    {
      icon: <BsCart3 className="warning" size={24} />,
      count: 20, // Example count
      pathWhenClick: "order",
      titleKey: "order",
      contentKey: "Order_in_your_Application"
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

      <Row xs={1} sm={1} md={1} lg={2} xl={2} style={{ margin: "30px 0 " }}>
        <Chart />
      </Row>
    </>
  );
}
