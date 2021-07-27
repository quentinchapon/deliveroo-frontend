import noImg from "../img/no-img2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainContent = ({ categories }) => {
  return (
    <div className="mainContent">
      <div className="category">
        {categories.map((category, index) => {
          return (
            <>
              <h2>
                {categories[index].meals.length !== 0 && categories[index].name}
              </h2>
              <div className="cardsMenu">
                {category.meals.map((meal) => {
                  return (
                    <div className="card">
                      <div className="cardDescription">
                        <h3>{meal.title}</h3>
                        <p
                          className={
                            meal.description !== ""
                              ? "dishDescription"
                              : "dishDescriptionEmpty"
                          }
                        >
                          {meal.description
                            ? meal.description
                            : "Description en cours de rédaction"}
                        </p>
                        <div className="pricePopular">
                          <p className="price">{meal.price} € </p>
                          <p className="popular">
                            {meal.popular === true && (
                              <FontAwesomeIcon icon="star" />
                            )}
                          </p>
                        </div>
                      </div>

                      <img src={meal.picture ? meal.picture : noImg} alt="" />
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
      <div className="basket">
        <p>Votre panier est vide</p>
        <button className="btnValidateBasket">Valider mon panier</button>
      </div>
    </div>
  );
};

export default MainContent;
