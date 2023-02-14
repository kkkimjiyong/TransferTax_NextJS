import axios from "axios";
import LocalStorage from "@/utils/LocalStorage";

const instance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_LOCAL,
  baseURL: process.env.NEXT_PUBLIC_PRAC,
  headers: {
    Authorization: `Bearer ${LocalStorage.getItem("accessToken")}`,
  },
});

const noAuthInstance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_LOCAL,
  baseURL: process.env.NEXT_PUBLIC_PRAC,
});

//? ------------------------- axios interceptor  --------------------------

instance.interceptors.request.use(function (config) {
  console.log("실행");
  const token = LocalStorage.getItem("accessToken");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const userApi = {
  postSignUp: (userInfo: any) => noAuthInstance.post("/user/signup", userInfo),
  postKaKaoSignUp: (userInfo: any) =>
    instance.put("/user/kakao/signup", { userInfo }),
  postLogin: (userInfo: any) => noAuthInstance.post("/user/login", userInfo),
  getUser: () => instance.get("/user"),
};

export const surveyApi = {
  postSurvey: (survey: any) => instance.post("/user/survey", survey),
  postSecondSurvey: (survey: any) =>
    instance.post("/user/survey/second", survey),
  getResult: () => instance.get("/user/survey/result"),
};
