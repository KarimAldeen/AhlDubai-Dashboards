import React, { useEffect, useState } from 'react'
import { getInitialValues, getValidationSchema, getDataToSend } from './formUtil'
import { Tab, TabList, TabPanel as TabBody, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import { MdLanguage } from 'react-icons/md'
import ViewPage from '../../../../Layout/Dashboard/ViewPage';
import { useTranslation } from 'react-i18next';
import { BsInfoCircle } from 'react-icons/bs';
import useNavigateOnSuccess from '../../../../Hooks/useNavigateOnSuccess';
import { useAddSubBanner } from '../../../../api/subBanner';
import Form from './AddForm';
import { useParams } from 'react-router-dom';
import { usePageState } from '../../../../lib/state mangment/dist/LayoutPagestate';

const AddBannerPage = () => {
    

    const {mutate , isLoading , isSuccess} = useAddSubBanner()
    const {sub_id} = useParams()
  const handleSubmit = (values:any)=>{
      console.log(values,"values");
      
      return mutate(getDataToSend({
        ...values ,
        sub_service_id:sub_id
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

export default AddBannerPage