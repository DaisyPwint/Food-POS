import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Category from "./components/Category";
import {categories,menu} from './data'

const allCategory = {
  'id' : 0,
  'catName' : 'all'
}

const categoriesWithAll = [allCategory,...categories];

function App() {
  const [menuItems,setMenuItems] = useState(menu);
  const [catItems,setCatItems] = useState(categoriesWithAll);

  const filterTypes = (category) => {
    if(category === 'all'){
      setMenuItems(menu);
      return
    }
    setMenuItems(menu.filter((item) => (item.category === category)));
  }

  return (
    <>
      <Header/>
      <div>
        <Category categories={catItems} filterTypes={filterTypes}/>
        <Menu menu={menuItems}/>
      </div>
    </>
  )
}

export default App
