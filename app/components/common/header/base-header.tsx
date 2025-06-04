import ToggleNotification from "../toggle/ToggleNotification";
import ToggleAuthentication from "../toggle/ToggleAuthentication";
import TogglePanel from "../toggle/TogglePanel";
import ToggleTheme from "../toggle/ToggleTheme";
import ToggleCart from "../toggle/ToggleCart";
import { Button } from "@/components/ui";
import { Settings } from "lucide-react";

type Props = { leftContent: React.ReactNode };

const BaseHeader = ({ leftContent }: Props) => {
  return (
    // transition-all duration-300 ease-in-out
    <header className="header bg-background flex h-12 w-full items-center justify-between border-b px-2">
      <div className="side-left flex w-[180px] items-center gap-[var(--system-lg)]">
        {leftContent}
      </div>
      <div className="side-right relative inline-flex w-fit gap-[var(--system)] rounded-lg border p-1">
        <ToggleCart />
        <ToggleNotification />
        <ToggleTheme />
        <TogglePanel />
        <Button icon={2} variant={"muted"}>
          <Settings />
        </Button>
        <ToggleAuthentication />
      </div>
    </header>
  );
};

export default BaseHeader;
