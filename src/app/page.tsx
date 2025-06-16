'use client'
import Goods from "./components/goods";
import Reviews from "./components/rewievs";
import ShoppingCart from "./components/shoppingCart";
import StoreProvider from "./store/storeProvider";

export default function Home() {

  // var store = useAppSelector(state => state.reviews);

  // console.log(store);
  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">тестовое задание</h1>
      </header>
      <StoreProvider>
        <Reviews />
        <ShoppingCart></ShoppingCart>
        <Goods></Goods>
      </StoreProvider>
    </div>
  );
}
