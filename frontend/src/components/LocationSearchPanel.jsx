import React from 'react'

const LocationSearchPanel = () => {
    const locations = ["74,Place Nagar,hjskldk","74,Place Nagar,hjskldk","75,Place Nagar,hjskldk","76,Place Nagar,hjskldk"]
  return (
    <div>
         {
            locations.map((elem, idx) => (
                <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                    <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                    <h4 className='font-medium'>{elem}</h4>
                </div>
            ))
        }
    </div>
  )
}

export default LocationSearchPanel