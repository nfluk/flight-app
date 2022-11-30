import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
          <span className="navbar__logo">Flight Booker</span>
          <div className="navbar__items">
            <button className="navbar__button">Register</button>
            <button className="navbar__button">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
