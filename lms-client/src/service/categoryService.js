import http from "./httpService";
import { apiUrl } from "../config.json";

export function getCategory() {
  return http.get(apiUrl + "/category");
}


