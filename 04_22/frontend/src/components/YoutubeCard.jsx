import { UserAvatar } from "./UserAvatar"

export function YoutubeCard(props) {
    //props
    //  uImage
    //  uChannelUrl
    //  uChannelName

    //  vImage
    //  vTitle
    //  vViews
    //  vPublishedDate
    //  vDuration
    //  vVideoUrl
    return (
        <div>
            <Thumbnail imageUrl={props.vImage} duration={props.vDuration} />
            <VideoInfo />
        </div>
    )

}

function Thumbnail(props) {
    //props.imageUrl
    //props.duration
    return (
        <div className="rounded-lg hover:rounded-none overflow-hidden relative w-[300px] h-[200px] bg-red-500 flex">
            <img className="w-full" src={props.imageUrl} />
            <span className="absolute right-3 bottom-3 text-white bg-black bg-opacity-60 p-1 rounded-lg">{props.duration}</span>
        </div>
    )
}

function VideoInfo() {
    //  uImage
    //  uChannelUrl
    //  uChannelName

    //  vTitle
    //  vViews
    //  vPublishedDate
    //  vVideoUrl
    return (
        <div>
            <div>
                <UserAvatar url={props.vVideoUrl} />
            </div>
            <div></div>
        </div>
    )
}