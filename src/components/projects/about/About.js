import { Card } from '@mui/material'
import React from 'react'
import avatar from '../../../Photos/avatar.jpg'
import './About.css'
const About = () => {
  return (
    <div className='about' style={{marginTop:'60px'}}>
      <Card>
        <img className='avatar' src={avatar} alt='dev'></img>
        <div>
            <p style={{fontFamily:'cursive', textAlign:'center'}}>Hey there 👋 I'm Devendra Pratap Singh 👨‍💻</p>
        </div>
      </Card>
    </div>
  )
}

export default About
