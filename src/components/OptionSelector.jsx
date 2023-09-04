import React, { useState } from 'react'

const OptionSelector = ({options,title,optionValue}) => {
  const [selectedOptions,setSelectedOptions] = useState([]); 

  const handleOption = (value) => {
    setSelectedOptions(value);
    optionValue(value);
  }

  return (
    <>
      {
      Array.isArray(options) ? 
      <>
        <h1 className='mt-3'>{title}</h1>
        <div className="flex">
        {
          options.map((value, index) => (
              <label key={index} name={title} className={`p-2 m-2 rounded-md text-gray-900 border border-black cursor-pointer ${selectedOptions.includes(value) ? 'bg-gray-900 text-white' : ''}`}>
              <input type="radio" className='hidden' checked={selectedOptions === value} onChange={() => handleOption(value)}/>
              <div>{value}</div>
            </label>
          ))
        }
        </div>
      </> : null}
    </>
  )
}

export default OptionSelector

