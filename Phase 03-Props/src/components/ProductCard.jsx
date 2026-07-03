function ProductCard({name,price,category})
{
        return <div className="productCard">
                <h2>{name}</h2>
                <p>Price: Rs.{price}</p>
                <p>Category: {category}</p>
             </div>

}

export default ProductCard;