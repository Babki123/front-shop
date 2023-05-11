import './App.scss';
import { useContext, useEffect } from 'react';
import { ProductContext } from './Context/ProductProvider';
import { Outlet } from 'react-router-dom';
import Navigation from './Component/Nav/Navigation.js';


function App() {

  const [state,dispatch] = useContext(ProductContext);
  //appell au chargement de l'application pour charger les données de l'API
  useEffect(() =>{
    //appel fakestore API pour la liste des produits 
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>{dispatch({type:"SET_PRODUCT", payload : json});
                  console.log(json); });

  } , [])
  return (
    <div className="App">
        <Navigation/>
      <div className="display">
      <Outlet />
      </div>
        
    </div>
  );
}



export default App;
