import { type } from "@testing-library/user-event/dist/type";
import useImage from "../../Common/useImg";
import './index.css'


  export const Icon = ({name}) => {
    const {image} = useImage(name, type='icon')
    console.log(image);

    return <img className='icon-container' src={image} alt={name}/>  }

