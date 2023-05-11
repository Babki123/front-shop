import { Link, useNavigate } from "react-router-dom";
import "./ProductElem.scss";
import Produit from "../../Data/TaxCalc";
import Category from "../Category/Category";

//Affichage des elements du tableau
const ProductElem = ({elem,id}) => {
    const tax = new Produit( elem.price)

      //fonction de redirection pour transformer le tr en lien

     const navigate = useNavigate();
        const navigateToId = (id) => {
            navigate(id.toString())
        }

        return (
        <tr  onClick={()=>{navigateToId(id)}}  > 
            <td> {elem.title}</td>
            <td> <Category category={elem.category}/></td>
            <td> {elem.price} €</td>
            <td> { tax.addTaxe() } € </td>
        </tr>                 
        )
      
        
}

export default ProductElem