
import React from 'react'
import { Col, Row } from 'reactstrap';
import ValidationField from '../../../Components/ValidationField/ValidationField';
import { useFormikContext } from 'formik';

import { DatePicker } from 'antd';
import { useTranslation } from 'react-i18next';
import { langauge_field_genrater } from '../../../Hooks/useLanguageGenrater';

function Form() {
  const formik = useFormikContext<any>();
  const [t] = useTranslation()

  return (
    <Row xs={1} sm={1} md={2} lg={3} xl={3}>
      <Col>
    <ValidationField name="social_media_image" type="File" />



    </Col>
    <Col>

    <ValidationField 
      name='social_media_link'
      type='text'
      />

    </Col>


   
  </Row>
  )
}

export default Form


