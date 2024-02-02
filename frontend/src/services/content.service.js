import api from "../lib/api";

export const getContentForUser = (userId) => api.get(`/content/${userId}`);

export const updateContentStatus = (contentId, status) => {
    return api.patch(`/content/${contentId}/status`, { status });
  };