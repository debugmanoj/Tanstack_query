import axiosInstance from "../axiosInstance";

export const fetchComments = async () => {
  const { data } = await axiosInstance.get("/comments");
  return data;
};
