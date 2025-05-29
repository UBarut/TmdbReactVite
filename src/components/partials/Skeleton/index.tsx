import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const SkeletonMainSlide = () => {
    return (
        <div className="skeleton mainSlide w-full h-full animate-pulse">
            <div className="image w-full h-full flex justify-center items-center">
                <FontAwesomeIcon icon={faImage} />
            </div>
        </div>
    )
}

const SkeletonCardSlide_01 = () => {
    return (
        <div className="skeleton cardSlide01 w-full h-full animate-pulse">
            <div className="image w-full h-full flex justify-center items-center">
                <FontAwesomeIcon icon={faImage} />
            </div>
        </div>
    )
}
const SkeletonCastSlideCard = () => {
    return (
        <div className="skeleton cardSlide01 w-full h-full animate-pulse">
            <div className="image w-full h-full flex justify-center items-center">
                <FontAwesomeIcon icon={faImage} />
            </div>
        </div>
    )
}


// Daha dinamik yapılması için incelenecek.
export default function SelectedSkeletonType(skeletonName: string, skeleton?: any) {
    const skeletonComponentName = `Skeleton${skeletonName.charAt(0).toUpperCase() + skeletonName.slice(1)}`;
    const skeletonList: Record<string, React.FC<any>> = {
        SkeletonMainSlide,
        SkeletonCardSlide_01,
        SkeletonCastSlideCard,
    };

    const SkeletonComponent = skeletonList[skeletonComponentName];
    return SkeletonComponent ? <SkeletonComponent {...skeleton} /> : null;
}

export const SkeletonMoviTvBannerContainer = () => {
    return (
        <div className="skeleton movieTvDetailBanner w-full h-full animate-pulse" >
            <div className="inner-section">
                <div className="image">
                </div>
                <div className="content">
                    <div className="title">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="infos">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p className="tagline"></p>
                    <div className="movieSummary"></div>
                    <p className="overview"></p>
                    <div className="links">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="vote-average">
                        <div className="circle"></div>
                        <span className="vote-count"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}