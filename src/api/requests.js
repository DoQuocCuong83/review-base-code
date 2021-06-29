import axiosInstance from "./config";

const URI = "/";

export const indexAllRequest = (endPoint) => {
  return axiosInstance.get(URI + endPoint);
};

export const indexOneRequest = (endPoint, params) => {
  return axiosInstance.get(URI + endPoint, {
    params,
  });
};

export const createRequest = (endPoint, data) => {
  return axiosInstance.post(URI + endPoint, data);
};

export const editRequest = (endPoint, data) => {
  return axiosInstance.put(URI + endPoint, data);
};

export const deleteRequest = (endPoint, data) => {
  return axiosInstance.delete(URI + endPoint, data);
};
