import { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const Modal = ({closeModal}) => {
function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target)
}
const [date, setDate] = useState(new Date());
const [startDate, setStartDate] = useState();
const [endDate, setEndDate] = useState();

const range = new Date();
range.setDate(date.getDate() + 15)
console.log(range);



    return (
        <div>
            <p>Create trip</p>
            <button onClick={() => closeModal(false)}>X</button>
            <form method="post" onSubmit={handleSubmit}>
            <label>
        Pick a fruit:
        <select name="selectedFruit">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
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
      <button type="submit">Save</button>
            </form>
            
        </div>
    )
}

export default Modal