import React from 'react'
import { useGetMenuQuery } from "../../app/services/jsonServerApi";
import { Link, useSearchParams } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

const Menu = () => {
  const {data:menu,isLoading,error} = useGetMenuQuery();

  const [searchParams,setSearchParams] = useSearchParams();
  const filterType = searchParams.get('category');

  const displayMenu = filterType ? menu.filter(category => category.catType === filterType) : menu;  
  const displayCategory = [...new Set(menu.map(item => item.catType))];

  return (
    <section>
      {
      error ? (<p>Error occured!</p>) : isLoading ? (<p>Loading...</p>) : menu ? (
        <>
          <h1>Menu Category</h1>
    
          <div className="flex flex-wrap my-4">
                {
                  filterType ? <button onClick={() => setSearchParams({})} className="flex items-center p-3 m-2 cursor-pointer border-2 border-primary rounded-md drop-shadow-md outline-none hover:bg-primary hover:text-white">All</button> : null
                }
                {
                  displayCategory.map(category => (
                    <button
                  key={category}
                  className={`flex items-center p-2 m-2 cursor-pointer transition duration-150 border-2 border-primary rounded-md drop-shadow-md outline-none hover:bg-primary hover:text-white ${filterType === category ? 'bg-primary text-white': ''}`}
                onClick={() => setSearchParams({category: category})}
                >
                  <p>{category}</p>
                </button>
                  ))
                }
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">      
          {
            displayMenu.map((item) => (
              <div to={`${item.id}`} key={item.id} className="border shadow-lg rounded-lg">
                <Link to={`${item.id}`} state={{search : `?${searchParams.toString()}`,type: filterType}}>
                  <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg cursor-pointer hover:scale-90 ease-in-out 
                duration-300"/>
                  <div className='px-4 pt-4'>
                    <h1 className="capitalize">{item.name}</h1>
                    <p className="text-xl mt-3 font-bold text-primary"><span className="text-sm">$</span>{item.price}</p>
                  </div>
                </Link>
                <div className='flex items-center justify-end gap-5 pt-2 px-4 pb-4'>       
                    <PlusCircleIcon className="h-12 w-12 text-primary cursor-pointer"/>
                </div>                
              </div>
            ))
          }
          </div>
      </>
      ) : null
    }
    </section>
  )
}

export default Menu