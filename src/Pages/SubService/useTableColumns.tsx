
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { useNavigate } from "react-router-dom";
import { useDeleteSubService } from "../../api/subServices";
import { usePageState } from "../../lib/state mangment/LayoutPagestate";
import { convert_language_array_to_local } from "../../utils/language/ConvertObjectToLocalLanguage";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteSubService()
  const navigate = useNavigate()
  const { setObjectToEdit, objectToEdit } = usePageState()
  function handelEdit(row:any){
    setObjectToEdit(row)
     navigate(`/service/${row?.service_id}/sub/${row?.id}`)
  }

  return useMemo(
    () => [

      
      {
        name: t("title"),
        sortable: false,
        center: "true", 
        cell: (row:any) =>  convert_language_array_to_local(row?.translations, "name")
      },
      
      {
        name: t("whatsapp_view"),
        sortable: false,
        center: "true",
      
        cell: (row:any) => row?.whatsapp_view
      },
      {
        name: t("price"),
        sortable: false,
        center: "true",
      
        cell: (row:any) => row?.price
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
            onDelete={() => deleteMutation.mutate({ id: row.id })}
          />
        ),
      },
   
    ],
    [t]
  );
};

export default useTableColumns;

