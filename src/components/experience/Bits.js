import React from 'react'
import './Bits.css'
import bits from '../../Photos/bits.png'
const Bits = () => {
  return (
    <div className="bits">
      <div className="image">
        <img src={bits} alt="bits" />
      </div>
      <div className="content">
        <h5 className="heading-bits">BITS PILANI</h5>
        <p>B.E Mechanical Engineering</p>
        <p>2016-2020</p>
      </div>
    </div>
  )
}

export default Bits
