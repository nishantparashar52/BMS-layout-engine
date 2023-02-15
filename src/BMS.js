import React, { useState } from 'react';
export default function BMS({ seats }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [numSeats, setNumSeats] = useState(1);

  const handleSeatClick = (seat) => {
    const nextSeats = getNextSeats(seat, numSeats);
    if (canSelectSeats(nextSeats)) {
      setSelectedSeats([...selectedSeats, ...nextSeats]);
    }
  };

  const handleNumSeatsChange = (value) => {
    setNumSeats(parseInt(value));
  };

  const handleBookNowClick = () => {
    // handle booking logic here
  };

  const getNextSeats = (seat, numSeats) => {
    debugger;
    const seatIndex = seats.findIndex((s) => s.id === seat.id);
    const nextSeats = [seat];
    debugger;
    for (let i = seatIndex + 1; i < seats.length; i++) {
      if (
        seats[i].row === seat.row &&
        seats[i].column === seat.column + nextSeats.length
      ) {
        nextSeats.push(seats[i]);
        if (nextSeats.length === numSeats) {
          break;
        }
      } else {
        break;
      }
    }
    return nextSeats;
  };

  const canSelectSeats = (seats) => {
    return seats.every((seat) => seat.status === 'available');
  };

  const isBookNowDisabled = selectedSeats.length !== numSeats;

  return (
    <div className="seating-chart">
      <div className="seat-selector">
        <label htmlFor="num-seats">Select number of seats:</label>
        <select
          id="num-seats"
          onChange={(e) => handleNumSeatsChange(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          {/* ... more options here */}
        </select>
      </div>
      <div className="seats">
        {seats.map((s) => (
          <div className="row">
            {s.map((seat) => (
              <div
                key={seat.id}
                className={`seat ${seat.status}${
                  selectedSeats.includes(seat) ? ' selected' : ''
                }`}
                onClick={() => handleSeatClick(seat)}
              >
                {seat.row}-{seat.column}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={handleBookNowClick} disabled={isBookNowDisabled}>
        Book Now
      </button>
    </div>
  );
}
