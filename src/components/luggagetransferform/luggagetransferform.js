import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css'; // Import Flatpickr CSS for styling
import { MDBInput } from 'mdb-react-ui-kit';

export default function Luggageransferform() {
  const [date1, setDate1] = useState(null);
  const [time1, setTime1] = useState(null);
  const [date2, setDate2] = useState(null);
  const [time2, setTime2] = useState(null);

  return (
    <div>
      <div className="luggage-section">
        <h1 className="luggage-heading">Book Your Luggage Transfer</h1>
        <h2 className="luggage-heading2">Your Luggage Transfer—Where Every Journey Begins with Effortless Luxury</h2>

        <div className="form-section">
          <form action="#" method="POST">
            <div className="form-layout">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="luggage_type" style={{ alignSelf: 'flex-start', color: 'white', fontWeight: 'bold' }}>Luggage Type</label>
                <select id="luggage_type" name="luggage_type" required style={{ fontWeight: 400, fontSize: '16px', padding: '10px', border: 'none', color: 'black', border: 'none', height: '52px' }}>
                  <option value="" disabled selected hidden>
                    Select Your Luggage Type
                  </option>
                  <option value="None Selected">None</option>
                  <option value="Suitcase">Suitcase</option>
                  <option value="Backpack">Backpack</option>
                  <option value="Duffel">Duffel Bag</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="pickupLocation" style={{ alignSelf: 'flex-start', color: 'white', fontWeight: 'bold' }}>Pickup Location</label>
                <input
                  id="pickupLocation"
                  type="text"
                  name="pickup_location"
                  placeholder=" Select Your Pickup Location"
                  required
                  style={{ backgroundColor: "#f9f9f9", fontWeight: 400, fontSize: '16px', padding: '10px', border: 'none', color: 'black', border: 'none', borderColor:"white", height: '52px' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="dropoffLocation" style={{ alignSelf: 'flex-start', color: 'white', fontWeight: 'bold' }}>Drop Off Location</label>
                <input
                  id="dropoffLocation"
                  type="text"
                  name="dropoff_location"
                  placeholder="Select Your Dropoff Location"
                  required
                  style={{ backgroundColor: "#f9f9f9", fontWeight: 400, fontSize: '16px', padding: '10px', border: 'none', color: 'black', border: 'none', borderColor:"white", height: '52px' }}
                />
              </div>

              <div className='lugagge_transfer_mobile' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3%' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="pickupdate" style={{ alignSelf: 'flex-start', color: 'white', fontWeight: 'bold' }}>Pick Up Date</label>
                <Flatpickr
                  id="pickupdate"
                  name="pickupdate"
                  placeholder="Select Your Pick Up Date"
                  required
                  options={{
                    enableTime: false,
                    dateFormat: "F j, Y"
                  }}
                  style={{ backgroundColor: "#f9f9f9", fontWeight: 400, fontSize: '16px', padding: '10px', border: 'none', color: 'black', border: 'none', borderColor:"white", height: '52px' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="pickuptime" style={{ alignSelf: 'flex-start', color: 'white', fontWeight: 'bold' }}>Pick Up Time</label>
                <Flatpickr
                  id="pickuptime"
                  name="pickuptime"
                  placeholder="Select Your Pick Up Time"
                  required
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: "g:i K"
                  }}
                  style={{ backgroundColor: "#f9f9f9", fontWeight: 400, fontSize: '16px', padding: '10px', border: 'none', color: 'black', border: 'none', borderColor:"white", height: '52px' }}
                />
              </div>
              </div>

              <div className='lugagge_transfer_mobile' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3%' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="dropOffDate" style={{ alignSelf: 'flex-start', color: 'white', fontWeight: 'bold' }}>Drop Off Date</label>
                <Flatpickr
                  id="dropOffDate"
                  name="dropoffdate"
                  placeholder="Select Your Drop Off Date"
                  required
                  options={{
                    enableTime: true,
                    dateFormat: "F j, Y g:i K"
                  }}
                  style={{ backgroundColor: "#f9f9f9", fontWeight: 400, fontSize: '16px', padding: '10px', border: 'none', color: 'black', border: 'none', borderColor:"white", height: '52px' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="dropOffTime" style={{ alignSelf: 'flex-start', color: 'white', fontWeight: 'bold' }}>Drop Off Time</label>
                <Flatpickr
                  id="dropOffTime"
                  name="dropofftime"
                  placeholder="Select Your Drop Off Time"
                  required
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: "g:i K"
                  }}
                  style={{ backgroundColor: "#f9f9f9", fontWeight: 400, fontSize: '16px', padding: '10px', border: 'none', color: 'black', border: 'none', borderColor:"white", height: '52px' }}
                />
              </div>
              </div>






















              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="pickupLocation" style={{ alignSelf: 'flex-start', color: 'white', fontWeight: 'bold' }}>Contact Information</label>
                <input
                  id="pickupLocation"
                  type="text"
                  name="pickup_location"
                  placeholder="Contact Information"
                  required
                  style={{ backgroundColor: "#f9f9f9", fontWeight: 400, fontSize: '16px', padding: '10px', border: 'none', color: 'black', border: 'none', borderColor:"white", height: '52px' }}
                />
              </div>
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