// Define global API Routes 
// These will be accessed as `Routes.DASHBOARD`, etc
// within the app which is a cleaner config.
const apiRoutes = {
  auth: {
    Login: "/auth/sign_in",
    Register: "/auth/sign_up",
  },
  feeds: {
    MyFeeds: "/feeds/me",
    NewFeed: "/feeds",
  },
  dependants: {
    MyDependants: "/dependants/",
    NewDependant: "/dependants",
  },
}

export default apiRoutes