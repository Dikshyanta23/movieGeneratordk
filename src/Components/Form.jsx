import React from 'react'

const Form = ({number, setNumber, handleSubmit}) => {
  return (
    <section className='form' onSubmit={handleSubmit}>
        <form >
            <label htmlFor="num">Movie number: </label>
            <input type="number" id='num' className='input-number' value={number} min = '1' max = '10' onChange = {(e)=> setNumber(e.target.value)}/>
            <button type= "submit" className='btn'>Generate</button>

        </form>
      
    </section>
  )
}

export default Form
