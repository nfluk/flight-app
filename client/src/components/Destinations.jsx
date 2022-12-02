import './Destinations.css';

const Destinations = () => {
  return (
    <div className="destinations">
      <div className="popular-destinations">
        <img
          src="https://www.norwegian.com/globalassets/ip/media/destinations/prague/prg_airport.jpg?w=562"
          alt="popular destination"
        />
        <div className="destination-info">
          <h1>Prague</h1>
          <h2>From $49.99</h2>
        </div>
        <div className="popular-destinations">
          <img
            src="https://www.norwegian.com/globalassets/ip/media/destinations/prague/prg_airport.jpg?w=562"
            alt="popular destination"
          />
          <div className="destination-info">
            <h1>London</h1>
            <h2>From $29.99</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
