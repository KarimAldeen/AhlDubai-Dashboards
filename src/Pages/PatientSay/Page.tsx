
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
import { useGetDoctors } from '../../api/Doctors'
import { useGetPatientSay } from '../../api/PatientSay'
import { usePageState } from '../../lib/state mangment/dist/LayoutPagestate'

 function Page() {

    const column   =useTableColumns ()
    const {data  ,status } = useGetPatientSay()
    const [t] = useTranslation()
    const navigate = useNavigate()
    console.log(data);
    const { setObjectToEdit, objectToEdit } = usePageState()

    function handelAdd(){
      setObjectToEdit(null)
      navigate('add')
    } 
    
  return (
    // Pass Status to Layout 
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader showAddButton={false} title={'PatientSay'}>
      <div className='RightSide d-flex gap-2 align-center '>
     {/* <SearchField searchBy={"title"} /> */}

     <AddButton  onClick={()=>navigate('add')}></AddButton>
     </div>
      </DashHeader>
      
      <LyTable
        data={data}
        isLoading={false}
        columns={column}
        
        is_pagination={false}
    />
      
    
    </DashBody>
  )
}

export default Page

