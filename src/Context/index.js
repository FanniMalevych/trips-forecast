import { createContext, useState } from "react";

export const TripsContext = createContext()

const selectTrip = (trips, selectedTrip) => {
    const selected = trips.find(trip => trip.id === selectedTrip.id)
    // const deselesct = trips.map(trip => {trip.isSelected: false});
    return [...trips, {...selected, isSelected: true}]
}


export const TripsProvider = ({children}) => {
    const [trips, setTrips] = useState([{id: 1, city: 'london', startDate: '10 oct', endDate: '12 oct', isSelected: false}, {city: 'kyiv', startDate: '2 march', endDate: '3 march'}])
    const addTripToList = (tripToAdd) => {
        const result = [...trips, tripToAdd]
        return setTrips(result)
    }
    const value = { trips, addTripToList }

    return (
        <TripsContext.Provider value={value}>{children}</TripsContext.Provider>
    )
}