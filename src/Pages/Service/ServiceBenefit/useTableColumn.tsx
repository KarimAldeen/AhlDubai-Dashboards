
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDeleteBenefit } from "../../../api/benefit";
import { usePageState } from "../../../lib/state mangment/LayoutPagestate";
import { useNavigate, useParams } from "react-router-dom";
import ColumnsImage from "../../../Components/Columns/ColumnsImage";
import { convert_language_array_to_local } from "../../../utils/language/ConvertObjectToLocalLanguage";
import Actions from "../../../Components/Ui/tables/Actions";


function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteBenefit()
  const navigate = useNavigate()
  const {id} = useParams()
  const { setObjectToEdit, objectToEdit } = usePageState()
  function handelEdit(row:any){
    setObjectToEdit(row)
     navigate(`benefit/${row?.id}`)
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
            onDelete={() => deleteMutation.mutate({ service_benefit_id: row.id })}
          />
        ),
      },
   
    ],
    [t]
  );
};

export default useTableColumns;

