import { createContext, useState, useId } from "react";

export const TripsContext = createContext()

export const TripsProvider = ({children}) => {
    const [trips, setTrips] = useState(
        [{id: useId(), city: 'london', startDate: '2024-03-01', endDate: '2024-03-04', isSelected: true}, 
        {city: 'kyiv', startDate: '2024-03-01', endDate: '2024-03-04', isSelected: false, id: useId()}])
    const addTripToList = (tripToAdd) => {
        const result = [...trips, tripToAdd]
        return setTrips(result)
    }
    const selectTrip = (id) => {
    const result = trips.map(trip => {
        if(trip.id === id) {
            return {...trip, isSelected: true}
        } else {
            return {...trip, isSelected: false}
        }
    })

    setTrips(result)
    }
    const value = { trips, addTripToList, selectTrip }

    return (
        <TripsContext.Provider value={value}>{children}</TripsContext.Provider>
    )
}