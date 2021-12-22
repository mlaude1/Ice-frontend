import React, { useState } from 'react'

const ModalCard = () => {
  
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }
  
  return (
    <div>
      <button className='button' onClick={toggleModal}>
        Open card
      </button>
      
      {modal && (
        <div class="modal is-active">
        <div onClick={toggleModal} class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Modal title</p>
            <button onClick={toggleModal} class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            
            <h2 className='title is-size-4'>What kind of content should this be?</h2>
            <ul>
              <li>Fun facts</li>
              <li>Google Maps API</li>
            </ul>

          </section>
        </div>
      </div>
      )}


    </div>
  )
}

export default ModalCard
