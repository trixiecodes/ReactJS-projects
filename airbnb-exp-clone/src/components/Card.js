export default function Card(props) {
    let badgeText
    if (props.cardData.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.cardData.status === "Online"){
        badgeText = "Online"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.cardData.img} className="card--image "/>
            <div className="card--stats">
                <img src="star.png" className="card--star" />
                <span>{props.cardData.rating}</span>
                <span className="gray">({props.cardData.reviewCount}) • </span>
                <span className="gray"> {props.cardData.location} </span>
            </div>
            <p>{props.cardData.title}</p>
            <p><span className="bold">From ${props.cardData.price}</span> / person</p>
        </div>
    )
}