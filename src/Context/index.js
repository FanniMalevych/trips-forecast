import { createContext, useState } from "react";

export const TripContext = createContext()

const TripProvider = ({children}) => {
    // const [city, setCity] = useState('london')
    // const [startDate, setStartDate] = useState('10 oct')
    // const [endDate, setEndDate] = useState('12 oct')
    // const [isSelected, setIsSelected] = useState(false)
    const [trip, setTrip] = useState({city: 'london', startDate: '10 oct', endDate: '12 oct', isSelected: false})
    return (
        <TripContext.Provider
        value={[trip]}>
            {children}
        </TripContext.Provider>
    )
}

export default TripProvider