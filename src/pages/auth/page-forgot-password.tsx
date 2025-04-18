import { Button, Input, Label } from "@/components/ui";
import { API_SIGNIN } from "@/services/api/api";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router";

const PageForgotPassword = () => {
  const navigate = useNavigate();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>Forgot password?</h1>
      <p>please enter your email</p>
      <fieldset className="grid gap-2">
        <Label htmlFor="email">email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="enter your email"
        />
      </fieldset>

      <div className="grid gap-y-1">
        <Button>Reset password</Button>
        <Button variant={"ghost"} onClick={() => navigate(API_SIGNIN)}>
          <MoveLeft />
          Back to login
        </Button>
      </div>
    </form>
  );
};
export default PageForgotPassword;
