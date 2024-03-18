import { langauge_validation_genrater, langauge_initial_values_genrater } from '../../Hooks/useLanguageGenrater';

import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";
import { languages } from "../../config/AppKey";

interface formUtilCommon {
  number:number,
  value:number 
}

interface ObjectToEdit extends formUtilCommon {

    id?:number,

}


export const getInitialValues = (objectToEdit: any | null = null): any => {

  // Initialize the initial values object
  const initialValues: any = {
    id: objectToEdit?.id ?? 0,
    service_id: objectToEdit?.id ?? 0,
    elemnt_type:objectToEdit?.elemnt_type??"big",
    image: objectToEdit?.image ?? '',
    sub_image: objectToEdit?.sub_image ?? '',

    ...langauge_initial_values_genrater(["title","sub_title"],objectToEdit) ,


  };

  return initialValues;
};



export const getValidationSchema = (editMode: boolean = false): Yup.Schema<any> => {
  // Validate input
  return Yup.object().shape({
    
    ...langauge_validation_genrater(["title","sub_title"]) 
  });
};




export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
  
  if(typeof data['image'] == 'string'){
    delete data['image']
  }


  if(typeof data['sub_image'] == 'string'){
    delete data['sub_image']
  }
  
  
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