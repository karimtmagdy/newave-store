import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/context/AuthContext";
import { useForm } from "react-hook-form";
import { loginSchema, type TLogin } from "@/services/validation/authValidate";
import { SignInForm } from "@/services/constants/form";
import type { TFieldFormProps } from "@/types/TFormField";
import { Apple, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui";
import { API_FORGOT_PASSWORD } from "@/services/constants/api-url";
import HaveAccount from "./HaveAccount";
import { Link } from "react-router";
const SignInPage = () => {
  const { signin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: TLogin) => {
    signin(data.email as string, data.password as string);
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-center">
        <h1 className="mb-2">Welcome back</h1>
        <p className="text-deep mb-4 text-sm">Sign in to your account</p>
      </div>
      <FormSignIn register={register} errors={errors} />
      <CheckRememberAndForgot />
      <Button fullWidth size={"lg"}>
        login
      </Button>
      <ContinueWith />
      <HaveAccount />
    </form>
  );
};

export default SignInPage;

const FormSignIn = ({ register, errors }: TFieldFormProps<TLogin>) => {
  return (
    <>
      {SignInForm.map((field) => (
        <fieldset key={field.id}>
          <legend className="sr-only">{field.label}</legend>
          <label htmlFor={field.id}>{field.label}</label>
          <input
            type={field.type}
            id={field.id}
            {...register(field.id as keyof TLogin)}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
          />
          {errors[field.id as keyof TLogin] && (
            <small>{errors[field.id as keyof TLogin]?.message as string}</small>
          )}
        </fieldset>
      ))}
    </>
  );
};
const CheckRememberAndForgot = () => {
  return (
    <div className="my-1 flex items-center justify-between gap-2 text-sm">
      <label htmlFor="remember_me" className="flex items-center select-none">
        <input type="checkbox" name="remember_me" id="remember_me" />
        remember me
      </label>
      <Link to={API_FORGOT_PASSWORD} className="hover:underline">
        forgot password?
      </Link>
    </div>
  );
};
const ContinueWith = () => {
  return (
    <>
      <div className="dark:before:border-deep dark:after:border-deep text-deep my-2.5 flex items-center select-none before:mr-4 before:flex-1 before:border-t before:border-neutral-300 after:ml-4 after:flex-1 after:border-t after:border-neutral-300">
        Or continue with
      </div>
      <div className="flex items-center justify-center gap-x-1 text-center">
        <Button icon={4} variant="muted">
          <Facebook />
        </Button>
        <Button icon={4} variant="muted">
          <Apple />
        </Button>
        <Button icon={4} variant="muted">
          <Instagram />
        </Button>
      </div>
    </>
  );
};
