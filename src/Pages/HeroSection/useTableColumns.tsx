
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { useNavigate } from "react-router-dom";
import { useDeletePartners } from "../../api/Partners";
import { usePageState } from "../../lib/state mangment/LayoutPagestate";
import { convert_language_array_to_local } from "../../utils/language/ConvertObjectToLocalLanguage";
import { useDeleteDoctors } from "../../api/Doctors";
import { useDeleteHeroSection } from "../../api/hero_section";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteHeroSection()
  const navigate = useNavigate()
  const { setObjectToEdit, objectToEdit } = usePageState()
  function handelEdit(row:any){
    setObjectToEdit(row)
     navigate(`edit`)
  }

  return useMemo(
    () => [
 
      {
        name: t("title"),
        sortable: false,
        center: "true",
        
        cell: (row:any) =>  {

         return  (convert_language_array_to_local(row?.translations, "title"));
          
        }
      },
      {
        name: t("description"),
        sortable: false,
        center: "true",
        
        cell: (row:any) =>  {

         return  (convert_language_array_to_local(row?.translations, "description"));
          
        }
      },
      {
        name: t("image"),
        sortable: false,
        center: "true",
       
        cell: (row:any) =>  {
          let str = row?.image;
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
            onDelete={() => deleteMutation.mutate({ hero_section_id: row.id })}
          />
        ),
      },
   
    ],
    [t]
  );
};

export default useTableColumns;

