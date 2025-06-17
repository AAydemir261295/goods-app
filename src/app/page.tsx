'use client'
import Goods from "./components/goods";
import Reviews from "./components/rewievs";
import ShoppingCart from "./components/shoppingCart";
import StoreProvider from "./store/storeProvider";

export default function Home() {

  return (
    <StoreProvider>
      <div className="page">
        <header className="page__header">
          <h1 className="page__title">тестовое задание</h1>
        </header>
        <Reviews />
        <ShoppingCart></ShoppingCart>
        <Goods></Goods>
      </div>
    </StoreProvider>

  );
}
