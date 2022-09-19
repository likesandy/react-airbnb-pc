import { BASE_URL, TIMEOUT } from "@/constant/config";
import axios from "axios";

class TRequest {
  constructor(baseUrl, timeout) {
    this.instance = axios.create({
      baseUrl,
      timeout,
    });
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }

  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.request({ ...config, method: "GET" });
  }

  post(config) {
    return this.request({ ...config, method: "POST" });
  }
}

export default new TRequest(BASE_URL, TIMEOUT);
