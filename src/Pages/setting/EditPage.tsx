import { getInitialValues,getValidationSchema } from './formUtil'
import { Tab, TabList, TabPanel as TabBody, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import { MdLanguage } from 'react-icons/md'
import ViewPage from '../../Layout/Dashboard/ViewPage';

import LoadingPage from '../../Layout/app/LoadingPage';
import { useTranslation } from 'react-i18next';
import Form from './EditForm';
import { useGetHomeSetting, useUpdateHomeSetting } from '../../api/setting';
import { useEffect } from 'react';
import { usePageState } from '../../lib/state mangment/dist/LayoutPagestate';

const EditPage = () => {
  const {t} = useTranslation();
  const {mutate} = useUpdateHomeSetting()

  const {data:objectToEdit , isLoading} = useGetHomeSetting()

    
  const handleSubmit = (values:any)=>{
  
    console.log(values);
    return mutate({
      ...values
    });
  }

  const { setObjectToEdit } = usePageState()

  useEffect(() => {
    setObjectToEdit(objectToEdit?.data)

  }, [objectToEdit?.data,setObjectToEdit])
  





    if(isLoading){
      return <LoadingPage/>
    }

  const ViewProps = { getInitialValues, getValidationSchema, handleSubmit ,objectToEdit };


  return (
    <div className='ViewPage'>
      {objectToEdit?.data ?
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