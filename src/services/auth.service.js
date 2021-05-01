import axios from "axios";
import { BehaviorSubject } from 'rxjs';

//Backend auth service.
const API_URL = "http://localhost:8080/api/auth/";

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
  login,
  logout,
  register,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue () { return currentUserSubject.Value }
}

  function login(userName, password) {
    return axios
      .post(API_URL + "users/authenticate", {
        userName,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("currentUser", JSON.stringify(response.data));
          currentUserSubject.next(response.data);
        }
        return response.data;
      });
  }

  function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
  }

  function register(userName, password) {
    return axios.post(API_URL + "signup", {
      userName,
      password
    });
  }

  // function getCurrentUser() {
  //   return JSON.parse(localStorage.getItem('currentUser'));;
  // }

