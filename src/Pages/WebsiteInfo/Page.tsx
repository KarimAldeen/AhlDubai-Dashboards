
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import AddButton from '../../Layout/Dashboard/AddButton/AddButton'
import { useGetPartners } from '../../api/Partners'
import SearchField from '../../Layout/Dashboard/SearchField'
import { useGetDoctors } from '../../api/Doctors'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'
import { useGetWebsiteInfo } from '../../api/WebsiteInfo'
import { QueryCache } from 'react-query'
import { useGetService } from '../../api/Service'

 function Page() {

    const column   =useTableColumns()
  
    
    const {data  ,status } = useGetWebsiteInfo()
    const [t] = useTranslation()
    const navigate = useNavigate()

    const { setObjectToEdit, objectToEdit } = usePageState()

    function handelAdd(){
      
      setObjectToEdit(null)
      navigate('add')
    } 
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader showAddButton={false} title={'WebsiteInfo'}>
      <div className='RightSide d-flex gap-2 align-center '>
     {/* <SearchField searchBy={"title"} /> */}

     <AddButton  onClick={handelAdd}></AddButton>
     </div>
      </DashHeader>
      
      <LyTable
        data={data}
        isLoading={false}
        columns={column}
        is_pagination={false}
    />
      
    
    </DashBody>
  )
}

export default Page

