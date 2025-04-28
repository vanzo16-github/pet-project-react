import { useCallback } from 'react';
import { useAppSelector } from '../../hooks';
import { Link, useNavigate } from 'react-router-dom';


function Header(): JSX.Element {
  const goods = useAppSelector((state) => state.cart.itemsInCart);
  // const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);

  const navigate = useNavigate();

  const handleOrderClick = useCallback(() => {
    //setIsCartMenuVisible(false);
    navigate('/order');
  }, [navigate]);


  return (
    <header className="header">
      <div className="phone">
                +7 (929) 629-41-74
      </div>
      <Link to="/">
        <div className="logo">
          <img src="img/logo.svg" alt="logo" className="logo_img"></img>
        </div>
      </Link>
      <div className="bag" onClick={ handleOrderClick }>
          Корзина
        {goods.length > 0 ? (
          <span>{goods.length}</span>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
