import axios from "axios";

const apiUrl = 'https://k'
const axiosInstance = axios.create({})

export async function uploadFile(file) {
  console.log(file)
  const data = new FormData()
  data.set('file', file)
  const config = {
    url: apiUrl,
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  }
  return axiosInstance(config)
}
