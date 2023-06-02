

const ProductDetail = ( { productSelected } ) => {
  return (
    <div>
        <h2>{productSelected.title}</h2>
        <img src={productSelected.img} alt="" />
    </div>
  )
}

export default ProductDetail