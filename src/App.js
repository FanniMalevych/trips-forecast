import './App.css';
import { useState } from 'react';
import Modal from './Components/Modal';
import Card from './Components/Card';
import { TripContext } from './Context';
import SearchBar from './Components/SearchBar';

function App() {
  const [openModal, setOpenModal] = useState(false)


  return (
    <TripContext.Provider>
    <div className="App">
      <p>search bar</p>
      <SearchBar />
      <div className='card-container'>
      <ul className="cards">
        <Card city='london'/>
      <Card city='tokyo'/>
      <Card city='london'/>
      <Card city='tokyo'/>
      <Card city='london'/>
      <Card city='tokyo'/>
      <Card city='london'/>
      <Card city='kyiv'/>
      </ul></div>
      
      <div>
        <div>list of trips
        </div>Berlin</div>
        <div><button onClick={() => {setOpenModal(true)}}>add trip</button></div>
       {openModal && <Modal closeModal={setOpenModal}/>}

    </div>
    </TripContext.Provider>
  );
}

export default App;
