

interface ProductPageProps {
    params: {
        productId: string;
    }
}

const ProductPage: React.FC<ProductPageProps> = ({
    params
}) => {
  return (
    <div>
        Individual product
    </div>
  )
}

export default ProductPage