
import useGetQueryPagination from "./helper/ueGetPagination";
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";
  
const API = {
  ADD: `service/sub/benefit/add`,
  GET_ALL: `service/sub/benefit/getAll`,
  DELETE: `service/sub/benefit/delete`,
  UPDATE: `service/sub/benefit/update`,

};
const KEY = "service/benefit"


export const useGetSubBenefit = (params?:any) => useGetQuery(KEY, API.GET_ALL,params);
export const useAddSubBenefit = () => useAddMutation(KEY, API.ADD);
export const useUpdateSubBenefit = () => useUpdateMutation(KEY, API.UPDATE);

export const useDeleteSubBenefit = () =>useDeleteMutation(KEY, API.DELETE);
