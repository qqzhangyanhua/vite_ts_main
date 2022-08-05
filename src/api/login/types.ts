/*
 * @Author: ZYH
 * @Date: 2022-08-04 15:01:46
 * @LastEditTime: 2022-08-04 15:01:46
 * @Description: 
 */
export interface ILoginParams {
  userName: string;
  passWord: string | number;
}
export interface ILoginApi {
  login: (params: ILoginParams) => Promise<any>;
}