
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"

  const API = {
    GET: "/website_info/getAll",
    ADD: "/website_info/add",
    UPDATE: "/website_info/update",
    DELETE: "/website_info/delete",
  };

  const KEY = "WEBSITEINFO";
  export const useGetWebsiteInfo = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddWebsiteInfo = () => useAddMutation(KEY, API.ADD);
  export const useUpdateWebsiteInfo = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteWebsiteInfo = () =>useDeleteMutation(KEY, API.DELETE);
