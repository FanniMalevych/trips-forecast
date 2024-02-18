import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from './Components/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="App">
      <p>search bar</p>
      <div>
        <div>list of trips
        </div>Berlin</div>
        <div><button onClick={() => {setOpenModal(true)}}>add trip</button></div>
       {openModal && <Modal closeModal={setOpenModal}/>}

    </div>
  );
}

export default App;
