
import React from 'react'
import DashBody from '../../Layout/Dashboard/DashBody'
import DashHeader from '../../Layout/Dashboard/DashHeader'
import LyTable from '../../Layout/Dashboard/LyTable'
import useTableColumns from './useTableColumns'
import { QueryStatusEnum } from '../../config/QueryStatus'
import { useNavigate } from 'react-router-dom'
import AddButton from '../../Layout/Dashboard/AddButton/AddButton'
import { useGetService } from '../../api/Service'
import { usePageState } from '../../lib/state mangment/LayoutPagestate'


 function Page() {
    
    const column   =useTableColumns()
    const {data  ,status } = useGetService()
    const navigate = useNavigate()
    const { setObjectToEdit } = usePageState()

      function handelAdd(){
        setObjectToEdit(null)
        navigate('add')
      } 
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader showAddButton={false} title={'Service'}>
      <div className='RightSide d-flex gap-2 align-center '>
     {/* <SearchField searchBy={"title"} /> */}

     <AddButton  onClick={()=>handelAdd()}></AddButton>
     </div>
      </DashHeader>
      
      <LyTable
        data={data}
        isLoading={false}
        columns={column}
        // total={totalRows }
        is_pagination={false}
    />
      
    
    </DashBody>
  )
}

export default Page

