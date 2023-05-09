import { useReducer } from "react"
import ProductReducer, { ProductInitialState } from "./ProductReducer"
import { createContext } from "react";


//Creation du contexte pour le provider
export const ProductContext = createContext([]);


const ProductProvider = ({children}) => {
    const[state,dispatch]= useReducer(ProductReducer,ProductInitialState );

    return(
        <ProductContext.Provider value= {[state,dispatch]} >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;