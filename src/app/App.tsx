import ErrorBoundary from "@/pages/private/error-boundary";
import { Outlet } from "react-router";

const App = () => {
  return (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  );
};

export default App;
