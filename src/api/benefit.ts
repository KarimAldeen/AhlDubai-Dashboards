
import useGetQueryPagination from "./helper/ueGetPagination";
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetOneQuery from "./helper/useGetOneQuery";
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation";
  
const API = {
  ADD: `service/benefit/add`,
  GET_ALL: `service/benefit/getAll`,
  DELETE: `service/benefit/delete`,
  UPDATE: `service/benefit/update`,

};
const KEY = "service/benefit"


export const useGetBenefit = (params?:any) => useGetQueryPagination(KEY, API.GET_ALL,params);
export const useAddBenefit = () => useAddMutation(KEY, API.ADD);
export const useUpdateBenefit = () => useUpdateMutation(KEY, API.UPDATE);

export const useDeleteBenefit = () =>useDeleteMutation(KEY, API.DELETE);
