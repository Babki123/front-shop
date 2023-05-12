import { NavLink, useLoaderData, useParams } from "react-router-dom";
import Produit from "../../Data/TaxCalc";
import "./ProductPage.scss"
import { useState,useEffect, useContext } from "react";
import Category from "../Category/Category.js"
import { ProductContext } from "../../Context/ProductProvider";


const ProductPage = () =>{
    //mise en place du state globale
    const [state,dispatch] = useContext(ProductContext);
    //recuperation des données du loader
    const product =  useLoaderData();
    const {id} = useParams();
    //determiner si on utilise la valeur local ou celle de l'API 
    const productUsed = state.products == null ? product : state.products[id-1];
    // classe du calcul des taxes
    const calc = new Produit(productUsed.price);
    //state pour la mise a jour du prix 
    const [price, setPrice] = useState(productUsed.price);
    const [disable,setDisable] = useState("");

    //Verification du prix pour activation/desactivation du boutton
         const isPriceEqual = () => {
            //Conversion en string du a la valeur du prix dans le champs
            if(price.toString() === product.price.toString()){
               setDisable(true);
            }else{
                setDisable(false);
            }
        }
        
    //Mise a jour du prix sur le changement de l'inpunt
        const handleChange = (e) => {
                setPrice(e.target.value)
            }


    // //Fonction pour changer le prix du produit
    const updatePrice = async(event) => {
        //empêcher le rechargement de la page
            event.preventDefault()
            const payload = {...product,price:price }
            // Call API pour Update le prix 
             fetch('https:fakestoreapi.com/products/'+id,{
                 method:"PUT",
                   body:JSON.stringify(
                           payload
                 )})
                .then(res=>{ res.json()})
                .then(json=> console.log(json))
                //mise a jour du produit dans le state
                dispatch({type:"UPDATE_PRODUCT", payload : payload });
                 }
    //Mise a jour de la page avec la modification du prix pour contourner l'asynchronicite des states
    useEffect( () =>{
        isPriceEqual();
    },[price])

    return(
     <article aria-label="Presentation du produit" className="productPage">
        <header >
        <NavLink className="larger" to="../products"> <img src="/images/arrow.png" className="arrow-icon"/> </NavLink> 
        <h1>{product.title}</h1>
        </header>
        
        <div className="container">
            <img className="picture" src= {product.image} alt={product.title}/>
                <div  className="description">  
                    <h3 className="$bgColor"> Description</h3>
                    <p> {product.description}</p>
                </div>
                <div  className="category">
                    <h3 className="$bgColor"> Category</h3>
                      <Category category={product.category}/> 
                </div>
                <form className="collumn "  >
                        <label> 
                        <h3 className="$bgColor"> Price</h3> 
                        <input type="number" id="price" onChange={(event) => { handleChange(event)}} pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" placeholder={productUsed.price} value={price}  />
                        </label>
                        <p> Price (including VAT) : {calc.addTaxe(price)}€</p>
                        <button className="button" onClick={(event) => { updatePrice(event)}}  disabled={ disable } > Update Product </button>      
                </form>
            </div>
         
         </article>
    )
}

export const ProductPageLoader = async ({params}) => {
   const { id } = params;
   const res =  await fetch('https://fakestoreapi.com/products/'+id);
    return res
}

export default ProductPage;