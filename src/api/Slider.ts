
import useGetQueryPagination from "./helper/ueGetPagination";
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetOneQuery from "./helper/useGetOneQuery";
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation";
  
const API = {
  ADD: `Slider`,
  GET_ALL: `Slider`,
  DELETE: `Slider`,
  UPDATE: `Slider`,

};
const KEY = "Slider"


export const useGetSlider = (params?:any) => useGetQueryPagination(KEY, API.GET_ALL,params);
export const useGetOneSlider = () => useGetOneQuery(KEY, API.GET_ALL);

export const useAddSlider = () => useAddMutation(KEY, API.ADD);
export const useUpdateSlider = () => useUpdateMutation(KEY, API.UPDATE);

export const useDeleteSlider = () =>useDeleteMutation(KEY, API.DELETE);
