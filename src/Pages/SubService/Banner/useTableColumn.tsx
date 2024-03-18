
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDeleteSubService } from "../../../api/subServices";
import { usePageState } from "../../../lib/state mangment/LayoutPagestate";
import { useNavigate, useParams } from "react-router-dom";
import ColumnsImage from "../../../Components/Columns/ColumnsImage";
import { convert_language_array_to_local } from "../../../utils/language/ConvertObjectToLocalLanguage";
import Actions from "../../../Components/Ui/tables/Actions";
import { useDeleteSubBanner } from "../../../api/subBanner";


function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteSubBanner()
  const navigate = useNavigate()
  const {id} = useParams()
  const { setObjectToEdit, objectToEdit } = usePageState()
  function handelEdit(row:any){
    setObjectToEdit(row)
     navigate(`banner/${row?.id}`)
  }

  return useMemo(
    () => [
 

      {
        name: t("image"),
        sortable: false,
        center: "true",
       
        cell: (row:any) =>  {
          let str = convert_language_array_to_local(row?.translations, "image")
          
          return <ColumnsImage src={str} />
        }
      },
      
      {
        name: "#",
        sortable: false,
        center: true,
        cell: (row:any) => (
          <Actions
            objectToEdit={row}
            
            // onEdit={()=> handelEdit(row) }
            showView={false}
            showEdit={false}
            onDelete={() => deleteMutation.mutate({ sub_service_banner_id: row.id })}
          />
        ),
      },
   
    ],
    [t]
  );
};

export default useTableColumns;

