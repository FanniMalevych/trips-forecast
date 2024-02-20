import { createContext, useState } from "react";

export const TripContext = createContext()

// const TripProvider = ({children}) => {
//     const [city, setCity] = useState()
//     return (
//         <TripContext.Provider
//         value={city}>
//             {children}
//         </TripContext.Provider>
//     )
// }