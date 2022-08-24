import React from 'react'
import './Pixabay.css'
import GitHubIcon from '@mui/icons-material/GitHub';
const Pixabay = () => {
  return (
    <div className="pixabay">
      <div className="content">
        <h5 className="heading-pixabay">Search Images</h5>
        <p>
          Search Images through Pixabay API.
        </p>
        <a target='blank' href="https://github.com/devme619/Pixabay"><GitHubIcon fontSize="large"/></a>
      </div>
    </div>
  )
}

export default Pixabay
