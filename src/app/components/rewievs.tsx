'use client'
import { useGetReviewsQuery } from "../store/apiSlice";
import { ReactNode } from "react";
import dompurify from 'dompurify';
import ReviewItem from "./reviewItem";



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
        <ul className="reviews-container__reviews nostyle-list">
            {isLoading ?
                "loading" :
                reviews.map((v) =>
                    <ReviewItem id={v.id} inner={dompurify.sanitize(v.text, { FORCE_BODY: true })}
                    />)
            }
        </ul>
    </div>;
}