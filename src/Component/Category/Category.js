import "./Category.scss";

const Category = ({category}) => {

    const checkCategory = () => {
        switch(category){
            case "men's clothing":
                return "bg-orange"
        
            case "jewelery":
                return "bg-green"
            default:
                return "bg-grey"
        }
    }
    return(
        <p className={"whiteFront pill "+checkCategory()}>
                {category}
        </p>
    )
}

export default Category;