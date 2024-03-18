
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDeleteSubService } from "../../../api/subServices";
import { usePageState } from "../../../lib/state mangment/LayoutPagestate";
import { useNavigate, useParams } from "react-router-dom";
import ColumnsImage from "../../../Components/Columns/ColumnsImage";
import { convert_language_array_to_local } from "../../../utils/language/ConvertObjectToLocalLanguage";
import Actions from "../../../Components/Ui/tables/Actions";
import { useDeleteSubBenefit } from "../../../api/subBenefit";
import { useDeleteSubServiceSubBenefit } from "../../../api/SubServiceSubBenfit";


function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteSubServiceSubBenefit()
  const navigate = useNavigate()
  const {id} = useParams()
  const { setObjectToEdit, objectToEdit } = usePageState()
  function handelEdit(row:any){
    setObjectToEdit(row)
     navigate(`sub/${row?.id}`)
  }

  return useMemo(
    () => [
 

  
      {
        name: t("name"),
        sortable: false,
        center: "true",
        
        cell: (row:any) =>  convert_language_array_to_local(row?.translations, "name")
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
            showEdit={true}
            onDelete={() => deleteMutation.mutate({ sub_benefit_id: row.id })}
          />
        ),
      },
   
    ],
    [t]
  );
};

export default useTableColumns;

