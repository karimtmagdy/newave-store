import { useState } from "react";

type TToggleProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleToggle: () => void;
};

export const useToggle = (): TToggleProps => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return {
    isOpen,
    setIsOpen,
    handleToggle,
  };
};
