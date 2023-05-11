import { useContext, useEffect } from "react";
import { ProductContext } from "../../Context/ProductProvider";
import ProductElem from "../ProductElem/ProductElem";
import "./ProductManagement.scss";


function ProductManagement(){
    //mise en place du state
    const [state,dispatch] = useContext(ProductContext);
    useEffect(()=>{
    },[])
    return(
        <article className="productManagement">
            <h1> Product Management </h1>
            <table>
                <thead>
                    <tr>
                        <td> Product name</td>
                        <td> Category</td>
                        <td> Price</td>
                        <td> Price (including VAT)</td>
                    </tr>
                </thead>
                <tbody>
                { state.products != null && state.products.map((elem,id) => {
                    return (
                        <ProductElem key={id} elem={elem} id={elem.id}/>
                    )
                } )}
                </tbody>
            </table>
        </article>

    )
}

export default ProductManagement;