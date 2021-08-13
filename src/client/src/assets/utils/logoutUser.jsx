// Removes authentication token from `localStorage`
// Logs user out and React Router will handle state redirection
export default async function logoutUser() {
  localStorage.removeItem("token")
}
