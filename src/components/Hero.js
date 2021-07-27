const Hero = ({ restaurant }) => {
  return (
    <div className="heroBanner">
      <div className="restaurantInfos">
        <h1>{restaurant.name}</h1>
        <p>{restaurant.description}</p>
      </div>
      <img alt="The restaurant" src={restaurant.picture}></img>
    </div>
  );
};

export default Hero;
