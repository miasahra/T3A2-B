import axios from "axios"
import apiRoutes from "./routes"

// POST request to Create a Dependant
// Uses the users authentication token as Authorization via JWT
export default async function createDependant(token, name) {
  const headers = { Authorization: token }
  return axios.post(apiRoutes.dependants.NewDependant, name, { headers })
    .then(res => res.data)
    .catch(err => err)
}
