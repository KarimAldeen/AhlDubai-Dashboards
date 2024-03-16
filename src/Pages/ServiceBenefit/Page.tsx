
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import AddButton from '../../Layout/Dashboard/AddButton/AddButton'
import { useGetBenefit } from '../../api/benefit'
import SearchField from '../../Layout/Dashboard/SearchField'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'

 function Page() {

    const column   =useTableColumns()
    const {data  ,status } = useGetBenefit()
    const [t] = useTranslation()
    const navigate = useNavigate()
    const totalRows = data?.pagination?.total;
    const { setObjectToEdit, objectToEdit } = usePageState()

      function handelAdd(){
        setObjectToEdit(null)
        navigate('add')
      } 
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader showAddButton={false} title={'ServiceBenefit'}>
      <div className='RightSide d-flex gap-2 align-center '>
     <SearchField searchBy={"name"} />

     <AddButton  onClick={()=>handelAdd}></AddButton>
     </div>
      </DashHeader>
      
      <LyTable
        data={data?.data}
        isLoading={false}
        columns={column}
        total={totalRows }
        is_pagination={true}
    />
      
    
    </DashBody>
  )
}

export default Page

