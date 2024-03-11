
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";

interface formUtilCommon {
  number:number,
  value:number 
}

interface ObjectToEdit extends formUtilCommon {

    id?:number,

}

interface InitialValues extends ObjectToEdit {

}
interface ValidateSchema  extends formUtilCommon{

}
export const getInitialValues = (objectToEdit: any | null = null): any => {
  console.log(objectToEdit,"objectToEdit");
  return {
    id: objectToEdit?.id ?? 0,
    image: objectToEdit?.image ?? '',
   
  };
};


export const getValidationSchema = (editMode: boolean = false): Yup.Schema<any> => {
  // Validate input
  return Yup.object().shape({
    image: Yup.string().required('Required'),

  });
};



export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
  
  
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};

export const ChangeDataToPrint = (data:any)=>{

  let new_array = data
  for(let i =0 ; i<data.length ; i++){
    new_array[i]['status'] =!data[i]['deleted_at'] ?'available':'unavailable'
    delete new_array[i]['deleted_at']
  }
  return new_array
}