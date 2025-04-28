
//export default Response;
function Item({ good }): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { title, price} = good;

  return (
    <div className="basket_form-good">
      <div className="name">{title}</div>
      <div className="count">{price}</div>
      <div className="price">{price}</div>
    </div>
  );
}

export default Item;

