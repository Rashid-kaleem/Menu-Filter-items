import './App.css';
import items from './Data';
import { useState } from 'react';
import Categories from './Categories';
import Menu from './Menu';


const allCategories = ['all', ... new Set(items.map((item)=>item.category))];

function App() {

  const[menuItem, setMenuItems] = useState(items)
  const[categories,setCategories] = useState(allCategories);

  const filterItems = (category) =>{
    if(category==='all'){
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item)=>item.category===category);
    setMenuItems(newItems);

  }


  return (
   <main className='menu section'>
    <div className='title'>
      <h2>Our Menu</h2>
      <div className='underline'></div>
    </div>
    <Categories categories={categories}   filterItems={filterItems}></Categories>
    <Menu items={menuItem}> </Menu>
   </main>
  );
}

export default App;
