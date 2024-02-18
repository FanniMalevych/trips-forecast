import { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { CITIES_LIST } from '../../Common/index'

const Modal = ({closeModal}) => {

const [date, setDate] = useState(new Date());
const [startDate, setStartDate] = useState();
const [endDate, setEndDate] = useState();
const [selectedCity, setSelectedCity] = useState('')


const range = new Date();
range.setDate(date.getDate() + 15)
// console.log(range);


startDate && endDate ? console.log(startDate.toISOString().slice(0, 10), endDate.toISOString().slice(0, 10), selectedCity) : console.log('nothing');


return (
        <div>
            <p>Create trip</p>
            <button onClick={() => closeModal(false)}>X</button>
            <select
                onChange={event => setSelectedCity(event.target.value)}
                defaultValue={selectedCity}
            >
                {CITIES_LIST.map((city) => <option value={city}>{city}</option>)}
            </select>
            <label>
        City
        
      </label>
      <div>
        <label>start date
      <DatePicker
        selectsStart
        selected={startDate}
        minDate={date}
        maxDate={range}
        onChange={date => setStartDate(date)}
        startDate={startDate}
      />
      </label>
<label>end date
      <DatePicker
        selectsEnd
        selected={endDate}
        onChange={date => setEndDate(date)}
        endDate={endDate}
        startDate={startDate}
        minDate={startDate}
        maxDate={range}
     />
     </label>
    </div>
      <button onClick={() => closeModal(false)}>Cancel</button>
      <button onClick={() => closeModal(false)}>Save</button>
        </div>

        
    )
}

export default Modal