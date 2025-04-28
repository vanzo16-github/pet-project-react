/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
import { itemsDefault } from '../../mocks/mocks';
import { TGoods } from '../../mocks/types';
import { deleteItemFromCart, setItemInCart } from '../../store/cart/reducer';
import { useAppSelector } from '../../hooks';
import { Link, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { setCurrentGood } from '../../store/good/reducer';

export type GoodProps = {
  good: TGoods;
}

function Good({ good }: GoodProps): JSX.Element {
  const { title, price, category, image_url} = good;
  const dispatch = useDispatch();
  const goods = useAppSelector((state) => state.cart.itemsInCart);
  const itemInCart = goods.some((item) => item.id === good.id);

  const navigate = useNavigate();

  const handleGoodClick = useCallback(() => {
    dispatch(setCurrentGood(good))
    navigate(`/good/${price}`);
  }, [navigate]);

  const handleClick = () => {
    if (itemInCart) {
      dispatch(deleteItemFromCart(good.id));
    } else {
      dispatch(setItemInCart(good));
    }
  };
  return (
    <div className="good_card">
      <Link className="good_card-link" onClick={handleGoodClick} to={`/good/${price}`}></Link>
      <img src={image_url} alt="book" className="good_card-img"></img>
      <h1 className="good_card-title">{title}</h1>
      <span className="good_card-category">{category}</span>
      <p className="good_card-price">{price} ₽</p>
      <button className="good_card-buy" onClick={handleClick}>
        {itemInCart ? 'Убрать' : 'В корзину'}
      </button>
    </div>

  );
}

function Goods(): JSX.Element {

  return (
    <main className="goods">
      {itemsDefault.map((good) =>(
        <Good
          key={good.id}
          good={good}
        />
      ))}
    </main>


  );
}

export default Goods;


