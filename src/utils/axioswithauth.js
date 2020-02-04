import Axios from "axios";

export const axiosWithAuth = () => {
  return Axios.create({
    baseURL: "https://usetechstuff.herokuapp.com/api",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
