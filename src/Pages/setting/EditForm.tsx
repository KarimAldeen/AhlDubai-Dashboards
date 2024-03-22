
import React from 'react'
import { Col, Row } from 'reactstrap';
import ValidationField from '../../Components/ValidationField/ValidationField';
import { ColorPicker, Space } from 'antd';
import { useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';
import type { ColorPickerProps, GetProp } from 'antd';

function Form() {

  const fontFamily = [
    {label:"Poppins",value:"Poppins"},
    {label:"Tajawal",value:"Tajawal"},
    {label:"OpenSans",value:"OpenSans"},
    {label:"Inter",value:"Inter"},
    {label:"FACEBOLF",value:"FACEBOLF"}
    

    // const fontarry = ["Poppins,Tajawal,OpenSans,Inter,FACEBOLF"]

  ]

  type Color = GetProp<ColorPickerProps, 'value'>;

  const formik = useFormikContext<any>()
  const handelchange = (value: Color, hex: string)=>{
    console.log(hex);
    
    formik.setFieldValue("primary_color",hex)
  }
  const handelchangesecondary = (value: Color, hex: string)=>{
    console.log(hex);
    
    formik.setFieldValue("secondary_color",hex)
  }
  const [t] = useTranslation()

  return (
    <Row xs={1} sm={1} md={2} lg={2} xl={2}>
 
      <Col>
   
        <ValidationField name="logo" type="File" />

      </Col>
      <Col>

{/* <ValidationField name="primary_color" />
  <ValidationField name="secondary_color" /> */}
        <ValidationField name="font_family" type='Select' option={fontFamily} />

<Space className='mt-3'direction='vertical' >
<ColorPicker
  value={formik.values?.primary_color}
  showText={(color) => <span>{t("primary_color")} ({color.toHexString()})</span>}
  onChange={handelchange}
  className=' '
  format='hex'
  size='large'
  
/>

   <ColorPicker
  value={formik.values?.secondary_color}
  showText={(color) => <span>{t("secondary_color")} ({color.toHexString()})</span>}
  onChange={handelchangesecondary}
  className=''
  format='hex'
  size='large'
/>
</Space>


</Col>
    </Row>
  )
}

export default Form


