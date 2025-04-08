import apiClient from "./AxiosApiClient"

const RefreshAccessToken = async() =>{
  const refreshToken = localStorage.getItem('refresh_token')
  if(!refreshToken) throw new Error('No refresh token available')
    try{
    const res = await apiClient.post('/auth/refresh-token', {token: refreshToken})
    const {accessToken} = res.data
    localStorage.setItem('auth_token', accessToken)
    return res.data
  }
  catch(error){
    window.location.href='/login'
    throw error
  }
}

export default RefreshAccessToken