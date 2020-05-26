import Home from "./pages/Home";
import ListMovie from "./components/ListMovie";
import MovieDetail from "./components/MovieDetail";
// import DashBoard from "./components/DashBoard";

const routesHome = [
    {
        path: '/',
        exact: true,
        component: Home,

    },
    {
        path: '/home',
        exact: false,
        component: Home,

    },
    {
        path: '/list-movie',
        exact: false,
        component: ListMovie,
    },
    {
        path: '/movie-detail/:id',
        exact: false,
        component: MovieDetail,
    },
]

// const routesAdmin = [
//     {
//         path: '/admin/dashboard',
//         exact: false,
//         component: DashBoard,
//     },
// ]
export {
    routesHome,
    // routesAdmin
}