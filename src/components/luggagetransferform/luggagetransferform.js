import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css'; // Import Flatpickr CSS for styling

export default function Luggageransferform() {
  const [date1, setDate1] = useState(null);
  const [time1, setTime1] = useState(null);
  const [date2, setDate2] = useState(null);
  const [time2, setTime2] = useState(null);

  return (
    <div>
      <div className="luggage-section">
        <h1 className="luggage-heading">Book Your Luggage Transfer</h1>

        <div className="form-section">
          <form action="#" method="POST">
            <div className="form-layout">
              <select name="luggage_type" required>
                <option value="" disabled selected hidden>
                  Luggage Type
                </option>
                <option value="suitcase">Suitcase</option>
                <option value="backpack">Backpack</option>
                <option value="duffel">Duffel Bag</option>
                <option value="others">Others</option>
              </select>

              <input
                type="text"
                name="pickup_location"
                placeholder="Pickup Location"
                required
              />
              <input
                type="text"
                name="dropoff_location"
                placeholder="Drop Off Location"
                required
              />

              <div className="input-wrapper">
                <Flatpickr
                  value={date1}
                  onChange={(date) => setDate1(date)}
                  options={{
                    dateFormat: 'Y-m-d',
                    minDate: 'today'
                  }}
                  placeholder="Pick Up Date"
                  name="pickup_date"
                  required
                />
                <Flatpickr
                  value={time1}
                  onChange={(time) => setTime1(time)}
                  options={{
                    noCalendar: true,
                    enableTime: true,
                    dateFormat: "H:i",
                    time_24hr: true
                  }}
                  placeholder="Pick Up Time"
                  name="pickup_time"
                  required
                />
              </div>

              <div className="input-wrapper">
                <Flatpickr
                  value={date2}
                  onChange={(date) => setDate2(date)}
                  options={{
                    dateFormat: 'Y-m-d',
                    minDate: date1 || 'today'
                  }}
                  placeholder="Drop Off Date"
                  name="dropoff_date"
                  required
                />
                <Flatpickr
                  value={time2}
                  onChange={(time) => setTime2(time)}
                  options={{
                    noCalendar: true,
                    enableTime: true,
                    dateFormat: "H:i",
                    time_24hr: true
                  }}
                  placeholder="Drop Off Time"
                  name="dropoff_time"
                  required
                />
              </div>

              <input
                type="text"
                name="contact_info"
                placeholder="Contact Info"
                required
              />
            </div>

            <div className='buttonWrapper'>
              <button type="submit">Reserve Now</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}