import React from 'react'
import DashBody from '../../../Layout/Dashboard/DashBody'
import { useGetSubService } from '../../../api/subServices'
import { QueryStatusEnum } from '../../../config/QueryStatus';
import LyTable from '../../../Layout/Dashboard/LyTable';
import useTableColumns from './useTableColumn';
import { useGetBenefit } from '../../../api/benefit';
import { useGetSubBenefit } from '../../../api/subBenefit';
import AddButton from '../../../Layout/Dashboard/AddButton/AddButton';
import { useNavigate, useParams } from 'react-router-dom';
import { usePageState } from '../../../lib/state mangment/dist/LayoutPagestate';
import DashHeader from '../../../Layout/Dashboard/DashHeader';

function Benefit() {

  const {sub_id} = useParams()
    const {data , status} = useGetSubBenefit({sub_service_id:sub_id});

    const columns  = useTableColumns()
    const { setObjectToEdit, objectToEdit } = usePageState()
    const navigate = useNavigate()
    function handelAdd(){
      setObjectToEdit([])
      console.log(objectToEdit);
      
      navigate('benefit/add')
    } 
    
  return (

    <DashBody status={status as QueryStatusEnum}>
  <DashHeader showAddButton={false} title={'ServiceBenefit'}>
      <div className='RightSide d-flex gap-2 align-center '>

     <AddButton  onClick={()=>handelAdd()}></AddButton>
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