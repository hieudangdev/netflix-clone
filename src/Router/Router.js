import Home from "Page/Home"
import Profile from "Page/Profile"

const routes = {

    home: '/',
    following: '/following',
    profile: '/movie/:id',
    profileLink: (id) => `/movie/${id}`,
    upload: '/upload',


}

// no login
const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.profile, component: Profile },

]
export { routes, publicRoutes }