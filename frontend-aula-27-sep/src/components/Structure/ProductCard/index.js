const ProductCard = ({ product })=>{
    return(
        <div>
            {product.name}
            <div>
            <img src={product.url} alt={product.name}></img>
            </div>
        </div>
    )
}
export default ProductCard;