import Home from "./components/Home";
import ListMovie from "./components/ListMovie";
import MovieDetail from "./components/MovieDetail";

const routesHome = [
    {
        path:'/',
        exact:true,
        component:Home,

    },
    {
        path:'/home',
        exact:false,
        component:Home,

    },
    {
        path:'/list-movie',
        exact:false,
        component:ListMovie,
    },
    {
        path:'/movie-detail/:id',
        exact:false,
        component:MovieDetail,
    },
]
export {routesHome}