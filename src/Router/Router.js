import Home from "Page/Home"
import Profile from "Page/Profile"
import SearchPage from "Page/Search"
import TopRate from '../Componets/Header/NavLink/TopRate'
import NowPlaying from './../Componets/Header/NavLink/NowPlaying'
import UpComing from './../Componets/Header/NavLink/UpComing'
import Account from './../Page/Accounts'


const routes = {
    home: '/',
    search: '/search/:q',
    searchLink: (q) => `/search/${q}`,
    detail: '/:mediaType/:mediaId',
    detailLink: (type, id) => `/${type}/${id}`,
    top: '/toprated/',
    nowplaying: '/nowplaying/',
    upcoming: '/upcoming/',
    accounts: '/accounts/',

}

// no login
const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.detail, component: Profile },
    { path: routes.search, component: SearchPage },
    { path: routes.top, component: TopRate },
    { path: routes.nowplaying, component: NowPlaying },
    { path: routes.upcoming, component: UpComing },
    { path: routes.accounts, component: Account },

]
export { routes, publicRoutes }