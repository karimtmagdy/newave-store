import UserDropdown from "./DropDownMenu";
import TogglePanel from "../toggle/TogglePanel";
import ToggleTheme from "../toggle/ToggleTheme";
import React from "react";

interface BaseHeaderProps {
  leftContent: React.ReactNode;
  className?: string;
}
const BaseHeader = ({ leftContent, className }: BaseHeaderProps) => {
  return (
    <header className="header">
      <div className="flex w-[180px] items-center gap-2">{leftContent}</div>
      <div className="right-side-header">
        <button className="h-6 w-6 cursor-pointer rounded-lg border">T</button>
        <TogglePanel />
        <ToggleTheme />
        <UserDropdown />
      </div>
    </header>
  );
};

export default React.memo(BaseHeader);
