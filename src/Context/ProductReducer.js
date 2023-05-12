// Generation du template pour recuperer les elements du store 
export const ProductInitialState = {
    products : null,
    

}

//Reducer contenant les actions a effectuer sur les produit
const ProductReducer = (state, action) => {
    switch(action.type){
        case "UPADTE_PRICE":
            return state;
        case "UPDATE_PRODUCT":
            let tempList = state;
            tempList.products[action.payload.id-1]= action.payload;
            sessionStorage.setItem("products",JSON.stringify(tempList.products))
            return tempList;
        case "SET_PRODUCT":
            console.log(action.payload);
            return {...state, products : action.payload}
        default :
        return state;
    }
}

export default ProductReducer;