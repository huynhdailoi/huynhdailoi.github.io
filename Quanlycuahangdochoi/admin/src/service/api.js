import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/v1/",
  headers: { "Content-Type": "application/json" },
});
