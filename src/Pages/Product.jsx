import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Breadcrums from "../Component/Breadcrums/Breadcrums"; 
import Productdisplay from "../Component/Productdisplay/Productdisplay";
import Discriptionbox from "../Component/Discriptionbox/Discriptionbox";
import Explore from "../Component/Explore me/Explore"

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const  {productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrums product={product} />
      <Productdisplay product={product}/>
      <Discriptionbox/>
      <Explore/>
      
    </div>
  );
};

export default Product;


