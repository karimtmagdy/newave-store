import ProductCard from "./product-card";

const ProductList = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
      <ProductCard />
    </div>
  );
};

export default ProductList;
