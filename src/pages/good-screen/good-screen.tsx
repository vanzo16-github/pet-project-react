import { useDispatch } from 'react-redux';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import { deleteItemFromCart, setItemInCart } from '../../store/cart/reducer';

function GoodScreen(): JSX.Element {
  const dispatch = useDispatch();
  const good = useAppSelector((state) => state.goods.currentGood);
  console.log(good)
  const goodsItems = useAppSelector((state) => state.cart.itemsInCart);
  const itemInCart = goodsItems.some((item) => item.id === good.id);

  const handleClick = () => {
    if (itemInCart) {
      dispatch(deleteItemFromCart(good.id));
    } else {
      dispatch(setItemInCart(good));
    }
  };
  return (
    <div>
      <Header />
      <main className="good_content">
        <div className="good_content-left">
          <img src={good.image_url} alt="book" className="good_content-img"></img>
        </div>
        <div className="good_content-right">
          <div className="title_container">
            <h1 className="good_content-title">{good.title}</h1>
            <span className="good_content-price">{good.category}</span>
          </div>
          <p className="good_content-desc">
            {good.description}
          </p>
          <button className="good_content-buy" onClick={handleClick}>
            {itemInCart ? 'Убрать' : 'В корзину'}
          </button>
        </div>
      </main>
    </div>
  );
}

export default GoodScreen;
