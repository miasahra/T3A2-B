import axios from "axios"
import apiRoutes from "./routes"

// POST request to Register
export default async function registerUser(credentials) {
  return axios.post(apiRoutes.auth.Register,
    JSON.stringify(credentials)
  )
    .then(res => res.data)
    .catch(err => err)
}
