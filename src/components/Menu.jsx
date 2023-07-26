import React from 'react'

const Menu = ({menu}) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">      
      {
        menu.map((item,index) => (
          <div key={index} className="border shadow-lg rounded-lg cursor-pointer hover:scale-105 ease-in-out 
          duration-300">
            <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg"/>
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold capitalize">{item.name}</p>
              <p>
                <span className="text-primary">${item.price}</span>
              </p>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default Menu