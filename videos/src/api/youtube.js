import axios from "axios";

const KEY = "AIzaSyDW6KNj2kyg-nELxnv83P1_bQDFnkDja48";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
