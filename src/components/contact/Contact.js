import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import './Contact.css'
import LinkIcon from '@mui/icons-material/Link';
const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <p className='head'>Let's get connected <LinkIcon color='primary' fontSize='large'/></p>
        <div className='logos'>
            <a rel="noopener noreferrer" target='blank' href='https://www.linkedin.com/in/devendra-pratap-singh-620b73156/'><LinkedInIcon fontSize='large' color=''/></a>
            <a rel="noopener noreferrer" target='blank' href='https://www.instagram.com/de_call_me_dev/'><InstagramIcon fontSize='large'/></a>
            <a rel="noopener noreferrer" target='blank' href='https://mail.google.com/mail/f2016404p@alumni.bits-pilani.ac.in'><EmailIcon fontSize='large'/></a>

        </div>
    </div>
  )
}

export default Contact
