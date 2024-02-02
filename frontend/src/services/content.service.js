import api from "../lib/api";

export const getContentForUser = (userId) => api.get(`/content/${userId}`);

export const updateContentStatus = (contentId, status) => {
    console.log("STATUS IN FRONTEND:",status)
    return api.patch(`/content/${contentId}/status`, { status });
  };

// export const updateContentStatus = (contentId, status) => {
//     console.log("STATUS IN FRONTEND:",status)
//     return api.patch(`/content/${contentId}/status`, { status }, { headers: { 'Content-Type': 'application/json' } });
//   };