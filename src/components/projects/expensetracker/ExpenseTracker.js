import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import './ExpenseTracker.css'
const ExpenseTracker = () => {
  return (
    <div className="expensetracker">
      <div className="content">
        <h5 className="heading-expensetracker">Expense Tracker</h5>
        <p>
          Add your daily expenses and compare them with every months expenses.
        </p>
        <a target='blank' href="https://github.com/devme619/Expense-Tracker"><GitHubIcon fontSize="large"/></a>
      </div>
    </div>
  )
}

export default ExpenseTracker
