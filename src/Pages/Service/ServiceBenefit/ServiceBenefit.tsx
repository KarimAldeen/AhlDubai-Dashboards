import React from 'react'
import DashBody from '../../../Layout/Dashboard/DashBody'
import { useGetSubService } from '../../../api/subServices'
import { QueryStatusEnum } from '../../../config/QueryStatus';
import LyTable from '../../../Layout/Dashboard/LyTable';
import useTableColumns from './useTableColumn';
import { useGetBenefit } from '../../../api/benefit';
import { usePageState } from '../../../lib/state mangment/dist/LayoutPagestate';
import AddButton from '../../../Layout/Dashboard/AddButton/AddButton';
import { useNavigate, useParams } from 'react-router-dom';
import DashHeader from '../../../Layout/Dashboard/DashHeader';

function ServiceBenefit() {

  const {id} = useParams()
  const { data, status } = useGetBenefit({service_id:id});

  const columns = useTableColumns()
  const { setObjectToEdit, objectToEdit } = usePageState()
  const navigate = useNavigate()
  function handelAdd() {
    setObjectToEdit(null)
    navigate('benefit/add')
  }

  return (

    <DashBody status={status as QueryStatusEnum}>
      <DashHeader showAddButton={false} title={'ServiceBenefit'}>
        <div className='RightSide d-flex gap-2 align-center '>
          {/* <SearchField searchBy={"title"} /> */}

          <AddButton onClick={() => handelAdd()}></AddButton>
        </div>
      </DashHeader>
      <LyTable

        data={data}
        columns={columns}

      />
    </DashBody>
  )
}

export default ServiceBenefit