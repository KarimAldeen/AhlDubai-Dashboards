
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { useNavigate } from "react-router-dom";
import { useDeletePartners } from "../../api/Partners";
import { usePageState } from "../../lib/state mangment/LayoutPagestate";
import { convert_language_array_to_local } from "../../utils/language/ConvertObjectToLocalLanguage";
import { useDeleteDoctors } from "../../api/Doctors";
import { useDeleteSocialmedia } from "../../api/socialmedia";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteSocialmedia()
  const navigate = useNavigate()
  const { setObjectToEdit, objectToEdit } = usePageState()
  function handelEdit(row:any){
    setObjectToEdit(row)
     navigate(`edit`)
  }

  return useMemo(
    () => [
 
      {
        name: t("link"),
        sortable: false,
        center: "true",
        
        cell: (row:any) =>  {

         return  row?.social_media_link;
          
        }
      },
      {
        name: t("image"),
        sortable: false,
        center: "true",
       
        cell: (row:any) =>  {
          let str = row?.social_media_image;
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
            
            onEdit={()=> handelEdit(row) }
            showView={false}
            showEdit={true}
            onDelete={() => deleteMutation.mutate({ social_media_id: row.id })}
          />
        ),
      },
   
    ],
    [t]
  );
};

export default useTableColumns;

