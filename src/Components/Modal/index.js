import { useContext, useId, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { CITIES_LIST, YOUR_API_KEY } from '../../Common/index'
import axios from 'axios';
import { TestContext, TripsContext } from '../../Context';
import './index.css'

const Modal = ({closeModal}) => {

const {addTripToList, trips } = useContext(TripsContext)

const [date, setDate] = useState(new Date());
const [startDate, setStartDate] = useState();
const [endDate, setEndDate] = useState();
const [selectedCity, setSelectedCity] = useState('')
const [errorMsg, setErrorMsg] = useState(false)

const range = new Date();
range.setDate(date.getDate() + 15)

const id = useId()

const handleSubmit = () => {
  if((!endDate || !startDate || !selectedCity)) {
    setErrorMsg(true)
    return
  } else {
    console.log('here add somthing');
    addTripToList({city: selectedCity, startDate: startDate.toISOString().slice(0, 10), endDate: endDate.toISOString().slice(0,10), isSelected: false, id })
    closeModal(false)
    console.log(trips);
  }
  
}

return (
  <div className='modal-container'>
    <button className='btn-close' onClick={() => closeModal(false)}>&times;</button>
    <div className='modal-content'> 
      <p >CREATE A NEW TRIP</p>
      <label>City *</label>
      <select 
        className='select-city'               
        onChange={event => setSelectedCity(event.target.value)}
        defaultValue={selectedCity}>
          {CITIES_LIST.map((city) => <option value={city}>{city}</option>)}
      </select>
      <label>Start date * </label>
      <DatePicker
        selectsStart
        selected={startDate}
        minDate={date}
        maxDate={range}
        onChange={date => setStartDate(date)}
        startDate={startDate}
      />
      <label>End date * </label>
      <DatePicker
        selectsEnd
        selected={endDate}
        onChange={date => setEndDate(date)}
        endDate={endDate}
        startDate={startDate}
        minDate={startDate}
        maxDate={range}
     />
    </div>
    {errorMsg && <p className='error-msg'>you should select city and dates of your trip </p>}
      <div className='btn-container'> 
        <button onClick={() => closeModal(false)}>Cancel</button>
        <button onClick={handleSubmit}>Save</button>
      </div>
      
    </div>

        
    )
}

export default Modal