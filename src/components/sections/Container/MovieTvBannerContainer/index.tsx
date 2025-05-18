import { CircularProgressbar } from "react-circular-progressbar";
import type { MovieTvBannerContainerType } from "./MovieTvBannerContainer.type";
import "./style.scss"
import Title from "../../../partials/Title";

export default function MovieTvBannerContainer({ id, className = "banner", data }: MovieTvBannerContainerType) {

    return (
        <section id={id} className={className} style={{ ['--backgroundImage']: `url(${data.bg_image})` } as React.CSSProperties}>
            <div className="inner-section">
                <div className="image">
                    <img src={data.card_image} alt={data.title} />
                </div>
                <div className="content">
                    <Title title="h2">
                        <span className="title">{data.title}</span>
                        {data.title != data.original_title &&  <span className="original-title">{data.original_title}</span>}
                        <span className="year">({data.release_year})</span>
                    </Title>
                    <div className="infos">
                        <span>{data.release_date}</span>
                        <span>{data.genres}</span>
                        <span>{data.movie_time}</span>
                    </div>
                    <p className="tagline">{data.tagline}</p>
                    <Title title="h4"><span>Movie summary:</span></Title>
                    <p className="overview">{data.overview}</p>
                    <div className="links">
                        <a href={data.homepage} target="_blank"><span>Movie Site</span></a>
                        <a href={'https://www.imdb.com/title/' + data.imdb_id} target="_blank"><span>IMDB Page</span></a>
                    </div>
                    <div className="vote-average">
                        <CircularProgressbar value={data.vote_average * 10} text={data.vote_average.toFixed(1)} />
                        <span className="vote-count">Total Vote: {data.vote_count}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
