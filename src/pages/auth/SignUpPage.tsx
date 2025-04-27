import HaveAccount from "./HaveAccount";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  RegisterSchema,
} from "@/services/validation/authValidate";
import { useAuth } from "@/hooks/useAuth";
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
        <fieldset>
          <legend className="sr-only">username</legend>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            {...register("username")}
            placeholder="enter your username"
            autoComplete="new-username"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
        </fieldset>
        <fieldset>
          <legend className="sr-only">email</legend>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="enter your email"
            autoComplete="new-email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </fieldset>
        <fieldset>
          <legend className="sr-only">password</legend>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="enter your password"
            autoComplete="new-password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </fieldset>
        <fieldset>
          <legend className="sr-only">confirm password</legend>
          <label htmlFor="confirm_password">confirm password</label>
          <input
            type="password"
            id="confirm_password"
            {...register("confirm_password")}
            placeholder="confirm your password"
            autoComplete="new-password"
          />
          {errors.confirm_password && (
            <p className="text-red-500">{errors.confirm_password.message}</p>
          )}
        </fieldset>
        <HaveAccount />
        <button className="h-9 w-full rounded-lg bg-black leading-relaxed text-white hover:bg-zinc-600 dark:bg-white dark:text-black dark:hover:bg-zinc-400">
          register
        </button>
      </form>
    </section>
  );
};

export default SignUpPage;
