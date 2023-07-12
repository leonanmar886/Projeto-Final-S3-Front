import '../styles/ProductCard.css'

interface ProductCardProps {
  productImg: string;
  productName: string;
  productDescription: string;
  productPrice: string;
}

export const ProductCard = ({productImg, productName, productDescription, productPrice}: ProductCardProps) => {
  return (
    <>
      <div className="product">

        <div className="left">
          <img src={productImg} alt="Product" />
          <div className="product-info">
            <p className='product-name'>{productName}</p>
            <p className='product-description'>{productDescription}</p>
          </div>
        </div>

        <div className="right">
          <div className="product-price">
            R${productPrice}
          </div>

          <button className="add-in-cart">Adicionar ao carrinho</button>
        </div>

      </div>
    </>
  )
}