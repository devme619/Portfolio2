import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
const ExpenseTracker = () => {
  return (
    <div className="expensetracker">
      <div className="content">
        <h5 className="heading-expensetracker">Expense Tracker</h5>
        <p>
          Add your daily expenses and compare them with every months expenses.
        </p>
        <a target='blank' href="https://github.com/devme619/Expense-Tracker"><GitHubIcon/></a>
      </div>
    </div>
  )
}

export default ExpenseTracker
