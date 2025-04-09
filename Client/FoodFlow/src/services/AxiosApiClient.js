import axios from 'axios';
import { toast } from 'react-toastify';
import RefreshAccessToken from './RefreshAccessToken';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000'
});

apiClient.interceptors.response.use(
(response) =>{
  ////console.log('success :', response.data)
  return response
},
  (error) => {
   //console.log('error:', error)
   if(error.message === 'Network Error') return toast.error('Check internet connection')
    if (error.response) return toast.error(error.response.data.message)
    return Promise.reject(error);
  }
);

export const apiClient2 = axios.create({
  baseURL: 'http://localhost:5000'
})
apiClient2.interceptors.request.use(
  (config)=>{
   const accessToken = localStorage.getItem('auth_token')
   if(accessToken){
    config.headers.Authorization = `Bearer ${accessToken}`
   } 
   return config
  }
)

apiClient2.interceptors.response.use((response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 (Unauthorized) Errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;  // Avoid infinite retry loops

      try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (!refreshToken) {
          //console.log("No refresh token available");
          // redirect to login
          window.location.href="/login"
          return Promise.reject(error);
        }

        const {data} = await RefreshAccessToken()
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

        return apiClient2(originalRequest);
      } catch (error) {
        //console.log("Failed to refresh token", error);
        window.location.href='/login'
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;