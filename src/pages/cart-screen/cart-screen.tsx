import CartLeft from '../../components/cart-left/cart-left';
import CartRight from '../../components/cart-right/cart-right';
import Header from '../../components/header/header';


function CartScreen(): JSX.Element {

  return (
    <div>
      <Header />
      <main className="goods_cart">
        <CartLeft/>
        <CartRight/>
      </main>
    </div>

  );
}

export default CartScreen;
