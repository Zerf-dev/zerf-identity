import api from "@/pages/api/hello";

export const login = (params) => api.post('/login', params);

export const getAvatars = () => api.get('/avatars');

export const regenerateAvatar = (email) => api.post('/avatar/generate', {email},  { timeout: 0 });
