import axios from "axios";

const connect_Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BDS_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export default connect_Api;
