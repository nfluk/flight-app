import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faPerson,
  faPlane,
} from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-list">
          {/* <div className="header-list__item active">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div> */}
        </div>
        <h1 className="header--title">Start Booking</h1>
        <p className="header--description">Find Your Flight</p>
        <button className="header--button">Sign in</button>
        <div className="header-search">
          <div className="header-search--item">
            <FontAwesomeIcon icon={faPlane} className="header-icon" />
            <input
              type="text"
              placeholder="From Place"
              className="header-search--input"
            />
          </div>
          <div className="header-search--item">
            <FontAwesomeIcon icon={faPlane} className="header-icon" />
            <input
              type="text"
              placeholder="To Place"
              className="header-search--input"
            />
          </div>
          <div className="header-search--item">
            <FontAwesomeIcon icon={faCalendarDays} className="header-icon" />
            <span className="header-search--text">from date to date</span>
          </div>
          <div className="header-search--item">
            <FontAwesomeIcon icon={faPerson} className="header-icon" />
            <span>adults and/or children</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
