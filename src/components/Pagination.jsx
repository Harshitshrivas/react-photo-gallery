import React from 'react'

const Pagination = ({index, setIndex, setUserdata}) => {
  return (
    
      <div className="flex justify-center items-center p-4 gap-6">
        <button
          onClick={() => {
            if (index > 1) setIndex(index - 1);
            setUserdata([]);
          }}
          className="bg-amber-400 cursor-pointer text-sm active:scale-95 text-black rounded px-4 font-semibold py-2"
        >
          Prev
        </button>
        <h3 className="font-semibold">Page {index}</h3>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserdata([]);
          }}       
          className="bg-amber-400 cursor-pointer text-sm active:scale-95 text-black rounded px-4 font-semibold py-2"
        >
          Next
        </button>
      </div>
    
  )
}

export default Pagination
