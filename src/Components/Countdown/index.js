import { useState, useEffect } from "react";

const Timer = ({date}) => {
    const [expiryTime, setExpiryTime] = useState("");
    const [countdownTime, setCountdownTime] = useState({
      countdownDays: "",
      countdownHours: "",
      countdownMinutes: "",
      countdownSeconds: "",
    });
    useEffect(() => {
        setExpiryTime(new Date(date))
    }, [date])
    const countdownTimer = () => {
      const timeInterval = setInterval(() => {
        const countdownDateTime = new Date(expiryTime).getTime();
        const currentTime = new Date().getTime();
        const remainingDayTime = countdownDateTime - currentTime;
        const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
        const totalHours = Math.floor(
          (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const totalMinutes = Math.floor(
          (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const totalSeconds = Math.floor(
          (remainingDayTime % (1000 * 60)) / 1000
        );
        const runningCountdownTime = {
          countdownDays: totalDays,
          countdownHours: totalHours,
          countdownMinutes: totalMinutes,
          countdownSeconds: totalSeconds,
        };
        setCountdownTime(runningCountdownTime);
        if (remainingDayTime < 0) {
          clearInterval(timeInterval);
          setExpiryTime(false);
        }
      }, 1000);
    };
    useEffect(() => {
      countdownTimer();
    });
    
    return(
        <><p>timer - {countdownTime.countdownDays} days : {countdownTime.countdownHours} hours : {countdownTime.countdownMinutes} minutes </p></>
    )
}

export default Timer