
import React from 'react'
import { Col, Row } from 'reactstrap';
import ValidationField from '../../../../Components/ValidationField/ValidationField';
import { useFormikContext } from 'formik';

import { DatePicker } from 'antd';
import { useTranslation } from 'react-i18next';
import { langauge_field_genrater } from '../../../../Hooks/useLanguageGenrater';
import useFormatToSelect from '../../../../Hooks/useFormatToSelect';
import { useGetService } from '../../../../api/Service';

function Form() {
  const formik = useFormikContext<any>();
  const [t] = useTranslation()
 

  return (
    <Row xs={1} sm={1} md={2} lg={2} xl={2}>
    <Col>
    {langauge_field_genrater(["name"])}
    

  
    </Col>
    <Col>


    </Col>



   
  </Row>
  )
}

export default Form


