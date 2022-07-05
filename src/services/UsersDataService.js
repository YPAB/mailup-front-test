import http from "../http-common";
class UsersDataService {
  getAll() {
    return http.get(`/user?limit=12`);
  }
  get(id) {
    return http.get(`/user/${id}`);
  }
  
  /* findByTitle(title) {
    return http.get(`/users?title=${title}`);
  } */
}
export default new UsersDataService();