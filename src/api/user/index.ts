import request from "@/utils/request";
import type { loginForm, loginRes, userInfoRes } from "./type";

enum API {
  LOGIN_API='/user/login',
  USERINFO_API='/user/info'
}

export const api_login = (data:loginForm) => request.post<any, loginRes>(API.LOGIN_API, data)
export const api_userInfo = () => request.get<any, userInfoRes>(API.USERINFO_API)