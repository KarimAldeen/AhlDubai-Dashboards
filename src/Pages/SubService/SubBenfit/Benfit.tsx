import React from 'react'
import DashBody from '../../../Layout/Dashboard/DashBody'
import { useGetSubService } from '../../../api/subServices'
import { QueryStatusEnum } from '../../../config/QueryStatus';
import LyTable from '../../../Layout/Dashboard/LyTable';
import useTableColumns from './useTableColumn';
import { useGetBenefit } from '../../../api/benefit';
import { useGetSubBenefit } from '../../../api/subBenefit';
import { usePageState } from '../../../lib/state mangment/dist/LayoutPagestate';
import { useNavigate } from 'react-router-dom';
import AddButton from '../../../Layout/Dashboard/AddButton/AddButton';
import DashHeader from '../../../Layout/Dashboard/DashHeader';

function Benefit() {

  const { data, status } = useGetSubBenefit();

  const columns = useTableColumns()
  console.log(data);
  const { setObjectToEdit, objectToEdit } = usePageState()
  const navigate = useNavigate()
  function handelAdd() {
    setObjectToEdit(null)
    navigate('add')
  }

  return (

    <DashBody status={status as QueryStatusEnum}>
        <DashHeader showAddButton={false} title={'Service'}>
      <div className='RightSide d-flex gap-2 align-center '>
     {/* <SearchField searchBy={"title"} /> */}

     <AddButton  onClick={()=>handelAdd}></AddButton>
     
     </div>
      </DashHeader>
     
      <LyTable

        data={data}
        columns={columns}

      />
    </DashBody>
  )
}

export default Benefit