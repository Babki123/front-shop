


class Produit {

 

    constructor(price){
        this.price=price;
        this.tax = 0.2;

    }
    getPrice(){
        return this.price;

    }
    setPrice(price){
        this.price = price;
    }

    setTaxe(tax){
        this.tax = tax;
    }
    
    addTaxe(){
        return this.price + (this.price*this.tax);
    }
}

export default Produit;