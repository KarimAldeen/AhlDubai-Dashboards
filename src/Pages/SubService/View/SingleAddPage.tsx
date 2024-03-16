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
import Form from './SingleAddForm';
import { useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Benefit from '../Benfit/Benfit';
import { usePageState } from '../../../lib/state mangment/LayoutPagestate';

const SingleAddPage = () => {
    

    const {mutate , isLoading , isSuccess} = useAddSubService()
    const {id} = useParams()

  const handleSubmit = (values:any)=>{
      
      return mutate(getDataToSend({
        ...values ,
      }));
  
    }
  const {t} = useTranslation();

  useNavigateOnSuccess(isSuccess , '/service'  )
  const { setObjectToEdit, objectToEdit } = usePageState()

useEffect(() => {
  
    setObjectToEdit(null)

}, [])


  const ViewProps = { getInitialValues, getValidationSchema, getDataToSend, handleSubmit };


  return (
    <div className='ViewPage'>
  
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
        


    </div>
  )

}

export default SingleAddPage