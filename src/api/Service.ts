
import useGetQueryPagination from "./helper/ueGetPagination";
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetOneQuery from "./helper/useGetOneQuery";
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation";
  
const API = {
  ADD: `service/add`,
  GET_ALL: `service/getAll`,
  DELETE: `service/delete`,
  UPDATE: `service/update`,

};
const KEY = "Services"


export const useGetService = (params?:any) => useGetQueryPagination(KEY, API.GET_ALL,params);
export const useGetOneService = () => useGetOneQuery(KEY, API.GET_ALL);

export const useAddService = () => useAddMutation(KEY, API.ADD);
export const useUpdateService = () => useUpdateMutation(KEY, API.UPDATE);

export const useDeleteService = () =>useDeleteMutation(KEY, API.DELETE);
