import { Button } from "@/components/ui";
import { useAuth } from "@/hooks/use-auth";
import { TFormType } from "@/types/TRegistrationType";
import { useCallback, useState } from "react";
import { Link } from "react-router";
import HaveAccount from "./have-account";
import LoginInputs from "@/components/common/auth/login-inputs";
import { API_FORGOT_PASSWORD } from "@/services/api/api";

const PageSignIn = () => {
  const { login, isAuthenticated, isLoading } = useAuth();
  const [form, setForm] = useState<TFormType["form"]>({
    email: "",
    password: "",
  });
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
      console.log(value);
    },
    [],
  );
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.email || !form.password) return;
    if (!isAuthenticated) {
      login!(form.email, form.password);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>sign in</h1>

      <LoginInputs form={form} handleInputChange={handleInputChange} />
      <OptionUserAccount />
      <Button disabled={isLoading} font={"capitalize"} fullWidth>
        {isLoading ? "loading" : "login"}
      </Button>
      <HaveAccount />
    </form>
  );
};

export default PageSignIn;

const OptionUserAccount = () => {
  return (
    <div className="flex items-center justify-between">
      <fieldset className="flex items-center gap-x-1">
        <input
          type="checkbox"
          name="remember_me"
          id="remember_me"
          className="size-3.5"
        />
        <label htmlFor="remember_me" className="leading-0 select-none">
          remember me
        </label>
      </fieldset>
      <Link
        to={API_FORGOT_PASSWORD}
        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
      >
        Forgot your password?
      </Link>
    </div>
  );
};
