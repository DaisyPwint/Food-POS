import { useGetMenuByIdQuery } from "../../app/services/api";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import OptionSelector from "../../components/OptionSelector";
import { useRef,useState } from "react";
import { useDispatch} from "react-redux";
import { addToCart } from "../../slices/cartSlice";

const MenuDetail = () => {
  const {id} = useParams();
  const {data:menu,isLoading,error} = useGetMenuByIdQuery(id);
  // const {menu} = useSelector(state => state.menu);
  const [selectedOptions,setSelectedOptions] = useState({});
  const dispatch = useDispatch();
  const location = useLocation();
  const amountRef = useRef();
  
  // const item = menu && menu.find(item => item.id === parseInt(id));

  const search = location.state?.search || "";
  const type = location.state?.type || "all";
  
  const handleOption = (title, value, checked) => {
    setSelectedOptions((prev) => {
      if(checked){
        return {...prev,[title]: [...(prev[title] || []),value]};
      }else{
        return {...prev,[title]: (prev[title] || []).filter(option => option !== value)}
      }
    });
  };

  const handleAddToCart = (event) => {
    event.preventDefault();
    const enteredAmount = amountRef.current.value;
    const option = Object.entries(selectedOptions).reduce((acc,[title,value]) => {
      acc.push({title,value});
      return acc
    },[])

    dispatch(addToCart({
      image: menu.image,
      name: menu.name,
      price: menu.price,
      amount: enteredAmount,
      options: option
    }))
  }

  if(!menu){
    return <p>Menu item not found!</p>
  }

  return (
    <section>
      <Link to={`..${search}`} relative="path" ><ArrowLeftIcon className="h-5 w-5 inline-block"/>&nbsp;Back to {type} menu</Link>
      {
        error ? (<p>
          Error Found!
        </p>) : isLoading ? (<p>Loading...</p>) :
        menu ? (
          <div className="flex flex-col md:flex-row gap-7 mt-8">
            <img src={menu.image} alt={menu.name} className="w-[300px] h-[300px] object-cover rounded-lg"/>
            <div className="flex flex-col gap-5">
              <h1 className="capitalize mt-5 md:mt-0">{menu.name}</h1>
              <p className="text-slate-600">{menu.description}</p>
              <p className="flex text-3xl font-bold"><span className="text-sm self-start text-primary-200">$</span>{menu.price}</p>
              <form onSubmit={handleAddToCart}>
                {
                  Object.entries(menu).map(([key,value]) => (
                    <OptionSelector key={key} options={value} title={key} optionValue={handleOption} selectedOptions={selectedOptions[key] || []} />
                  ))
                }   
                <label className="mt-2 ml-2">Amount<input type="number" min="1" max="5" step="1" defaultValue="1" ref={amountRef} className="h-[40px] border m-3 px-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-inset"/></label>
                <button type="submit" className="flex mt-5 ms-2 px-3 py-2 border-2 border-primary-200 bg-primary-200 text-white rounded-md drop-shadow-md outline-none">Add to cart</button>               
              </form>
            </div>
          </div>
        ) 
        : null
      }
    </section>
  )
}

export default MenuDetail
