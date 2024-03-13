
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"

  const API = {
    GET: "/hero_section/getAll",
    ADD: "/hero_section/add",
    UPDATE: "/hero_section/update",
    DELETE: "/hero_section/delete",
  };

  const KEY = "HERO_SECTION";
  export const useGetHeroSection = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddHeroSection = () => useAddMutation(KEY, API.ADD);
  export const useUpdateHeroSection = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteHeroSection = () =>useDeleteMutation(KEY, API.DELETE);
