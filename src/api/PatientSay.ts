
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"

  const API = {
    GET: "/patient_say/getAll",
    ADD: "/patient_say/add",
    UPDATE: "/patient_say/update",
    DELETE: "/patient_say/delete",
  };

  const KEY = "PATIENTSAY";
  export const useGetPatientSay = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddPatientSay = () => useAddMutation(KEY, API.ADD);
  export const useUpdatePatientSay = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeletePatientSay = () =>useDeleteMutation(KEY, API.DELETE);
