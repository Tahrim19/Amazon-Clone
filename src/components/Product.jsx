import '../css/product.css'

export default function Product({id,title,image,price,rating}) {
  return (
    <div className='product'>
      <div className='product-info'>
        <p>{title}</p>

        <p className='product-price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>

        <div className='product-rating'>
            {Array(rating).fill().map((_,i) => (
                <p>🌟</p>
            ))}
        </div>


      </div>
      <img src={image} alt=""/>
      <button>Add to Cart</button>
    </div>
  )
}
