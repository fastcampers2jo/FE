import axios from "axios";

export const baseAxios = axios.create({
    baseURL:`${process.env.REACT_APP_SERVER_URL}`,
    withCredentials:true,
    headers:{
        "Content-Type":"application/json"
    }
})

baseAxios.interceptors.request.use();

baseAxios.interceptors.response.use(
    (response)=>{
        return response;
    },
    (error)=>{
        const errorMessage = error.response.data;
        const errorStatus = error.response.status;
        switch (errorStatus) {
          case 401:
            switch (errorMessage.message) {
              case "로그인 문제잇음":
                return Promise.reject(error);
              default:
                break;
            }
            break;
        }
    }
);