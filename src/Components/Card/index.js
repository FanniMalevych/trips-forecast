import london from '../../Assets/london.jpeg'
import tokyo from '../../Assets/tokyo.jpeg'
import barcelona from '../../Assets/barcelona.jpeg'
import berlin from '../../Assets/berlin.jpeg'
import kyiv from '../../Assets/kyiv.jpeg'
import milan from '../../Assets/milan.jpeg'
import paris from '../../Assets/paris.jpeg'
import stockholm from '../../Assets/stockholm.jpeg'

import './index.css'

const Card = ({city, startDate, endDate}) => {
    const cities = {london, tokyo, barcelona, berlin, kyiv, milan, paris, stockholm}

    return (
        <div className="card">
        <div className='img-container'> 
            <img src={cities[city.toLowerCase()]} alt={city}  />
        </div>
       
        <h1>{city.toUpperCase()}</h1>
        <p>{startDate}</p>
        <p>{endDate}</p>
      </div>
    )
}

export default Card

