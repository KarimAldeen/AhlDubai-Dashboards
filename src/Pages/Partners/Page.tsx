
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
import { usePageState } from '../../lib/state mangment/dist/LayoutPagestate'

 function Page() {

    const column   =useTableColumns()
    const {data  ,status } = useGetPartners()
    const [t] = useTranslation()
    const navigate = useNavigate()
    const { setObjectToEdit} = usePageState()
    const totalRows = data?.pagination?.total;
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader showAddButton={false} title={'Partners'}>
      <div className='RightSide d-flex gap-2 align-center '>
     <SearchField searchBy={"title"} />

     <AddButton  onClick={()=>{
      setObjectToEdit(null)
      navigate('add')
      }}></AddButton>
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

