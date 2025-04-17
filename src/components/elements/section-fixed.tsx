import { memo } from "react";
import { cn } from "@/lib/utils";
type SectionType = {
  children: React.ReactNode;
  className?: string;
  errorNumber: string;
  errorName: string;
};

const SectionFixed = ({
  children,
  className,
  errorNumber,
  errorName,
}: SectionType) => {
  return (
    <section
      className={cn(
        '"bg-background text-center" fixed inset-0 !z-50 flex h-dvh w-full flex-col items-center justify-center',
        className,
      )}
    >
      <h1 className="text-destructive text-6xl font-bold">{errorNumber}</h1>
      <div className="mt-4">
        <h2>{errorName}</h2>
        {/* <p className="text-muted-foreground"></p> */}
      </div>
      {children}
    </section>
  );
};
export default memo(SectionFixed);
