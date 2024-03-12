import useAddMutation from "./helper/useAddMutation";




const KEY = "AUTH"
const API = {
    LOGIN: `auth/login`,
    LOGOUT: `auth/logout`,
  };
export const useLoginAdmin  =  ()=>useAddMutation(KEY , API.LOGIN)