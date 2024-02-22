const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const getDayName = (day) => {
    const data = new Date(day).getDay()
    return dayNames[data]
}