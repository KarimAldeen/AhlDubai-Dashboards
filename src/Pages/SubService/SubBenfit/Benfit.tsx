import React from 'react'
import DashBody from '../../../Layout/Dashboard/DashBody'
import { useGetSubService } from '../../../api/subServices'
import { QueryStatusEnum } from '../../../config/QueryStatus';
import LyTable from '../../../Layout/Dashboard/LyTable';
import useTableColumns from './useTableColumn';
import { useGetBenefit } from '../../../api/benefit';
import { useGetSubBenefit } from '../../../api/subBenefit';
import { usePageState } from '../../../lib/state mangment/dist/LayoutPagestate';
import { useNavigate, useParams } from 'react-router-dom';
import AddButton from '../../../Layout/Dashboard/AddButton/AddButton';
import DashHeader from '../../../Layout/Dashboard/DashHeader';
import { useGetSubServiceSubBenefit } from '../../../api/SubServiceSubBenfit';

function Benefit() {

  const {benefit_id} = useParams()
  const { data, status } = useGetSubServiceSubBenefit({sub_service_benefit_id:benefit_id});

  const columns = useTableColumns()
  console.log(data);
  const { setObjectToEdit, objectToEdit } = usePageState()
  const navigate = useNavigate()
  function handelAdd() {
    setObjectToEdit(null)
    navigate('sub/add')
  }

  return (

    <DashBody status={status as QueryStatusEnum}>
        <DashHeader showAddButton={false} title={'sub_Benefit'}>
      <div className='RightSide d-flex gap-2 align-center '>
     {/* <SearchField searchBy={"title"} /> */}

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