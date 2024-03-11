
import useGetQueryPagination from "./helper/ueGetPagination";
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetOneQuery from "./helper/useGetOneQuery";
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation";
  
const API = {
  ADD: `Blog`,
  GET_ALL: `Blog`,
  DELETE: `Blog`,
  UPDATE: `Blog`,

};
const KEY = "Blog"


export const useGetBlog = (params?:any) => useGetQueryPagination(KEY, API.GET_ALL,params);
export const useGetOneBlog = () => useGetOneQuery(KEY, API.GET_ALL);

export const useAddBlog = () => useAddMutation(KEY, API.ADD);
export const useUpdateBlog = () => useUpdateMutation(KEY, API.UPDATE);

export const useDeleteBlog = () =>useDeleteMutation(KEY, API.DELETE);
