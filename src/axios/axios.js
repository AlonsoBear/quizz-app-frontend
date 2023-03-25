import axiosInstance from "axios";

const axios = () => {
    const baseURL = process.env["REACT_APP_BASE_URL"] ?? "http://localhost:5000"
    return axiosInstance.create({
      baseURL,
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    //   withCredentials: true,
    })
};

export default axios()