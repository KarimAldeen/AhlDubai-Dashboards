
import useGetQueryPagination from "./helper/ueGetPagination";
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetOneQuery from "./helper/useGetOneQuery";
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation";
  
const API = {
  ADD: `doctor/add`,
  GET_ALL: `doctor/getAll`,
  DELETE: `doctor/delete`,
  UPDATE: `doctor/update`,

};
const KEY = "Doctors"


export const useGetDoctors = (params?:any) => useGetQueryPagination(KEY, API.GET_ALL,params);

export const useAddDoctors = () => useAddMutation(KEY, API.ADD);
export const useUpdateDoctors = () => useUpdateMutation(KEY, API.UPDATE);

export const useDeleteDoctors = () =>useDeleteMutation(KEY, API.DELETE);
