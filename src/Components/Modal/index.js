import { useContext, useId, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { CITIES_LIST, YOUR_API_KEY } from '../../Common/index'
import axios from 'axios';
import { TestContext, TripsContext } from '../../Context';

const Modal = ({closeModal}) => {

const {addTripToList, trips } = useContext(TripsContext)

const [date, setDate] = useState(new Date());
const [startDate, setStartDate] = useState();
const [endDate, setEndDate] = useState();
const [selectedCity, setSelectedCity] = useState('')

const range = new Date();
range.setDate(date.getDate() + 15)

const id = useId()
console.log(id);


// if(startDate && endDate && selectedCity)  {
//   axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedCity}/${startDate.toISOString().slice(0, 10)}/${endDate.toISOString().slice(0, 10)}?unitGroup=metric&include=days&key=${YOUR_API_KEY}&contentType=json`)
//   .then(res => {
//     console.log(res.data);
//   })
//   console.log('request sent');
// } 

const handleSubmit = () => {
  addTripToList({city: selectedCity, startDate: startDate.toISOString().slice(0, 10), endDate: endDate.toISOString().slice(0,10), isSelected: false, id })
  closeModal(false)
}

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
      <button onClick={handleSubmit}>Save</button>
        </div>

        
    )
}

export default Modal