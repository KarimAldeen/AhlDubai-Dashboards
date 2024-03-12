import ValidationField from "../Components/ValidationField/ValidationField";
import { languages } from "../config/AppKey";
import * as Yup from "yup";
import { convert_language_array_to_field, convert_language_array_to_local } from "../utils/language/ConvertObjectToLocalLanguage";

// Function to generate language-specific validation fields
export const langauge_validation_genrater = (fieldNames: string[]): any => {
  const fields: any = {};
  fieldNames.forEach((fieldName: string) => {
    languages?.forEach((language: string) => {
      fields[`${fieldName}_${language}`] = Yup.string().required('Required');
    });
  });
  return fields;
};

// Function to generate language-specific initial values
export const langauge_initial_values_genrater = (fieldNames: string[], objectToEdit: any): any => {
  const fields: any = {};
  fieldNames.forEach((fieldName: string) => {
    languages?.forEach((language: string) => {
      fields[`${fieldName}_${language}`] = objectToEdit ? convert_language_array_to_field(objectToEdit,fieldName,language) ?? "" : "";
    });
  });
  return fields;
};

// Function to generate language-specific ValidationField components
export const langauge_field_genrater = (fieldNames: string[]): JSX.Element[] => {
  const fields: JSX.Element[] = [];
  fieldNames.forEach((fieldName: string) => {
    languages?.forEach((language: string, index: number) => {
      fields.push(<ValidationField key={`${fieldName}_${language}_${index}`} name={`${fieldName}_${language}`} />);
    });
  });
  return fields;
};



