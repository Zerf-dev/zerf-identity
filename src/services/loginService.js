import api from "@/pages/api/hello";

export const login = (params) => api.post('/login', params);

