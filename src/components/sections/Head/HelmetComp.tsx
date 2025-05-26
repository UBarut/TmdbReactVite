import { Helmet } from "react-helmet";

export default function HelmetComp({ headData }: { headData: Record<string, any> }) {
    return (
        <Helmet>
            <title>{headData.title} | TMDB</title>
            <meta name="description" content={headData.desc} />
        </Helmet>
    )
}