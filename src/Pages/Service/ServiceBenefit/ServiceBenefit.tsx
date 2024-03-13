import React from 'react'
import DashBody from '../../../Layout/Dashboard/DashBody'
import { useGetSubService } from '../../../api/subServices'
import { QueryStatusEnum } from '../../../config/QueryStatus';
import LyTable from '../../../Layout/Dashboard/LyTable';
import useTableColumns from './useTableColumn';
import { useGetBenefit } from '../../../api/benefit';

function ServiceBenefit() {

    const {data , status} = useGetBenefit();

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

export default ServiceBenefit