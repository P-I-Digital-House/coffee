import axios from "axios";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const api_url = "http://localhost:5000";
const api = axios.create({
  baseURL: api_url});



api.interceptors.response.use(
  function (response) {
    console.log(response);
    return response;
  },
  function (error) {
    if (error.response.status === 403) {
      // acces denied
      history.push("/login");
      console.log("403");
    } else if (error.response.status === 404) {
      // page not found
      console.log("404");
    }
    return Promise.reject(error);
  }
);

export default api;
