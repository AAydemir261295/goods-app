export default function ReviewItem(props: any) {
    return <li className="reviews-container__reviews-item"
        dangerouslySetInnerHTML={{ __html: props.inner }}
        key={props.id}>
    </li>;
}