import Countdown from 'react-countdown';
import './index.css'


const Timer = ({date}) => {
    const renderer = ({days, hours, minutes, seconds}) => {
        return (
            <div className='timer'>
                <div className='time'><h4>{days}</h4><p>days</p></div>
                <div className='time'><h4>{hours}</h4><p>hours</p></div>
                <div className='time'><h4>{minutes}</h4><p>minutes</p></div>
                <div className='time'><h4>{seconds}</h4><p>seconds</p></div>
            </div>
       
        )
    }
   return <Countdown date={new Date(date)} renderer={renderer}/>
}

export default Timer