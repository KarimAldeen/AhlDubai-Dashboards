
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { useNavigate } from "react-router-dom";
import { useDeletePartners } from "../../api/Partners";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeletePartners()
  const navigate = useNavigate()
  return useMemo(
    () => [
 
      {
        name: t("title"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.title
      },
      {
        name: t("image"),
        sortable: false,
        center: "true",
       
        cell: (row:any) =>  {
          let str = row?.image;
          str =  str?.replace(`public`, "/storage") ?? ""; 
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
            
            onEdit={()=> navigate(`/Partners/${row.id}`) }
            showView={false}
            showEdit={false}
            onDelete={() => deleteMutation.mutate({ id: row.id })}
          />
        ),
      },
      // {
      //   name: t("status"),
      //   sortable: false,
      //   center: "true",
      //   cell: (row:any) => {

      //     return(
      //       <p style={{
      //         background:!row.deleted_at ?'#19ab27':'#ea5454',
      //         color:"white",
      //         padding:6,
      //         borderRadius:10,
      //         position:"relative",
      //         top:'7px'
      //       }}>
      //         {
      //           !row.deleted_at ? t('available') : t('unavailable')

      //         }
      //       </p>
      //     ) 
      //   }
      // },
    
    ],
    [t]
  );
};

export default useTableColumns;

