import { Photo } from "../types/photo"

type Props = {
    photo:Photo;
    onClick: ()=> void
}

export function PhotoItem({photo, onClick}:Props) {
    return(
        <div className="cursor-pointer hover:opacity-80" onClick={onClick}>
            <img src={`/assets/${photo.url}`} alt="" key={photo.id}/>
        </div>
    )
}