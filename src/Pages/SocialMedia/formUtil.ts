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
    social_media_image: objectToEdit?.social_media_image ?? '',
    social_media_link:objectToEdit?.social_media_link

  };

  return initialValues;
};



export const getValidationSchema = (editMode: boolean = false): Yup.Schema<any> => {
  // Validate input
  return Yup.object().shape({

  });
};




export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
  
  
  if(typeof data?.social_media_image == "string" ){
    console.log("hello");
    
    delete data['social_media_image']
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