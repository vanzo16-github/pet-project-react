

import './form.css';
import { useAppSelector } from '../../hooks';
import Item from '../item/item';


function Form(): JSX.Element {


  const goods = useAppSelector((state) => state.cart.itemsInCart);
  // eslint-disable-next-line no-return-assign, @typescript-eslint/no-unsafe-return
  const totalPrice = goods.reduce((acc, good) => acc += good.price, 0);

  return (
    <section className="basket">
      <div className="container-form">
        <form className="basket_form" action="" method="get">
          <h2 className="basket_form-title">Добавленные товары: {goods.length}</h2>
          <h2 className="basket_form-title">Общая стоимость: {totalPrice}</h2>
          {goods.length > 0
            ? goods.map((good) => (
              <Item
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                key={good.id}
                good={good}

              />
            ))
            : 'Корзина пуста'}
          <div className="basket_form-phone">
            <input placeholder='+7 (000) 000 00-00' className="phone" type="text">
            </input>
            <button className="send">заказать</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;

