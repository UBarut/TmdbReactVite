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


// Daha dinamik yapılması için incelenecek.
export default function SelectedSkeletonType(skeletonName: string, skeleton?: any) {
    const skeletonComponentName = `Skeleton${skeletonName.charAt(0).toUpperCase() + skeletonName.slice(1)}`;
    const skeletonList: Record<string, React.FC<any>> = {
        SkeletonMainSlide,
        SkeletonCardSlide_01,
    };

    const SkeletonComponent = skeletonList[skeletonComponentName];
    return SkeletonComponent ? <SkeletonComponent {...skeleton} /> : null;
}