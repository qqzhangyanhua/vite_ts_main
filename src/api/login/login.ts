/*
 * @Author: ZYH
 * @Date: 2022-08-04 15:01:37
 * @LastEditTime: 2022-08-04 15:01:38
 * @Description: 
 */
import http from "@/service/http";
import * as T from "./types";

const loginApi: T.ILoginApi = {
  login(params) {
    return http.post("/login", params);
  },
};
export default loginApi;