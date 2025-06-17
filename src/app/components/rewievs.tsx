'use client'
import { useGetReviewsQuery } from "../store/apiSlice";
import { ReactNode } from "react";
import dompurify from 'dompurify';
import ReviewItem from "./reviewItem";
import Loader from "./loader";



export default function Reviews() {

    var items: ReactNode[] = [];

    const {
        data: reviews = [],
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetReviewsQuery();


    return <div className="reviews-container">
        {isLoading ?
            <Loader></Loader> :
            <ul className="reviews-container__reviews nostyle-list">
                {reviews.map((v) =>
                    <ReviewItem id={v.id} inner={dompurify.sanitize(v.text, { FORCE_BODY: true })}
                    />)
                }
            </ul>
        }
    </div>;
}