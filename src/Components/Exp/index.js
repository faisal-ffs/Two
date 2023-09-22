import React from 'react'

function index() {
  return (
    <form className=' ml-40 mt-40'>
    <div className='bg-red-300 w-60 h-80'>
    <div className='m-2 p-4'>
      <label>Title</label>
        <input type='text'></input>
    </div>
    <div className='m-6 '>
      <label>Amount</label>
        <input type='Number '></input>
    </div>
    <div className='m-2 ml-6 '>
        <input type='Date' min="2019-01-01" max="2022-12-22"></input>
    </div>
    </div>
    <div className='m-3 bg-red-600 w-20 text-white rounded-xl'>
      <button type='submit' >Add Expense</button>
    </div>
    </form>
  )
}
export default index