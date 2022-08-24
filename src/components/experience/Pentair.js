import React from 'react'
import pentair from '../../Photos/pentair.png'
import './Pentair.css'
const Pentair = () => {
  return (
    <div className="pentair">
      <div className="image-pentair">
        <img src={pentair} alt="pentair" />
      </div>
      <div className="content">
        <h5 className="heading-pentair">Pentair Water India Private Limited</h5>
        <p>Intern</p>
        <p>May 2018-Jul 2018</p>
      </div>
    </div>
  )
}

export default Pentair
