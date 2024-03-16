
import useGetQueryPagination from "./helper/ueGetPagination";
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetOneQuery from "./helper/useGetOneQuery";
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation";
  
const API = {
  ADD: `service/sub/add`,
  GET_ALL: `service/sub/getAll`,
  GET_ONE: `service/sub/getOne`,

  DELETE: `service/sub/delete`,
  UPDATE: `service/sub/update`,

};
const KEY = "service/sub"


export const useGetSubService = (params?:any) => useGetQuery(KEY, API.GET_ALL,params);
export const useGetOneSubService = (params?:any) => useGetQuery(KEY, API.GET_ONE,params);
export const useAddSubService = () => useAddMutation(KEY, API.ADD);
export const useUpdateSubService = () => useUpdateMutation(KEY, API.UPDATE);

export const useDeleteSubService = () =>useDeleteMutation(KEY, API.DELETE);
