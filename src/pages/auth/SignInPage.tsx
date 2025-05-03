import { Link } from "react-router-dom";
import HaveAccount from "./HaveAccount";
import { API_FORGOT_PASSWORD } from "@/services/api/api-url";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, loginSchema } from "@/services/validation/authValidate";
import { useAuth } from "@/hooks/useAuth";
import { Button, Label } from "@/components/ui";
import { SignInForm } from "@/services/constants/form";
import { FormLoginValues, TFieldFormProps } from "@/types/TFormField";

const SignInPage = () => {
  const { signin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: LoginSchema) => {
    signin(data.email as string, data.password as string);
    console.log(data);
  };
  return (
    <section className="auth-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>
        <FormSignIn register={register} errors={errors} />
        <div className="flex items-center justify-between gap-2 text-sm">
          <Label
            htmlFor="remember_me"
            className="flex items-center select-none"
          >
            <input type="checkbox" name="remember_me" id="remember_me" />
            remember me
          </Label>
          <Link to={API_FORGOT_PASSWORD} className="hover:underline">
            forgot password?
          </Link>
        </div>
        <HaveAccount />
        <Button fullWidth size="md" shape="curved">
          login
        </Button>
      </form>
    </section>
  );
};

export default SignInPage;

const FormSignIn = ({ register, errors }: TFieldFormProps<FormLoginValues>) => {
  return (
    <>
      {SignInForm.map((field) => (
        <fieldset key={field.id}>
          <legend className="sr-only">{field.label}</legend>
          <Label htmlFor={field.id}>{field.label}</Label>
          <input
            type={field.type}
            id={field.id}
            {...register(field.id as keyof FormLoginValues)}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
          />
          {errors[field.id as keyof FormLoginValues] && (
            <small className="text-red-500">
              {errors[field.id as keyof FormLoginValues]?.message as string}
            </small>
          )}
        </fieldset>
      ))}
    </>
  );
};
