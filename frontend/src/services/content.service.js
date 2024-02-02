import api from "../lib/api";

export const getContentForUser = (userId) => api.get(`/content/${userId}`);