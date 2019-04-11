import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID b535765009da545848e9c74a10e72793e42041bd73548edb95760519179a9009"
  }
});
