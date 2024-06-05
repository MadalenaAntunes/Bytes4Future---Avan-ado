export function UserAvatar(props) {
    return (
        <img src={props.url} className={`rounded-full ${props.classname}`}/>
    )
}