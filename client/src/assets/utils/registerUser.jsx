import axios from "axios"
import apiRoutes from "../../assets/utils/api/routes"

export default async function registerUser(credentials) {
  return axios.post(apiRoutes.auth.Register,
    JSON.stringify(credentials)
  )
    .then(res => res.data)
    .catch(err => err)
}
