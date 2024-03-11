
import React from 'react'
import { Col, Row } from 'reactstrap';
import ValidationField from '../../../Components/ValidationField/ValidationField';
import { useFormikContext } from 'formik';

import { DatePicker } from 'antd';
import { useTranslation } from 'react-i18next';

function Form() {
  const formik = useFormikContext<any>();
  const [t] = useTranslation()

  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
    
    <Col>
      <ValidationField name="image" type="File" />

    </Col>
    <Col>
    <ValidationField name="title"  />

    </Col>
   
  </Row>
  )
}

export default Form


