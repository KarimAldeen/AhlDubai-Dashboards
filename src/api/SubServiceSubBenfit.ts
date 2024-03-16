
import useGetQueryPagination from "./helper/ueGetPagination";
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";
  
const API = {
  ADD: `service/sub/benefit/sub/add`,
  GET_ALL: `service/sub/benefit/sub/getAll`,
  DELETE: `service/sub/benefit/sub/delete`,
  UPDATE: `service/sub/benefit/sub/update`,

};
const KEY = "service/sub/benefit/sub"


export const useGetSubServiceSubBenefit = (params?:any) => useGetQuery(KEY, API.GET_ALL,params);
export const useAddSubServiceSubBenefit = () => useAddMutation(KEY, API.ADD);
export const useUpdateSubServiceSubBenefit = () => useUpdateMutation(KEY, API.UPDATE);

export const useDeleteSubServiceSubBenefit = () =>useDeleteMutation(KEY, API.DELETE);
