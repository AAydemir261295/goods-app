'use client'
import { ReactNode, useEffect } from "react";
import dompurify from 'dompurify';
import ReviewItem from "./reviewItem";
import Loader from "./loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../store/thunks";



export default function Reviews() {
    var dispatch = useDispatch() as any;
    var items = useSelector(state => state.reviews.items);
    var isLoading = useSelector(state => state.reviews.isPending);

    useEffect(() => {
        dispatch(fetchReviews());
    }, [dispatch])

    return <div className="reviews-container">
        {isLoading ?
            <Loader></Loader> :
            <ul className="reviews-container__reviews nostyle-list">
                {items.map((v) =>
                    <ReviewItem key={v.id} id={v.id} inner={dompurify.sanitize(v.text, { FORCE_BODY: true })}
                    />)
                }
            </ul>
        }
    </div>;
}