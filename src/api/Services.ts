
import useGetQueryPagination from "./helper/ueGetPagination";
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetOneQuery from "./helper/useGetOneQuery";
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation";
  
const API = {
  ADD: `Services`,
  GET_ALL: `Services`,
  DELETE: `Services`,
  UPDATE: `Services`,

};
const KEY = "Services"


export const useGetServices = (params?:any) => useGetQueryPagination(KEY, API.GET_ALL,params);
export const useGetOneServices = () => useGetOneQuery(KEY, API.GET_ALL);

export const useAddServices = () => useAddMutation(KEY, API.ADD);
export const useUpdateServices = () => useUpdateMutation(KEY, API.UPDATE);

export const useDeleteServices = () =>useDeleteMutation(KEY, API.DELETE);
