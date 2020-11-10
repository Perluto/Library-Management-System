import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/admin";

export function issueBook(user, book, date) {
  const data = {};
  data.bookId = book.id;
  data.userId = user.id;
  data.dateIssued = date.dateIssued;
  data.dateDue = date.dateDue;

  return http.post(apiEndpoint + "/issue-book", data);
}

export function addBook(book) {
  return http.post(apiEndpoint + "/add-book", book);
}

export function getUser(page) {
  return http.get(apiEndpoint + `/get-user/${page}`);
}

export function addUser(user) {
  return http.post(apiEndpoint + "/add-user", user);
}

export function getIssuedBook(page) {
  return http.get(apiEndpoint + `/issuedBooks/${page}`);
}

export function returnBook(id) {
  return http.put(apiEndpoint + `/return-book/${id}`);
}

export function getReturnedBook(page) {
  return http.get(apiEndpoint + `/returnedBooks/${page}`);
}
