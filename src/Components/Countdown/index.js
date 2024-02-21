import Countdown from 'react-countdown';


const Timer = ({date}) => {
    const renderer = ({days, hours, minutes, seconds}) => {
        return <p>days : {days} hours: {hours} minutes: {minutes} seconds: {seconds}</p>
    }
   return <Countdown date={new Date(date)} renderer={renderer}/>
}

export default Timer