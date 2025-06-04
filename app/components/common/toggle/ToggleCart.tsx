import { Button } from "@/components/ui";
import useClickOutSide from "@/hooks/useClickOutSide";
import { ShoppingCart, X } from "lucide-react";
import { useCallback, useState } from "react";

const ToggleCart = () => {
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false);
  const handleOpen = useCallback(() => {
    setIsOpenCart((prevState) => !prevState);
  }, []);
  const ref = useClickOutSide<HTMLDivElement>(() => setIsOpenCart(false));
  return (
    <>
      <Button icon={2} variant={"muted"} onClick={handleOpen}>
        <ShoppingCart />
      </Button>
      {isOpenCart && (
        <div
          ref={ref}
          className="bg-background fixed inset-y-0 right-0 z-50 h-dvh w-72 border-l p-4"
        >
          <div className="flex items-center justify-between">
            <h1 className="font-bold capitalize">my cart</h1>
            <Button icon={2} onClick={handleOpen} variant={"muted"}>
              <X />
            </Button>
          </div>
          <article className="mt-8 flex flex-col items-center gap-y-4 p-4">
            <ShoppingCart className="h-10 w-10" />
            <h1 className="font-bold capitalize">your cart is empty.</h1>
          </article>
        </div>
      )}
    </>
  );
};
export default ToggleCart;
