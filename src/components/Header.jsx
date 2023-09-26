import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux';

const navigation = [
  {
    name: 'Home', href: '.',
  },  
  {
    name: 'Menu', href: 'menu',
  },
  {
    name: 'Cart', href: 'cart',
  },
  {
    name: 'Checkout', href: 'checkout',
  },
  {
    name: 'Orders', href: 'orders',
  }
]

const Header = () => {
  const [mobileMenuOpen,setMobileMenuOpen] = useState(false);
  const {totalAmount} = useSelector(state => state.cart);
  const navigate = useNavigate();

  const handleCartButtonClick = () => {
    navigate('/cart');
  }

  return (
    <>
      <nav className="max-w-[1640px] mx-auto flex items-center justify-between py-4 px-10 lg:px-8 border-b-2">
        <h1 className="before:content-['C'] before:bg-primary-200 before:text-[#fff]
        before:p-[10px] before:pl-[15px] before:pr-[15px] before:font-light before:text-[14px] md:before:text-[17px] before:rounded-full
        before:mr-2.5 w-[300px] text-[18px] md:text-[20px] inline-block">Coffee Shop
        </h1>
        <div className="flex lg:hidden">
          <button type='button' className='-m-2.5 inline-flex items-center justify-center rounded-md p-.25 text-gray-700' onClick={() => setMobileMenuOpen(true)}>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className='hidden lg:flex gap-x-3 lg:gap-x-5'>
          {
            navigation.map((item) => (
              <NavLink key={item.name} to={item.href} className={`block px-3 py-2 rounded-md hover:bg-[#000] transition duration-0 hover:duration-300 hover:text-white ${({isActive}) => isActive ? 'active' : null}`}>{item.name}</NavLink>
            ))
          }
        </div>
        <button type="button" className="relative hidden w-[300px] lg:flex lg:justify-end" onClick={handleCartButtonClick}>
          <FaShoppingCart size={25} className="mr-2 text-primary-200"/>
          <span className="sr-only">Cart</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-gray-950 border-2 border-white rounded-full -top-4 -right-4 dark:border-gray-900">{totalAmount}</div>
        </button>
      </nav>

      {/* mobile view */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <h1 className="before:content-['C'] before:bg-primary-200 before:text-[#fff]
              before:p-[10px] before:pl-[15px] before:pr-[15px] before:font-light before:text-[14px] md:before:text-[17px] before:rounded-full
              before:mr-2.5 text-[18px] md:text-[20px] inline-block">Coffee Shop
              </h1>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {
                    navigation.map((item) => (
                      <NavLink key={item.name} to={item.href} className='block px-3 py-2 rounded-md transition duration-0 hover:duration-100'>{item.name}</NavLink>
                    ))
                  }
                </div>
              </div>
            </div>
          </Dialog.Panel>
      </Dialog>
    </>
  )
}

export default Header