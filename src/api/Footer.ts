
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
const KEY = "Footer"


export const useGetFooter = (params?:any) => useGetQueryPagination(KEY, API.GET_ALL,params);
export const useGetOneFooter = () => useGetOneQuery(KEY, API.GET_ALL);

export const useAddFooter = () => useAddMutation(KEY, API.ADD);
export const useUpdateFooter = () => useUpdateMutation(KEY, API.UPDATE);

export const useDeleteFooter = () =>useDeleteMutation(KEY, API.DELETE);
