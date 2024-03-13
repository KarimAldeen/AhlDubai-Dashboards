import React from 'react'
import DashBody from '../../../Layout/Dashboard/DashBody'
import { useGetSubService } from '../../../api/subServices'
import { QueryStatusEnum } from '../../../config/QueryStatus';
import LyTable from '../../../Layout/Dashboard/LyTable';
import useTableColumns from './useTableColumn';
import { useGetSubBanner } from '../../../api/subBanner';
import { usePageState } from '../../../lib/state mangment/dist/LayoutPagestate';
import { useNavigate } from 'react-router-dom';
import AddButton from '../../../Layout/Dashboard/AddButton/AddButton';

function Banner() {

    const {data , status} = useGetSubBanner();

    const columns  = useTableColumns()
    console.log(data);
          const { setObjectToEdit, objectToEdit } = usePageState()
    const navigate = useNavigate()
    function handelAdd(){
      setObjectToEdit(null)
      navigate('add')
    } 
    
  return (

    <DashBody status={status as QueryStatusEnum}>
  <div className='RightSide d-flex gap-2 align-center '>
     {/* <SearchField searchBy={"title"} /> */}

     <AddButton  onClick={()=>handelAdd}></AddButton>
     </div>
        <LyTable

        data={data}
        columns={columns}

        />
    </DashBody>
    )
}

export default Banner