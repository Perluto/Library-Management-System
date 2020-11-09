import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/book";

export function getIssuedBookForUser(id, page) {
  return http.get(apiEndpoint + `/user/${id}/issued/${page}`);
}

export function getReturnedBookForUser(id, page) {
  return http.get(apiEndpoint + `/user/${id}/returned/${page}`);
}

export function getBookList(page) {
  return http.get(apiEndpoint + `/list/${page}`);
}

export function getBook(id) {
  return http.get(apiEndpoint + `/${id}`);
}
