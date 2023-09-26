import { useGetMenuQuery } from "../../app/services/api";
import { Link, useSearchParams } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../slices/cartSlice';

const Menu = () => {
  const {data:menu,isLoading,error} = useGetMenuQuery();
  // const {menu} = useSelector(state => state.menu);
  const dispatch = useDispatch();
  
  const [searchParams,setSearchParams] = useSearchParams();
  const filterType = searchParams.get('category');

  const displayMenu = filterType ? menu.filter(category => category.catType === filterType) : menu;  
  const displayCategory = [...new Set(menu.map(item => item.catType))];

  return (
    <section>
      {
      error ? (<p>An error occured!:{error.originalStatus}</p>) : isLoading ? (<p>Loading...</p>) : menu ? (
        <>
          <h1>Menu Category</h1>
    
          <div className="flex flex-wrap my-4">
                {
                  filterType ? <button onClick={() => setSearchParams({})} className="flex items-center p-3 m-2 cursor-pointer border-2 border-primary-200 rounded-md drop-shadow-md outline-none hover:bg-primary-200 hover:text-white">All</button> : null
                }
                {
                  displayCategory.map(category => (
                    <button
                  key={category}
                  className={`flex items-center p-2 m-2 cursor-pointer transition duration-150 border-2 border-primary-200 rounded-md drop-shadow-md outline-none hover:bg-primary-200 hover:text-white ${filterType === category ? 'bg-primary-200 text-white': ''}`}
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
                    <p className="text-xl mt-3 font-bold text-primary-200"><span className="text-sm">$</span>{item.price}</p>
                  </div>
                </Link>
                <div className='flex items-center justify-end gap-5 pt-2 px-4 pb-4'>       
                    <button className='bg-primary-200 rounded-md outline-none py-2 px-3' onClick={() => dispatch(addToCart(item))}><PlusIcon className="h-6 w-6 text-white"/></button>
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