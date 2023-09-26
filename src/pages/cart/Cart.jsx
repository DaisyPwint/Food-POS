import { useDispatch, useSelector } from 'react-redux';
import { TrashIcon } from '@heroicons/react/24/outline';
import BillInfo from '../../components/BillInfo';
import { Link, useNavigate } from 'react-router-dom';
import { increase,decrease, removeFromCart } from '../../slices/cartSlice';

const Cart = () => {
  const {items,totalPrice} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const uniqueItems = items.reduce((uniqueObj, item) => {
    if (item.options === undefined || (Array.isArray(item.options) && item.options.length === 0)) {
      // Check if there's already an item for empty options
      if (!uniqueObj.emptyOptionsItem) {
        uniqueObj.emptyOptionsItem = { ...item, amount: 0 };
      }
      uniqueObj.emptyOptionsItem.amount += item.amount;
    } else {
      const sameValue = item.name + JSON.stringify(item.options);
      if (!uniqueObj[sameValue]) {
        uniqueObj[sameValue] = { ...item };
      }
    }
    return uniqueObj;
  }, {})
  

  const cartItems = Object.values(uniqueItems);

  const handleCheckout = () => {
    navigate('/checkout');
  }
  // console.log(cartItems);
  const handleRemoveFromCart = (item) => {
    // Dispatch the removeFromCart action to remove the item from the Redux store
    dispatch(removeFromCart(item));

    // Update the uniqueItems object locally to reflect the removed item
    if (item.options === undefined || (Array.isArray(item.options) && item.options.length === 0)) {
      uniqueItems.emptyOptionsItem.amount -= item.amount;
    } else {
      const sameValue = item.name + JSON.stringify(item.options);
      if (uniqueItems[sameValue]) {
        uniqueItems[sameValue].amount -= item.amount;
      }
    }
  }
  

  return (
    <section>
      <h1 className="text-2xl">
        {cartItems.length > 0 ? 'Shopping Cart' : 'Your cart is empty'}
      </h1>
      <hr className='my-8'/>
      <div className="mt-3 flex flex-col md:flex-row gap-20 justify-center"> 
      {cartItems.length > 0 ? (
        <>
          <div className="flex-col w-3/4">
          {
          cartItems.map((item) => (
            <div
              className="flex items-center justify-between p-3 my-2 border rounded-md shadow-md"
              key={item.id}
            >
              <div className="flex items-center space-x-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex flex-col">
                  <h1 className="text-xl capitalize">{item.name}</h1>
                  {item.options &&
                    item.options.map((option) => (
                      <span key={option} className="text-gray-600">
                        {option.value} 
                      </span>
                    ))}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <h1 className="font-xl">
                  ${item.price}
                </h1>
                <div className="flex space-x-2">
                  <button className="ms-2 px-3 bg-primary-200 text-white rounded-md" onClick={() => dispatch(decrease(item))}>-</button>
                  <h1 className="font-xl">
                    {item.amount}
                  </h1>
                  <button className="ms-2 px-3 bg-primary-200 text-white rounded-md" onClick={() => dispatch(increase(item))}>+</button>
                </div>
                <button className="ms-2 py-[3px] px-3 bg-red-600 text-white rounded-md" onClick={() => dispatch(handleRemoveFromCart(item))}>
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))
          }     
          </div>
          <div className="w-2/5">
            <h1 className="mb-4">Cart Totals</h1>
            <BillInfo totalPrice={totalPrice}/>
            <button className="w-full bg-primary-200 text-white px-4 py-2 mt-4 rounded-md hover:bg-primary-dark" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>) 
        : <Link to="/menu" className="text-slate-600 mt-10">Your cart is empty! Why not continue shopping and explore our delightful coffee and treats? ☕🍰</Link>
      }
      </div>
    </section>
  );
};

export default Cart;
