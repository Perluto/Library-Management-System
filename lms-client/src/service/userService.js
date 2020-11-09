import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl;

export function profile(username) {
  return http.get(apiEndpoint + "/profile/" + username);
}
