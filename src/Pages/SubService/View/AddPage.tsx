import React, { useEffect, useState } from 'react'
import { getInitialValues, getValidationSchema, getDataToSend } from '../formUtil'
import { Tab, TabList, TabPanel as TabBody, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import { MdLanguage } from 'react-icons/md'
import ViewPage from '../../../Layout/Dashboard/ViewPage';
import { useTranslation } from 'react-i18next';
import { BsInfoCircle } from 'react-icons/bs';
import useNavigateOnSuccess from '../../../Hooks/useNavigateOnSuccess';
import { useAddSubService } from '../../../api/subServices';
import Form from './AddForm';
import { useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Benefit from '../Benfit/Benfit';

const AddSubServicesPage = () => {
    

    const {mutate , isLoading , isSuccess} = useAddSubService()
    const {id} = useParams()

  const handleSubmit = (values:any)=>{
      console.log(values,"values");
      
      return mutate(getDataToSend({
        ...values ,
        service_id:id
      }));
  
    }
  const {t} = useTranslation();

  useNavigateOnSuccess(isSuccess , '/service'  )
  


  const ViewProps = { getInitialValues, getValidationSchema, getDataToSend, handleSubmit };


  return (
    <div className='ViewPage'>
  
        <ViewPage {...ViewProps}>
        <ViewPage {...ViewProps}>
            <Tabs>
            <TabList>
              <Tab><div className='SignleDriverContainer'><span className='SignleDriverInfoIcon'><MdLanguage size={20} /></span> <h6 className='SingleDriverInfo'>{t("BasicInfo")}</h6></div></Tab>
              <Tab><div className='SignleDriverContainer'><span className='SignleDriverInfoIcon'><MdLanguage size={20} /></span> <h6 className='SingleDriverInfo'>{t("SubService")}</h6></div></Tab>
              <Tab><div className='SignleDriverContainer'><span className='SignleDriverInfoIcon'><MdLanguage size={20} /></span> <h6 className='SingleDriverInfo'>{t("ServiceBenefit")}</h6></div></Tab>

            </TabList>
            <TabBody >
              <div className=" mt-4"><Form /></div>
            </TabBody>
         
            <TabBody >
              <div className=" mt-4"><Banner /></div>
            </TabBody>
            <TabBody >
              <div className=" mt-4"><Benefit /></div>
            </TabBody>
          </Tabs>
        </ViewPage>
        </ViewPage>
        


    </div>
  )

}

export default AddSubServicesPage