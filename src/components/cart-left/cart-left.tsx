import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { deleteItemFromCart } from '../../store/cart/reducer';
import { TGoods } from '../../mocks/types';

type CartLeftItemProp = {
  good: TGoods;
};

function CartLeftItem({good}:CartLeftItemProp): JSX.Element {
  const { title, price, image_url} = good;

  const dispatch = useDispatch();
  const goods = useAppSelector((state) => state.cart.itemsInCart);
  const itemInCart = goods.some((item) => item.id === good.id);


  const handleClick = () => {
    if (itemInCart) {
      dispatch(deleteItemFromCart(good.id));
    }
  };

  return (
    <div className="good_card-cart">
      <img src={image_url} alt="book" className="good_card-img-cart"></img>
      <h1 className="good_card-title">{title}</h1>
      <p className="good_card-price-cart">{price} ₽</p>
      <button className="good_card-exit" onClick={handleClick}>
        <div
          dangerouslySetInnerHTML={{__html: '&#x2717'}}
        />
      </button>
    </div>

  );
}

function CartLeft(): JSX.Element {
  const goods = useAppSelector((state) => state.cart.itemsInCart);

  if(goods.length < 1) {
    return <h2 className="goods_cart-title">Ваша корзина пуста</h2>;
  }

  return (
    <div className="gods_cart-left">
      <h2 className="goods_cart-title">Ваш заказ:</h2>
      <div className="gods_cart-left">
        { goods.map((good) => <CartLeftItem key={good} good={good}/>)}
      </div>
    </div>
  );
}

export default CartLeft;
