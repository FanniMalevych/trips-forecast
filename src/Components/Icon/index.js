import useImage from "../../Common/useImg";
import './index.css'


  export const Icon = ({name}) => {
    const {image} = useImage(name, 'icon')

    return <img className='icon-container' src={image} alt={name}/>  }

