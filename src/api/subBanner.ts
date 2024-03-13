
import useGetQueryPagination from "./helper/ueGetPagination";
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useUpdateMutation from "./helper/useUpdateMutation";
  
const API = {
  ADD: `service/sub/banner/add`,
  GET_ALL: `service/sub/banner/getAll`,
  DELETE: `service/sub/banner/delete`,
  UPDATE: `service/sub/banner/update`,

};
const KEY = "service/banner"


export const useGetSubBanner = (params?:any) => useGetQueryPagination(KEY, API.GET_ALL,params);
export const useAddSubBanner = () => useAddMutation(KEY, API.ADD);
export const useUpdateSubBanner = () => useUpdateMutation(KEY, API.UPDATE);

export const useDeleteSubBanner = () =>useDeleteMutation(KEY, API.DELETE);
