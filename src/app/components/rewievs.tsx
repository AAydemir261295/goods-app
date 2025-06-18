import ReviewItem from "./reviewItem";
import { Review } from "../store/models/Reviews";
import DOMPurify from "isomorphic-dompurify";

const apiUrl = `http://o-complex.com:1337/reviews`;


export default async function Reviews() {
    const data = await fetch(apiUrl)
    var items = await data.json()

    return <div className="reviews-container">

        <ul className="reviews-container__reviews nostyle-list">
            {items.map((v: Review) =>
                <ReviewItem key={v.id} id={v.id} inner={DOMPurify.sanitize(v.text, { FORCE_BODY: true })}
                />)
            }
        </ul>

    </div>;
}