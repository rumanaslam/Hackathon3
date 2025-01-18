import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import client from '@/sanity/lib/client';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  discountPrice?: string;
  discount?: string;
  isNew?: boolean;
}

interface ProductDetailsProps {
  product: Product;
}

interface Params extends ParsedUrlQuery {
  id: string; // Declare `id` as a string
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.imageUrl} alt={product.name} />
      <p>Price: {product.price}</p>
      {product.discountPrice && (
        <p className="line-through">Original Price: {product.discountPrice}</p>
      )}
    </div>
  );
};

// Fetch product data based on dynamic ID
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params; // Type the context.params

  const product = await client.fetch(
    `*[_type == "product" && _id == $id][0]{
      _id,
      name,
      description,
      price,
      "imageUrl": productImage.asset->url,
      discountPrice,
      discount,
      isNew
    }`,
    { id }
  );

  return {
    props: {
      product,
    },
  };
};

export default ProductDetails;
