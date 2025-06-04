import { createContext, use, useState, type PropsWithChildren } from "react";

export type SideBarContextType = {
  isOpen: boolean;
  toggleSidebar: () => void;
  isOpenSidebar: boolean;
  setIsOpenSidebar: (value: boolean) => void;
  closeSidebar: () => void;
};

export const SideBarContext = createContext<SideBarContextType | null>(null);
const Provider = SideBarContext.Provider;
export const SideBarProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setIsOpenSidebar(!isOpenSidebar);
  };

  const closeSidebar = () => {
    setIsOpenSidebar(false);
  };

  const value = {
    isOpen,
    toggleSidebar,
    isOpenSidebar,
    setIsOpenSidebar,
    closeSidebar,
  };
  return <Provider value={value}>{children}</Provider>;
};
export const useSideBar = () => {
  const context = use(SideBarContext) as SideBarContextType;
  if (!context)
    throw new Error("useSideBarContext must be used within a SideBarProvider");
  return context as SideBarContextType;
};
