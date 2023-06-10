import './category-item.styles.scss';

const ShopItem = ({shopgory}) => {
   const {title,imageUrl} = shopgory;
   return (
       <div className="category-container">
         
     <img className="background-image" style={
       //Dinamik CSS Object
       {           
       backgroundImage:`url(${imageUrl})` //Template string syntax
       }
     } alt={title} />
     <div className="category-body-container">  
       <h5>{title}</h5>
     </div>
     <button className='button'>Buy Now</button>
   </div>     
   );
} 
 
export default ShopItem;