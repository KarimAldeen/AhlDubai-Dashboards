
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"

  const API = {
    GET: "/socialmedia/getAll",
    ADD: "/socialmedia/add",
    UPDATE: "/socialmedia/update",
    DELETE: "/socialmedia/delete",
  };

  const KEY = "SOCIALMEDIA";
  export const useGetSocialmedia = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddSocialmedia = () => useAddMutation(KEY, API.ADD);
  export const useUpdateSocialmedia = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteSocialmedia = () =>useDeleteMutation(KEY, API.DELETE);
