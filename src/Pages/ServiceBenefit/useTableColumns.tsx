
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { useNavigate } from "react-router-dom";
import { useDeleteBenefit } from "../../api/benefit";
import { usePageState } from "../../lib/state mangment/LayoutPagestate";
import { convert_language_array_to_local } from "../../utils/language/ConvertObjectToLocalLanguage";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteBenefit()
  const navigate = useNavigate()
  const { setObjectToEdit, objectToEdit } = usePageState()
  function handelEdit(row:any){
    setObjectToEdit(row)
     navigate(`edit`)
  }


  


  return useMemo(
    () => [
 
      {
        name: t("service_id"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.service_id
      },
      {
        name: t("name"),
        sortable: false,
        center: "true",
        
        cell: (row:any) =>  convert_language_array_to_local(row?.language, "name")
      },
     
      
    
      {
        name: "#",
        sortable: false,
        center: true,
        cell: (row:any) => (
          <Actions
            objectToEdit={row}
            
            onEdit={()=> handelEdit(row) }
            showView={false}
            showEdit={false}
            onDelete={() => deleteMutation.mutate({ id: row.id })}
          />
        ),
      },
   
    ],
    [t]
  );
};

export default useTableColumns;

