import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../../store/restaurants';
import DatePicker from 'react-datepicker';
import './SearchComponent.css';
import { useHistory } from 'react-router-dom';

const SearchComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [reservationDate, setReservationDate] = useState(new Date());
  const [reservationTime, setReservationTime] = useState("7:00 pm")
  const [partySize, setPartySize] = useState('2 people');
  const [searchString, setSearchString] = useState('');
  const [searchReturn, setSearchReturn] = useState([]);
  const [showDropdown, setShowDropdown] = useState(null);
  const [errors, setErrors] = useState([]);
  const timeOptions = [
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
  ];
  const partySizeOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  //get all the restaurants from the db to search
  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch])

  const restaurantList = useSelector(state => {
    return state.restaurants.list
  })

  // update the dropdown when searchString changes
  const filterRestaurants = str => {
    const string = str.toLowerCase();
    const filteredList = restaurantList?.filter(restaurant => (
      restaurant.name.toLowerCase().includes(string) ||
      restaurant.cuisineType.toLowerCase().includes(string)
    ))
    return filteredList
  }

  // logic for when to show the search dropdown
  useEffect(() => {
    setErrors([])
    const parsedList = filterRestaurants(searchString)

    if ((parsedList && parsedList.length === 1 && parsedList[0].name === searchString) ||
      searchString.length < 2
    ) {
      return setShowDropdown(null)
    }

    if (searchString.length > 2) {
      setSearchReturn(parsedList);
      setShowDropdown(true)
    }
  },[searchString])

  const handleSubmit = (e) => {
    e.preventDefault();

    const restaurant = restaurantList.filter(rest => (
      rest.name.toLowerCase() === searchString.toLowerCase()
    ))[0]

    if (!restaurant) return setErrors(["Please select a valid restaurant name."])

    const reservation = {
      reservationTime,
      reservationDate,
      partySize
    }

    // send to the restaurant page but have the details of the form saved
    history.push({
      pathname: `/restaurants/${restaurant.id}`,
      state: {
        reservation
      }
    })
  }

  return (
    <div className="search">
      <h1 className="search-title">
        Find your table for any occasion
      </h1>
      <div className="search-form-errors">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </div>
      <form
        className="search-form"
        onSubmit={handleSubmit}
      >
        <div className="search-form-left">
          <div className="date-section">
            <i className="far fa-calendar"></i>
            <DatePicker
              className="date-selector"
              selected={reservationDate}
              onChange={date => setReservationDate(date)}
            />
            <i className="fas fa-angle-down"></i>
            <div className="calendar-hidden">

            </div>
          </div>
          <div className="time-section">
            <i className="far fa-clock"></i>
            <select
              className="time-selector"
              value={reservationTime}
              onChange={e => setReservationTime(e.target.value)}
            >
              {timeOptions.map((time, idx) => (
                <option key={idx} value={time}>{time}</option>
              ))}
            </select>
          </div>
          <div className="party-section">
            <i className="far fa-user"></i>
            <select
              className="party-selector"
              value={partySize}
              onChange={e => setPartySize(e.target.value)}
            >
              {partySizeOptions.map((size, idx) => (
                <option key={idx} value={size}>
                  {`${size} people`}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="search-form-right">
          <div className="search-section">
            <i className="fas fa-search"></i>
            <input
              className="search-bar"
              value={searchString}
              onChange={e => setSearchString(e.target.value)}
              placeholder="Restaurant or Cuisine"
            />
            <div className="dropdown-search-list">
              {showDropdown && searchReturn.map(item => (
                <div
                key={item.id}
                className="search-list-block"
                onClick={() => setSearchString(item.name)}
                >
                  <div className="search-list-item-name">{item.name}</div>
                  <div className="search-list-item-type">{item.cuisineType}</div>
                </div>
              ))}
            </div>
          </div>
          <button className="search-button" type="submit">Let's go</button>
        </div>
      </form>
      
    </div>
  )
}

export default SearchComponent;