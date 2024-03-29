
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
    <Row xs={1} sm={1} md={2} lg={2} xl={2}>
      <Col>
        <ValidationField
        name='elemnt_type'
        type='Select'
        option={[
          {label:"big" , value:"big"},
          {label:"small" , value:"small"}

        ]}

        />

        {langauge_field_genrater(["title"])}
        <ValidationField name="sub_image" type="File" />
      </Col>
      <Col>
        {langauge_field_genrater(["sub_title"])}
        <ValidationField name="image" type="File" />
      </Col>
    </Row>
  )
}

export default Form


