import axios from "axios"
import apiRoutes from "./routes"

// GET request to Get all Dependants that belong to a User
// Uses the users authentication token as Authorization via JWT
export default async function getDependants(token) {
  return axios.get(apiRoutes.dependants.MyDependants, { headers: { Authorization: token } })
    .then(res => res.data)
    .catch(err => err)
}
