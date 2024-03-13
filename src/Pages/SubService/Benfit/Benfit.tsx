import React from 'react'
import DashBody from '../../../Layout/Dashboard/DashBody'
import { useGetSubService } from '../../../api/subServices'
import { QueryStatusEnum } from '../../../config/QueryStatus';
import LyTable from '../../../Layout/Dashboard/LyTable';
import useTableColumns from './useTableColumn';
import { useGetBenefit } from '../../../api/benefit';
import { useGetSubBenefit } from '../../../api/subBenefit';

function Benefit() {

    const {data , status} = useGetSubBenefit();

    const columns  = useTableColumns()
    console.log(data);
    
  return (

    <DashBody status={status as QueryStatusEnum}>

        <LyTable

        data={data}
        columns={columns}

        />
    </DashBody>
    )
}

export default Benefit