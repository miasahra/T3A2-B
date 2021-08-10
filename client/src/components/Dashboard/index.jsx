import React, { Fragment, useEffect } from "react"
import NavigationBar from "../NavigationBar"
import Routes from "../../assets/utils/routes"

export default function Dashboard() {
  useEffect(() => {
    document.title = "Track a Feed - Feeding Tracker"
  }, [])

  return (
    <Fragment>
      <NavigationBar active={Routes.Dashboard} />
      <h2>Dashboard</h2>

    </Fragment>
  )
}