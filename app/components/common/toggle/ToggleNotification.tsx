import { Button } from "@/components/ui";
import { Bell } from "lucide-react";
import { useCallback, useState } from "react";
import useClickOutSide from "@/hooks/useClickOutSide";
const ToggleNotification = () => {
  const [isOpenNotify, setIsOpenNotify] = useState<boolean>(false);
  const handleOpen = useCallback(() => {
    setIsOpenNotify((prevState) => !prevState);
  }, []);
  const ref = useClickOutSide<HTMLDivElement>(() => setIsOpenNotify(false));
  return (
    <>
      <Button icon={2} variant={"muted"} onClick={handleOpen}>
        <span className="sr-only">notifications</span>
        <Bell />
      </Button>

      {isOpenNotify && (
        <div
          ref={ref}
          className="bg-background absolute top-12 right-0 w-44 rounded-lg border p-2  "
        >
          <strong>notifications</strong>
          <ul>
            <li>notify 1</li>
            <li>notify 2</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ToggleNotification;
