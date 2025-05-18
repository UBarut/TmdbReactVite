
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { MovieList } from "../pages/MovieList"
import { MovieDetail } from "../pages/MovieList/MovieDetail";
import type { RouteType } from "./router.types";
import { SeriesList } from "../pages/SeriesList";
import { SeriesDetail } from "../pages/SeriesList/SeriesDetail";

export const routes: RouteType[] = [
    {
        path: '/',
        view: Home,
    },
    {
        path: 'about',
        view: About,
    },
    {
        path: 'movie-list',
        view: MovieList,
        children: [
            {
                path: ':id/:title',
                view: MovieDetail,
            }
        ]
    },
    {
        path: 'series-list',
        view: SeriesList,
        children: [
            {
                path: ':id/:title',
                view: SeriesDetail,
            }
        ]
    }
];