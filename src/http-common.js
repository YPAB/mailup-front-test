import axios from "axios";
export default axios.create({
  baseURL: "https://dummyapi.io/data/v1",
  headers: {
    "Content-type": "application/json",
    "app-id": "62c24895ac4723816a87cd55"
  }
});