
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import AddButton from '../../Layout/Dashboard/AddButton/AddButton'
import { useGetSubService } from '../../api/subServices'
import SearchField from '../../Layout/Dashboard/SearchField'

 function Page() {

    const column   =useTableColumns()
    const {data  ,status } = useGetSubService()
    const [t] = useTranslation()
    const navigate = useNavigate()
    const totalRows = data?.pagination?.total;
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader showAddButton={false} title={'SubServices'}>
      <div className='RightSide d-flex gap-2 align-center '>
     <SearchField searchBy={"name"} />

     <AddButton  onClick={()=>navigate('add')}></AddButton>
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

