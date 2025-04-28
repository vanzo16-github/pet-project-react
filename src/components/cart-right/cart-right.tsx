import { calcTotalPrice } from '../../const';
import { useAppSelector } from '../../hooks';

function CartRight(): JSX.Element {
  const goods = useAppSelector((state) => state.cart.itemsInCart);

  return (
    <div className="goods_cart-right ants-animation">
      <h2 className="goods_cart-order">В корзине:</h2>
      <div className="goods_cart-sum">
        <p>{goods.length} товар{goods.length === 1 && ''}{(goods.length < 4 && goods.length > 1) && 'a'}{(goods.length >= 4, goods.length === 0) && 'ов'}</p>
        <span>{calcTotalPrice(goods)}₽</span>
      </div>
      <div className="goods_cart-all">
        <p>Итого:</p>
        <span>{calcTotalPrice(goods)}₽</span>
      </div>
      <button className="good_card-order">Заказать</button>
    </div>
  );
}

export default CartRight;
