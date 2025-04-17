import { memo } from "react";

export const Loading = memo(() => {
  return (
    <div className="flex h-dvh items-center justify-center py-12">
      <div className="border-primary h-12 w-12 animate-spin rounded-full border-t-2 border-b-2" />
    </div>
  );
});

export const Spinner = memo(() => {
  return (
    <div className="flex h-dvh items-center justify-center py-12">
      <div className="border-primary h-12 w-12 animate-spin rounded-full border-t-2 border-b-2" />
    </div>
  );
});
// <div><div className="h-8 w-8 border-4 border-t-transparent"/></div>
// Loading...
