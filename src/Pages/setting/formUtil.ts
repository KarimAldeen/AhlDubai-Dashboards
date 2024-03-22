import * as Yup from "yup";



export const getInitialValues = (objectToEdit: any | null = null): any => {

  // Initialize the initial values object
  const initialValues: any = {
    id: objectToEdit?.id ,
    primary_color: objectToEdit?.primary_color ,
    secondary_color: objectToEdit?.secondary_color ,
    font_family: objectToEdit?.font_family ,
    logo: objectToEdit?.logo ,


  };

  return initialValues;
};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<any> => {
  // Validate input
  return Yup.object().shape({
    id: Yup.string().required("ID is required"),
    // primary_color: Yup.string().required("Primary color is required").matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Primary color must be a valid hexadecimal color code"),
    // secondary_color: Yup.string().required("Secondary color is required").matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Secondary color must be a valid hexadecimal color code"),
    font_family: Yup.string().required("Font family is required"),
    // logo: Yup.string().required("Logo is required")
        // primary_color: Yup.string().required("primary_color is required"),
    // secondary_color: Yup.string().required("secondary_color is required")

  });
};



