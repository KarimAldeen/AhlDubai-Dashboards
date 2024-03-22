
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation";
  
const API = {
  GET_ALL: `home/setting`,
  UPDATE: `home/edit`,

};
const KEY = "Services"


export const useGetHomeSetting= (params?:any) => useGetQuery(KEY, API.GET_ALL,params);
export const useUpdateHomeSetting= () => useUpdateMutation(KEY, API.UPDATE);

