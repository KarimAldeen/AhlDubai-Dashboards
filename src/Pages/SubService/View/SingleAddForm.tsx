
import React from 'react'
import { Col, Row } from 'reactstrap';
import ValidationField from '../../../Components/ValidationField/ValidationField';
import { useFormikContext } from 'formik';

import { useTranslation } from 'react-i18next';
import { langauge_field_genrater } from '../../../Hooks/useLanguageGenrater';
import { useGetService } from '../../../api/Service';
import useFormatToSelect from '../../../Hooks/useFormatToSelect';

function SingleAddForm() {
  const formik = useFormikContext<any>();
  const [t] = useTranslation();
  const {data} = useGetService()    
  const SelectData = useFormatToSelect(data,"title")

  


  return (
    <Row xs={1} sm={1} md={2} lg={2} xl={2}>
    <Col>
    {langauge_field_genrater(["name"])}
    

  
    </Col>
    <Col>
    <ValidationField name="price"  />
    <ValidationField name="whatsapp_view" />
    <ValidationField name="service_id" type='Select' option={SelectData} />

    </Col>
    


   
  </Row>
  )
}

export default SingleAddForm


