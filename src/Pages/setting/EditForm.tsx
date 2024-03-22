
import React from 'react'
import { Col, Row } from 'reactstrap';
import ValidationField from '../../Components/ValidationField/ValidationField';
function Form() {

  const fontFamily = [
    {label:"Poppins",value:"Poppins"},
    {label:"Tajawal",value:"Tajawal"},
    {label:"OpenSans",value:"OpenSans"},
    {label:"Inter",value:"Inter"},
    {label:"FACEBOLF",value:"FACEBOLF"}
    

    // const fontarry = ["Poppins,Tajawal,OpenSans,Inter,FACEBOLF"]

  ]
  return (
    <Row xs={1} sm={1} md={2} lg={2} xl={2}>
      <Col>

      <ValidationField name="primary_color" />
        <ValidationField name="secondary_color" />

 
      </Col>
      <Col>
   
      <ValidationField name="font_family" type='Select' option={fontFamily} />
        <ValidationField name="logo" type="File" />

      </Col>
    </Row>
  )
}

export default Form


