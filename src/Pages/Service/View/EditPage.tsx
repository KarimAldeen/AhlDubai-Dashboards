import React, { useEffect, useState } from 'react'
import { getInitialValues, getDataToSend } from '../formUtil'
import { Tab, TabList, TabPanel as TabBody, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import { MdLanguage } from 'react-icons/md'
import { FaSadCry } from 'react-icons/fa'
import ViewPage from '../../../Layout/Dashboard/ViewPage';
import { Rate } from 'antd';
import { usePageState } from '../../../lib/state mangment/LayoutPagestate';
import { useParams } from 'react-router-dom';
import LoadingPage from '../../../Layout/app/LoadingPage';
import { useTranslation } from 'react-i18next';
import { BsInfoCircle } from 'react-icons/bs';
import {  useGetOneService, useUpdateService } from '../../../api/Service';
import useNavigateOnSuccess from '../../../Hooks/useNavigateOnSuccess';
import Form from './EditForm';
import SubService from '../SubService/SubService';
import ServiceBenefit from '../ServiceBenefit/ServiceBenefit';

const EditPage = () => {
  const {t} = useTranslation();
  const {mutate ,isSuccess} = useUpdateService()
  const {id} = useParams()
  
  const {data:objectToEdit , isLoading} = useGetOneService({service_id:id})

  
  const handleSubmit = (values:any)=>{
  
    const newData = {} as any;

    values['elemnt_type'] = 'big'
    
    
    return mutate(getDataToSend({
      ...values
    }));
  }

  useNavigateOnSuccess(isSuccess , '/Service')





    if(isLoading){
      return <LoadingPage/>
    }

   const getValidationSchema = () => {
    return null
  };


  const ViewProps = { getInitialValues, getValidationSchema, getDataToSend, handleSubmit ,objectToEdit };


  return (
    <div className='ViewPage'>
      {objectToEdit ?
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
              <div className=" mt-4"><SubService /></div>
            </TabBody>
            <TabBody >
              <div className=" mt-4"><ServiceBenefit /></div>
            </TabBody>
          </Tabs>
        </ViewPage>
        : <LoadingPage />}


    </div>
  )

}

export default EditPage