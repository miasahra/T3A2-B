import "../css/tailwind.css"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import React from "react"
import useToken from "../assets/utils/useToken"
import Routes from "../assets/utils/routes"
import Login from "./Login"
import Register from "./Register"
import Dashboard from "./Dashboard"
import History from "./History"
import Account from "./Account"
import AuthedRoute from "./AuthedRoute"

function App() {
  const { token, setToken } = useToken()

  return (
    <Router>
      <Route
        path="/"
        render={() => (
          token ?
            <Redirect to="/dashboard" /> :
            <Redirect to="/login" />
        )}
      />
      <Route path={Routes.Login}>
        <Login setToken={setToken} />
      </Route>
      <Route path={Routes.Register}>
        <Register setToken={setToken} />
      </Route>
      <AuthedRoute component={Dashboard} isLoggedIn={token} path={Routes.Dashboard} />
      <AuthedRoute component={History} isLoggedIn={token} path={Routes.History} />
      <AuthedRoute component={Account} isLoggedIn={token} path={Routes.Account} />
    </Router>
  )
}

export default App