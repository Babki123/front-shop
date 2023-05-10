import { useLoaderData, useParams } from "react-router-dom";
import Produit from "../../Data/TaxCalc";
import "./ProductPage.scss"
import { useState } from "react";
import Category from "../Category/Category.js"
const ProductPage = () =>{
   
    const product = useLoaderData();
    const calc = new Produit(product.price)
     const {id} = useParams();
     const [price, setPrice] = useState(product.price);

    // //Fonction pour changer le prix du produit
    const updatePrice = async(event) => {
        event.preventDefault();
    
         //empêcher le rechargement de la page
         event.preventDefault()
       
         // Call API pour Update le prix 
          fetch('https:fakestoreapi.com/products/'+id,{
              method:"PUT",
             body:JSON.stringify(
                 {
                      title: product.title,
                      price: price,
                      description: product.description,
                      image: product.image,
                      category: product.category
                  }
              )
          })
             .then(res=>res.json())
             //Update la valeur dans la state et affichage de la response du serveur
             .then(json=>{console.log(json);})

    }
    //Verification du prix pour activation/desactivation du boutton
        const isPriceEqual =() => {
            if(price == product.price){
                console.log("true")
                return "true";
            }else{
                console.log("false")
                return "false";
            }
        }
    //Mise a jour du prix sur le changement de l'inpunt
        const handleChange = (e) => {
                 setPrice(e.target.value);
              //comparaison du prix avec la valeur saisie pour activer/desactiver l'update du prix
            }

    return(
     <article aria-label="Presentation du produit" className="productPage">
        <h1>{product.title}</h1>
        <div className="container">
            <img className="picture" src= {product.image} alt={product.title}/>
                <div  className="description">  
                    <h3 className="$bgColor"> Description</h3>
                    <p> {product.description}</p>
                </div>
                <div  className="category">
                    <h3 className="$bgColor"> Category</h3>
                     <p> <Category category={product.category}/>  </p>
                </div>
                <form className="collumn" action="" >
                        <label> <h3 className="$bgColor"> Price</h3> 
                        <input type="number" id="price" onChange={handleChange} placeholder={product.price} value={price}  />
                        </label>
                        <p> {calc.addTaxe()} €( VAT Inclus)</p>
                        <button onClick={(event) => { updatePrice(event)}} disable={ price== product.price ? "false" : "true" } > Update Product </button>
                        
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