
import { useState } from "react"

// Handle session management via `localStorage`
export default function useToken() {
  // Retrieves authentication token from `localStorage`
  const getToken = () => {
    const tokenString = localStorage.getItem("token")
    const userToken = JSON.parse(tokenString)
    return userToken?.jwt
  }

  // Handle state
  const [token, setToken] = useState(getToken())

  // Saves authentication token to `localStorage`
  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken))
    setToken(userToken.jwt)
  }

  return {
    setToken: saveToken,
    token,
  }
}