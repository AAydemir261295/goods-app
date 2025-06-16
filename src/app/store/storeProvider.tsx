'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, makeStore } from './store'
import { retrieveGoods } from './reducers/goodsReducer'
import { retrieveReviews } from './reducers/reviewsReducer'

export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore | null>(null)
    if (!storeRef.current) {
        storeRef.current = makeStore()
        storeRef.current.dispatch(retrieveGoods({}));
        storeRef.current.dispatch(retrieveReviews({}));

    }

    return <Provider store={storeRef.current}> {children} </Provider>
}