import { useNavigate } from "react-router";
import Button from "@/components/ui/button";
import SectionFixed from "@/components/elements/section-fixed";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <SectionFixed errorNumber="404" errorName="Page Not Found">
      <p className="dark:text-destructive text-muted-foreground mt-2">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Button onClick={() => navigate(-1)} className="mt-6" shape={"curved"}>
        Go back
      </Button>
    </SectionFixed>
  );
};

export default NotFoundPage;
