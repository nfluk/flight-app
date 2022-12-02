import './Destinations.css';

const Destinations = () => {
  return (
    <div className="destinations">
      <div className="popular-destinations">
        <img
          src="https://www.norwegian.com/globalassets/ip/media/destinations/london/lgw-uk-london-1920x620.jpg?w=562"
          alt="popular destination"
        />
        <div className="destination-info">
          <h1>London</h1>
          <h2>From $29.99</h2>
        </div>
        <div className="popular-destinations">
          <img
            src="https://www.norwegian.com/globalassets/ip/media/destinations/amsterdam/amsterdam-canal-boats1920x630.jpg?w=562"
            alt="popular destination"
          />
          <div className="destination-info">
            <h1>Amsterdam</h1>
            <h2>From $49.49</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
