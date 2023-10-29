/*
 * @Descripttion:
 * @version:
 * @Author: shaye
 * @Date: 2023-10-29 16:06:49
 * @LastEditors: shaye
 * @LastEditTime: 2023-10-29 16:35:26
 */
import axios from "axios";
import { ElLoading, ElMessage } from "element-plus";


axios.defaults.baseURL='http://localhost:3000/'
let loading;
const startLoading = () => {
  loading = ElLoading.service({
    lock: true,
    text: "拼命加载中...",
    background: "rgba(0,0,0,.7)",
  });
};

const endLoading = () => {
  loading.close();
};

//请求拦截
axios.interceptors.request.use(
  (config) => {
    startLoading();

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//响应拦截
axios.interceptors.response.use(
  (response) => {
    endLoading();
    return response;
  },
  (error) => {
    endLoading();
    ElMessage.error(error.response.data);

    return Promise.reject(error);
  }
);

export default axios;
