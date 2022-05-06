import { Route, Routes } from 'react-router-dom';
import './App.css';
import {AnimatePresence} from 'framer-motion'
import {CreateContainer, Header, MainContainer} from "./components"
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions'
import { actionType } from './context/reducer';
import { useEffect } from 'react';
import OrderPlaced from './components/OrderPlaced';


function App() {
  const [{foodItems}, dispatch] = useStateValue()

  const fetchData = async ()=>{
    await getAllFoodItems().then((data)=>{
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems:data,
      })
    })
  }

  useEffect(()=>{fetchData()},[])
  return (
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen bg-stone-100 h-auto flex flex-col bg-primary">
      <Header />
      <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
        <Routes>
          <Route path="/" element={<MainContainer/>} />
          <Route path="/createItem" element={<CreateContainer/>} />
          <Route path="/orderplaced" element={<OrderPlaced/>} />
          
        </Routes>
      </main>
    </div>
    </AnimatePresence>
  );
}

export default App;
