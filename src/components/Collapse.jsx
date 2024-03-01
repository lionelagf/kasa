import React, { useState } from 'react'
import '../styles/sass/assets/css/collapse.css'

function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false)

  function click() {
    setIsOpen((isOpen) => !isOpen)
  }

  return (
    <section className='collapse'>
      <div className='collapse__section'>
        <div className='collapse__title'>
          <h3>{title}</h3>
          <button
            className={`collapse__chevron ${isOpen ? 'down' : 'up'}`}
            onClick={click}
          >
            <i className='fa-solid fa-chevron-up'></i>
          </button>
        </div>

        {isOpen && (
          <div className={'collapse__content'}>
            <div>{description}</div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Collapse
