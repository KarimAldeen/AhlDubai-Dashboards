
import React from 'react'
import { Col, Row } from 'reactstrap';
import ValidationField from '../../../../Components/ValidationField/ValidationField';
import { useFormikContext } from 'formik';

import { useTranslation } from 'react-i18next';
import { langauge_field_genrater, langauge_field_genrater_file } from '../../../../Hooks/useLanguageGenrater';
import { useGetService } from '../../../../api/Service';
import useFormatToSelect from '../../../../Hooks/useFormatToSelect';

function Form() {
  const formik = useFormikContext<any>();
  const {data} = useGetService()
  const service_select_data = useFormatToSelect(data?.data) as any



  return (
    <Row xs={1} sm={1} md={2} lg={2} xl={2}>
    <Col>
    {langauge_field_genrater_file(["image"],"File")}
    
    </Col>
   
   
   
  </Row>
  )
}

export default Form


