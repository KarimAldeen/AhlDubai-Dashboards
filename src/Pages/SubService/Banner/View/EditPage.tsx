import React, { useEffect, useState } from 'react'
import { getInitialValues, getDataToSend } from './formUtil'
import { Tab, TabList, TabPanel as TabBody, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import { MdLanguage } from 'react-icons/md'
import { FaSadCry } from 'react-icons/fa'
import ViewPage from '../../../../Layout/Dashboard/ViewPage';
import { Rate } from 'antd';
import { usePageState } from '../../../../lib/state mangment/LayoutPagestate';
import { useParams } from 'react-router-dom';
import LoadingPage from '../../../../Layout/app/LoadingPage';
import { useTranslation } from 'react-i18next';
import { BsInfoCircle } from 'react-icons/bs';
import {  useUpdateSubBanner } from '../../../../api/subBanner';
import useNavigateOnSuccess from '../../../../Hooks/useNavigateOnSuccess';
import Form from './EditForm';

const EditPage = () => {
  const { setObjectToEdit, objectToEdit } = usePageState()
  const {t} = useTranslation();
  const {id} = useParams()

  const {mutate ,isSuccess} = useUpdateSubBanner()
  const handleSubmit = (values:any)=>{
  

    return mutate(getDataToSend({
      ...values ,
    }));
  }

  useNavigateOnSuccess(isSuccess , '/service')





   const getValidationSchema = () => {
    return null
  };


  const ViewProps = { getInitialValues, getValidationSchema, getDataToSend, handleSubmit };


  return (
    <div className='ViewPage'>
      {objectToEdit ?
        <ViewPage {...ViewProps}>
          <Tabs>
            <TabList>
              <Tab><div className='SignleDriverContainer'><span className='SignleDriverInfoIcon'><MdLanguage size={20} /></span> <h6 className='SingleDriverInfo'>{t("BasicInfo")}</h6></div></Tab>

            </TabList>
            <TabBody >
              <div className=" mt-4"><Form /></div>
            </TabBody>
         
    
          </Tabs>
        </ViewPage>
        : <LoadingPage />}


    </div>
  )

}

export default EditPage