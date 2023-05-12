import './App.scss';
import { useContext, useEffect } from 'react';
import { ProductContext } from './Context/ProductProvider';
import { Outlet } from 'react-router-dom';
import Navigation from './Component/Nav/Navigation.js';


function App() {

  const [state,dispatch] = useContext(ProductContext);
  //appell au chargement de l'application pour charger les données de l'API
  useEffect(() =>{
    //recuperation du local storage
    const products = sessionStorage.getItem("products")
    //verification si une initialisation a deja eu lieu
    if(state.products === null && products == null){
      //si non => fetch data de l'api
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json =>{  dispatch({type:"SET_PRODUCT", payload : json});
            })
    }else{
      // si oui on recupere les data du localStorage
      dispatch({type:"SET_PRODUCT", payload : JSON.parse(products)})
    }
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
