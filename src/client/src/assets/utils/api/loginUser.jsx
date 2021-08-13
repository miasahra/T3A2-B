import axios from "axios"
import apiRoutes from "./routes"

// POST request to Login
export default async function loginUser(credentials) {
  return axios.post(apiRoutes.auth.Login,
    JSON.stringify(credentials)
  )
    .then(res => res.data)
    .catch(err => err)
}
