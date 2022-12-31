import Home from "Page/Home"
import Profile from "Page/Profile"
import SearchPage from "Page/Search"
import TopHot from "Componets/Header/NavLink/TopHot"
import Movies from "Componets/Header/NavLink/Movies"
import Tv from "Componets/Header/NavLink/Tv"


const routes = {
    home: '/',
    search: '/search/:q',
    searchLink: (q) => `/search/${q}`,
    detail: '/:mediaType/:mediaId',
    detailLink: (type, id) => `/${type}/${id}`,
    top: '/top_rated/',
    movies: '/movies/',
    tv: '/tv/',

}

// no login
const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.detail, component: Profile },
    { path: routes.search, component: SearchPage },
    { path: routes.top, component: TopHot },
    { path: routes.movies, component: Movies },
    { path: routes.tv, component: Tv },

]
export { routes, publicRoutes }