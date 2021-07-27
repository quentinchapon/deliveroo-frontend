const BasketProduct = ({ title }) => {
  return (
    <div className="basketProduct">
      <button>-</button>
      <div className="counterProduct"></div>
      <button>+</button>
      <p className="basketProductName">{title}</p>
      <p className="basketProductPrice"></p>
    </div>
  );
};

export default BasketProduct;
