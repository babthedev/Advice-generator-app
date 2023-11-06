import React from 'react'

const Advice = ({ advice, onClick }) => {
  return (
    <div className='flex flex-col items-center justify-center w-4/5 p-2 mx-auto text-center lg:w-2/5 rounded-2xl h-3/5 bg-darkGrayishBlue text-lightCyan'>
        <h5 className=' text-neonGreen'>ADVICE #{advice.id}</h5>
        <h3 className='my-10 text-xl font-bold'>"{advice.advice}"</h3>
        <img src="./images/pattern-divider-mobile.svg" className='mb-6' alt="" />
        <div className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-neonGreen">
        <img src="./images/icon-dice.svg" className='cursor-pointer' onClick={onClick} alt="" />
        </div>
    </div>
  )
}

export default Advice