import axios from "axios";

export default axios.create({
  baseURL: "https://loibq.info/wp-json/wp/v2/posts",
  responseType: "json"
});