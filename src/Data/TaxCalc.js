


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
    
    addTaxe(price = this.price ){
        if(typeof(price) != typeof(0.0)){
          price =   parseFloat(price)
        }
        var taxPrice = parseFloat(price + (price*this.tax)).toFixed(2);
        if (!isNaN(taxPrice)){
            return taxPrice;
        }else{
            return 0;
        }
        
    }
}

export default Produit;