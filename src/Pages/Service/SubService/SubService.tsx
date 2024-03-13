import React from 'react'
import DashBody from '../../../Layout/Dashboard/DashBody'
import { useGetSubService } from '../../../api/subServices'
import { QueryStatusEnum } from '../../../config/QueryStatus';
import LyTable from '../../../Layout/Dashboard/LyTable';
import useTableColumns from './useTableColumn';
import DashHeader from '../../../Layout/Dashboard/DashHeader';
import AddButton from '../../../Layout/Dashboard/AddButton/AddButton';
import { useNavigate } from 'react-router-dom';
import { usePageState } from '../../../lib/state mangment/dist/LayoutPagestate';

function SubService() {

    const {data , status} = useGetSubService();

    const columns  = useTableColumns()
    
    const navigate = useNavigate()
    const { setObjectToEdit, objectToEdit } = usePageState()

    function handelAdd(){
      setObjectToEdit(null)
      navigate('add')
    } 
  return (

    <DashBody status={status as QueryStatusEnum}>
 <DashHeader showAddButton={false} title={'SubService'}>
      <div className='RightSide d-flex gap-2 align-center '>

     <AddButton  onClick={()=>navigate('/service/sub/add')}></AddButton>
     </div>
      </DashHeader>
        <LyTable

        data={data}
        columns={columns}

        />
    </DashBody>
    )
}

export default SubService