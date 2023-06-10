import ShopItem from "../category-item/category-item.component";
import './categories.styles.scss'

const ShopP = ({shopgories}) => {
    return (
        <div className="categories-container" >
        {shopgories.map((shopgory)=>{
          const {id} = shopgory;
          return(
            <ShopItem shopgory={shopgory} key={id}/>
          );
        }
        )}
  </div>
    );
}
 
export default ShopP;