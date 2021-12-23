import React, { useState } from 'react'
import { FaRegLightbulb } from 'react-icons/fa'

const ModalCard = () => {
  
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }
  
  return (
    <div>
      <button className='button' onClick={toggleModal}>
        <FaRegLightbulb color='pink' />
      </button>
      
      {modal && (
        <div class="modal is-active">
        <div onClick={toggleModal} class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Fun Facts</p>
            <button onClick={toggleModal} class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            
            <p className='notification'>It takes <span className='has-text-danger is-size-4'>12 pounds</span> of milk to make just one gallon of ice cream.</p>
            <figure class="image is-128x128 is-inline-block">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F439%2F355%2Foriginal%2Fvector-milk-icon.jpg&f=1&nofb=1" />
            </figure>

            <p className='notification'>The average American eats <span className='has-text-danger is-size-4'>48 pints</span> of ice cream per year, more than any other nationality. The residents of <span className='has-text-black is-size-5'>Portland, Oregon</span> eat more ice cream than any other U.S. city. <br /><br /> The countries that consume the most ice cream after the U.S. are <span className='has-text-black is-size-5'>New Zealand</span> and <span className='has-text-black is-size-5'>Australia</span>. They love ice cream down under!</p>
            
            <p className='notification is-info'>The only dessert item that has higher sales in the U.S. than ice cream is cookies. Take that, cake!</p>
            <figure class="image is-128x128 is-inline-block">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F553%2F360%2Foriginal%2Fchocolate-chip-cookie-vector.jpg&f=1&nofb=1" />
            </figure>

            <p className='notification'>Ice cream has been around for so long that we don't know who invented it! <span className='has-text-black is-size-5'>Ancient Greeks</span> ate a crude form of ice cream in the <span className='has-text-danger is-size-5'>5th Century, B.C.</span></p>

            <p className='notification is-danger is-light'>The first ice cream parlor opened in <span className='has-text-black is-size-5'>New York City</span> in <span className='has-text-black is-size-5'>1776</span>.</p>
            <figure class="image is-128x128 is-inline-block">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F26%2F7c%2Fec%2F267cec9916914b278af1b5c2fcc5d441.jpg&f=1&nofb=1" />
            </figure>

            <p className='notification'><span className='is-size-4 has-text-danger'>The most popular flavor of ice cream is vanilla.</span><br /><br /><span className='has-text-black is-size-5'>Cookies 'N Cream</span> was invented in <span className='has-text-danger is-size-5'>1983</span> <br /> <span className='is-size-5 has-text-black'>Cookie Dough</span> was invented in <span className='has-text-danger is-size-5'>1991</span></p>

            <p className='notification'>The biggest ice cream sundae ever was made in <span className='has-text-black is-size-5'>Edmonton, Canada</span> in <span className='has-text-danger is-size-5'>1988</span>. It weighed in at <span className='has-text-danger is-size-3'>54,917 pounds</span>.</p>
            <figure class="image is-128x128 is-inline-block">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.downloadclipart.net%2Flarge%2F11703-ice-cream-cone-blue-scoops-design.png&f=1&nofb=1" />
            </figure>

          </section>
        </div>
      </div>
      )}


    </div>
  )
}

export default ModalCard
