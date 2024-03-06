import axios from 'axios'
console.log(import.meta.env, 'import.meta.env.VITE_APP_BASE_URL,')
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 20000
})

request.interceptors.request.use((config) => {
  // 配置请求头
  return config
})

request.interceptors.response.use((response) => {
  console.log(response, 'response')
  return response.data
},(err) => {
  console.log(err)
  alert('shibaile')
})


export default request