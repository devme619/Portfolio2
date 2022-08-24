import { Card } from '@mui/material'
import React from 'react'
import AmazonReviews from './amazonreviews/AmazonReviews'
import ExpenseTracker from './expensetracker/ExpenseTracker'
import MovieDekho from './moviedekho/MovieDekho'
import MovieRevenue from './movierevenue/MovieRevenue'
import Pixabay from './pixabay/Pixabay'
import './Project.css'
const Project = () => {
  return (
    <div id='projects' style={{border: '#eaeaea solid', boxShadow: 'black 2px 3px 17px'}}>
    <Card className="projects">
      <h3>Projects</h3>
      <div className="project-list">
        <Card><MovieDekho/></Card>
        <Card><ExpenseTracker/></Card>
        <Card><Pixabay/></Card>
        <Card><AmazonReviews/></Card>
        <Card><MovieRevenue/></Card>
      </div>
    </Card>
  </div>
  )
}

export default Project