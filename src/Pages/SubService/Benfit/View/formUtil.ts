import { langauge_validation_genrater, langauge_initial_values_genrater } from '../../../../Hooks/useLanguageGenrater';

import * as Yup from "yup";
import { buildFormData } from "../../../../api/helper/buildFormData";



export const getInitialValues = (objectToEdit: any | null = null): any => {
    
  // Initialize the initial values object
  const initialValues: any = {
    id: objectToEdit?.id ?? null,
    sub_service_benefit_id: objectToEdit?.id ?? null,
    ...langauge_initial_values_genrater(["name"],objectToEdit) ,
  };

  return initialValues;
};


export const getAddInitialValues = (objectToEdit: any | null = null): any => {
  
// Initialize the initial values object
const initialValues: any = {
  ...langauge_initial_values_genrater(["name"],null) ,
};

return initialValues;
};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<any> => {
  // Validate input
  return Yup.object().shape({
    ...langauge_validation_genrater(["name"]) 
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