import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";
import BookingSeat from "./components/BookingSeat";
import Register from "./components/Register";

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
        path: '/movie-detail/:id',
        exact: false,
        component: MovieDetail,
    },
    {
        path: "/booking-seat/:maLichChieu",
        exact: false,
        component: BookingSeat,
    },
    {
        path: "/register",
        exact: false,
        component: Register,
    },

]

export {
    routesHome,
}