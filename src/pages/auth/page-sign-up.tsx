import { useAuth } from "@/hooks/use-auth";
import { useCallback, useState } from "react";
import { TFormType } from "@/types/TRegistrationType";
import { Button } from "@/components/ui";
import HaveAccount from "./have-account";
import RegisterInputs from "@/components/common/auth/register-inputs";
const PageSignUp = () => {
  const { isLoading, register, isAuthenticated } = useAuth();
  const [form, setForm] = useState<TFormType["form"]>({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
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
    if (
      !form.username ||
      !form.email ||
      !form.password ||
      !form.confirm_password
    )
      return;
    if (!isAuthenticated) {
      register!(
        form.username,
        form.email,
        form.password,
        form.confirm_password,
      );
    }
  };
  return (
    <div className="flex h-dvh flex-col items-center justify-center p-1">
      <form
        onSubmit={onSubmit}
        className="max-w-full space-y-2 border p-4 sm:w-80 md:w-96 lg:w-2/6 xl:w-1/3"
      >
        <h1>sign up</h1>
        <RegisterInputs form={form} handleInputChange={handleInputChange} />

        <Button disabled={isLoading} font={"capitalize"} fullWidth>
          {isLoading ? "loading" : "register"}
        </Button>
        <HaveAccount />
      </form>
    </div>
  );
};

export default PageSignUp;

// <RegisterInputs/>
