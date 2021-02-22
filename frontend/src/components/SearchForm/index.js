import {useState, useEffect} from 'react'

const SearchForm = () => {
  const today = new Date();
  console.log(today)
  const [resDate, setResDate] = useState("today");
  const [resTime, setResTime] = useState("7:00 pm")
  const [partySize, setPartySize] = useState('2 people');
  const [searchString, setSearchString] = useState('');
  const timeOptions = ["7:00 pm", "7:30 pm", "8:00 pm"]
  const partySizeOptions = ['1 person', '2 people', '3 people', '4 people', '5 people',
    '6 people', '7 people', '8 people', '9 people', '10 people', '11 people',
    '12 people', '13 people', '14 people', '15 people', '16 people', '17 people',
    '18 people', '19 people', '20 people'];

  // useEffect(() => {

  // }, [partySize])

  const handleSubmit = (e) => {
    e.preventDefault();

    const reservation = {
      resTime,
      resDate,
      partySize
    }
    // this is the home page form so it will do a search but have the details of the form saved

  }

  return (
    <form
      className="home-res-form"
      onSubmit={handleSubmit}
    >
      <input
        className="date-selector"
        type="dropdown"
        value={resDate}
        onChange={e => setResDate(e.target.value)}
      />
      <select
        className="time-selector"
        value={resTime}
        onChange={e => setResTime(e.target.value)}
      >
        {timeOptions.map((time, idx) => (
          <option key={idx} value={time}>{time}</option>
        ))}
      </select>
      <select
        className="party-selector"
        value={partySize}
        onChange={e => setPartySize(e.target.value)}
      >
        {partySizeOptions.map((size, idx) => (
          <option key={idx} value={size}>
            {size}
          </option>
        ))}
      </select>
      <input
        className="search-bar"
        value={searchString}
        onChange={e => setSearchString(e.target.value)}
        placeholder="Restaurant or Cuisine"
      ></input>
      <button type="submit">Let's go</button>
    </form>
  )
}

export default SearchForm;