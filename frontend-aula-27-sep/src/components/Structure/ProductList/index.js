import ProductCard from "../ProductCard";
import React, { useState, useEffect } from "react";
import { Api } from "../../../Api/Api";

const ProductList = ()=>{
    const [product,setProduct] = useState([])
    useEffect(()=>{
        getApi()
    },[])
    
    const getApi = async ()=>{
        const response = await Api.readAllUrl();
        const results = await response.json()
        setProduct(results)
    }
    return(
        <div>
            {product.map((eachProduct, index)=>(
                <ProductCard product={eachProduct} key={index}/>
            ))}
        </div>
    )
}
export default ProductList;