import { createContext, useState, useId } from "react";

export const TripsContext = createContext()

const selectTrip = (trips, selectedTrip) => {
    const selected = trips.find(trip => trip.id === selectedTrip.id)
    // const deselesct = trips.map(trip => {trip.isSelected: false});
    return [...trips, {...selected, isSelected: true}]
}


export const TripsProvider = ({children}) => {
    const [trips, setTrips] = useState(
        [{id: useId(), city: 'london', startDate: '2024-03-01', endDate: '2024-03-04', isSelected: false}, 
        {city: 'kyiv', startDate: '2024-03-01', endDate: '2024-03-04', isSelected: true, id: useId()}])
    const addTripToList = (tripToAdd) => {
        const result = [...trips, tripToAdd]
        return setTrips(result)
    }
    const value = { trips, addTripToList }

    return (
        <TripsContext.Provider value={value}>{children}</TripsContext.Provider>
    )
}