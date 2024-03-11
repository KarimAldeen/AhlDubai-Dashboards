
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { useNavigate } from "react-router-dom";
import { useDeletePartners } from "../../api/Partners";
import { usePageState } from "../../lib/state mangment/LayoutPagestate";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeletePartners()
  const navigate = useNavigate()
  const { setObjectToEdit, objectToEdit } = usePageState()
  function handelEdit(row:any){
    setObjectToEdit(row)
    navigate(`/Partners/${row.id}`)
  }

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

