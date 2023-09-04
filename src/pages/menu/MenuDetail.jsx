import { useGetMenuByIdQuery } from "../../app/services/jsonServerApi";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import OptionSelector from "../../components/OptionSelector";
import { useState } from "react";

const MenuDetail = () => {
  const {id} = useParams();
  const {data:item,isLoading,error} = useGetMenuByIdQuery(id);
  const location = useLocation();
  const [ options, setOptions] = useState(null);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  const handleOption = (value) => {
    setOptions({
      ...value
    });
  }

  const handleAddToCart = (event) => {
    event.preventDefault();
    console.log(options);
  }

  return (
    <section>
      <Link to={`..${search}`} relative="path" ><ArrowLeftIcon className="h-5 w-5 inline-block"/>Back to {type} menu</Link>
      {
        error ? (<p>
          Error Found!
        </p>) : isLoading ? (<p>Loading...</p>) :
        item ? (
          <div className="flex flex-col md:flex-row gap-7 mt-8">
              <img src={item.image} alt={item.name} className="w-[300px] h-[300px] object-cover rounded-lg"/>
              <div className="flex flex-col gap-5">
                <h1 className="capitalize mt-5 md:mt-0">{item.name}</h1>
                <p className="text-slate-600">{item.description}</p>
                <p className="flex text-3xl font-bold"><span className="text-sm self-start text-primary">$</span>{item.price}</p>
                <form onSubmit={handleAddToCart}>
                  {
                    Object.entries(item).map(key => (
                      <OptionSelector key={key[0]} options={key[1]} title={key[0]} optionValue={handleOption} />
                    ))
                  }   
                  <label className="mt-2 ml-2">Amount<input type="number" min="1" max="5" step="1" defaultValue="1" className="h-[40px] border m-3 px-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"/></label>
                  <button type="submit" className="flex mt-5 ms-2 px-3 py-2 border-2 border-primary bg-primary text-white rounded-md drop-shadow-md outline-none">Add to cart</button>               
                </form>
              </div>
            </div>
        ) : null
      }
    </section>
  )
}

export default MenuDetail
