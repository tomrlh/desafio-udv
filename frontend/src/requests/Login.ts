import { axiosInstance as axios } from "./Global";

export const loginRequest = async (user: {
  email: string;
  password: string;
}): Promise<any> => {
  let res: any = await axios
    .post("login", user)
    .then(response => {
      localStorage.setItem("token", response.data.token);
      axios.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;
      return response.data;
    })
    .catch(error => error.response);

  return res;
};
