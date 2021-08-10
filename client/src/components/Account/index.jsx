import React, { useEffect } from "react"
import NavigationBar from "../NavigationBar"
import Routes from "../../assets/utils/routes"

export default function Account() {
  useEffect(() => {
    document.title = "My Account - Feeding Tracker"
  }, [])
  return (
    <>
      <NavigationBar active={Routes.Account} />
      <h2>Account</h2>
    </>
  )
}