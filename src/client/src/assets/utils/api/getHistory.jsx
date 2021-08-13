import axios from "axios"
import apiRoutes from "./routes"

// GET request to Get all feeds from all dependants that belong to a User
// Uses the users authentication token as Authorization via JWT
export default async function getHistory(token) {
  return axios.get(apiRoutes.feeds.MyFeeds, { headers: { Authorization: token } })
    .then(res => res.data)
    .catch(err => err)
}
