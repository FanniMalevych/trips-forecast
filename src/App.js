import './App.css';
import { useState, useContext } from 'react';
import Modal from './Components/Modal';
import Card from './Components/Card';
import TripProvider, {TripContext} from './Context';
import SearchBar from './Components/SearchBar';
import CardsContainer from './Components/CardContainer';

function App() {
  const [openModal, setOpenModal] = useState(false)
  
  return (
    <TripProvider>
    <div className="App">
      <p>search bar</p>
      <SearchBar />
      
      <CardsContainer />
      
      <div>
        <div>list of trips
        </div>Berlin</div>
        <div><button onClick={() => {setOpenModal(true)}}>add trip</button></div>
       {openModal && <Modal closeModal={setOpenModal}/>}

    </div>
    </TripProvider>
  );
}

export default App;
