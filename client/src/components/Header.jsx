import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faHandPointLeft,
  faPerson,
  faPlane,
} from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import './Header.css';
import { setDayWithOptions } from 'date-fns/fp';

function Header() {
  const [showDates, setShowDates] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [showPeople, setShowPeople] = useState(false);
  const [people, setPeople] = useState({
    adults: 0,
    children: 0,
  });

  const handleOption = (traveler, operation) => {
    setPeople((prev) => {
      return {
        ...prev,
        [traveler]:
          operation === 'increase'
            ? people[traveler] + 1
            : people[traveler] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-list"></div>
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
            <span
              className="header-search--text"
              onClick={() => {
                setShowDates(!showDates);
              }}
            >{`${format(date[0].startDate, 'yyyy/MM/dd')} - ${format(
              date[0].endDate,
              'yyyy/MM/dd'
            )}`}</span>
            {showDates && (
              <DateRange
                className="date"
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            )}
          </div>
          <div className="header-search--item">
            <FontAwesomeIcon icon={faPerson} className="header-icon" />
            <span
              onClick={() => {
                setShowPeople(!showPeople);
              }}
            >{`${people.adults} adults & ${people.children} children `}</span>
            {showPeople && (
              <div className="options">
                <div className="option-item">
                  <span className="option-text">Adults</span>
                  <div className="option-counter">
                    <button
                      className="option-counter-button"
                      onClick={() => {
                        handleOption('adults', 'increase');
                      }}
                    >
                      +
                    </button>
                    <span className="option-counter-number">
                      {people.adults}
                    </span>
                    <button
                      className="option-counter-button"
                      disabled={people.adults <= 0}
                      onClick={() => {
                        handleOption('adults', 'decrease');
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="option-item">
                  <span className="option-text">Children</span>
                  <div className="option-counter">
                    <button
                      className="option-counter-button"
                      onClick={() => {
                        handleOption('children', 'increase');
                      }}
                    >
                      +
                    </button>
                    <span className="option-counter-number">
                      {people.children}
                    </span>
                    <button
                      className="option-counter-button"
                      disabled={people.children <= 0}
                      onClick={() => {
                        handleOption('children', 'decrease');
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="header-search--item">
            <button className="header--button">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
