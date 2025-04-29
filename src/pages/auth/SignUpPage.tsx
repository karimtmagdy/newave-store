import HaveAccount from "./HaveAccount";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  RegisterSchema,
} from "@/services/validation/authValidate";
import { useAuth } from "@/hooks/useAuth";
import Label from "@/components/ui/label";
import { SignUpForm } from "@/services/constants/form";
import { FormRegisterValues, TFieldFormProps } from "@/types/TFormField";
const SignUpPage = () => {
  const { signup } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = (data: RegisterSchema) => {
    signup(
      data.username as string,
      data.email as string,
      data.password as string,
      data.confirm_password as string,
    );
  };
  return (
    <section className="auth-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <FormSignUp register={register} errors={errors} />
        <HaveAccount />
        <button className="h-9 w-full rounded-lg bg-black leading-relaxed text-white hover:bg-zinc-600 dark:bg-white dark:text-black dark:hover:bg-zinc-400">
          register
        </button>
      </form>
    </section>
  );
};

export default SignUpPage;

const FormSignUp = ({
  register,
  errors,
}: TFieldFormProps<FormRegisterValues>) => {
  return (
    <>
      {SignUpForm.map((field) => (
        <fieldset key={field.id}>
          <legend className="sr-only">{field.label}</legend>
          <Label htmlFor={field.id}>{field.label}</Label>
          <input
            type={field.type}
            id={field.id}
            {...register(field.id as keyof FormRegisterValues)}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
          />
          {errors[field.id as keyof FormRegisterValues] && (
            <small className="text-red-500">
              {errors[field.id as keyof FormRegisterValues]?.message as string}
            </small>
          )}
        </fieldset>
      ))}
    </>
  );
};
