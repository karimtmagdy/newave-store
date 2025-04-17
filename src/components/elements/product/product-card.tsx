import img from "@/assets/iWatch_mockup-1.jpg";
import { useEffect, useState } from "react";
import api from "@/services/config/axios-config";
import { TProductType } from "@/types/TProductType";
import { API_PRODUCTS } from "@/services/api/api";
import { Button } from "../../ui";
import { ShoppingCart, Heart } from "lucide-react";
const ProductCard = () => {
  const [product, setProduct] = useState<TProductType[]>([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await api.get(API_PRODUCTS);
      setProduct(response.data.products);
      console.log(response.data.products);
    };
    fetchProduct();
  }, []);
  return (
    <>
      {product.map(
        (
          {
            description,
            discount,
            cover,
            price,
            slug,
            name,
            title,
            quantity,
            stock,
          },
          index,
        ) => {
          return (
            <div
              className="relative min-h-60 rounded-xl border p-1"
              key={index}
            >
              {discount ? (
                <span className="absolute top-0 z-10 flex h-6 w-1/2 translate-x-[50%] items-center justify-center rounded-b-lg border-2 border-t-0 border-white bg-white p-0.5 font-medium text-black capitalize line-through select-none">
                  {discount}
                </span>
              ) : (
                ""
              )}
              <Button
                size={"icon"}
                variant={"outline"}
                className="absolute top-[10%] right-0 z-10 translate-y-[10%] rounded-r-none"
              >
                <Heart />
              </Button>
              <div className="relative h-60 overflow-hidden rounded-lg">
                <img
                  src={!cover ? img : cover}
                  alt={slug}
                  className="h-full w-full object-cover object-center"
                />
                <span className="absolute bottom-0 z-10 flex h-6 w-1/2 translate-x-[50%] items-center justify-center rounded-t-lg border-2 border-b-0 border-white bg-white p-0.5 font-medium text-black capitalize select-none">
                  ${price}
                </span>
              </div>
              <div className="p-1">
                <div className="truncate text-base font-semibold">
                  {title || name}
                </div>
                <p className="truncate text-xs">{description}</p>
                <p className={quantity ? "text-green-500" : "text-red-500"}>
                  {stock}
                </p>
                <div className="flex items-center justify-between">
                  <Button size={"icon"} variant={"outline"}>
                    <ShoppingCart />
                  </Button>
                  <div className="flex items-center gap-x-0.5">
                    <span className="size-3 rounded-full bg-green-700"></span>
                    <span className="size-3 rounded-full bg-blue-700"></span>
                    <span className="size-3 rounded-full bg-red-600"></span>
                    <span className="size-3 rounded-full bg-zinc-900"></span>
                  </div>
                </div>
              </div>
            </div>
          );
        },
      )}
    </>
  );
};

export default ProductCard;
