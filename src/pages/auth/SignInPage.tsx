import { Link } from "react-router-dom";
import HaveAccount from "./HaveAccount";
import { API_FORGOT_PASSWORD } from "@/services/api/api-url";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, loginSchema } from "@/services/validation/authValidate";
import { useAuth } from "@/hooks/useAuth";

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
  };
  return (
    <section className="auth-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>
        <fieldset>
          <label htmlFor="email">email</label>
          <legend className="sr-only">email</legend>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="enter your email"
            autoComplete="current-email"
          />{" "}
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
            autoComplete="current-password"
          />{" "}
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </fieldset>
        <div className="flex items-center justify-between gap-2 text-sm">
          <label
            htmlFor="remember_me"
            className="flex items-center select-none"
          >
            <input type="checkbox" name="remember_me" id="remember_me" />
            remember me
          </label>
          <Link to={API_FORGOT_PASSWORD} className="hover:underline">
            forgot password?
          </Link>
        </div>
        <HaveAccount />
        <button className="h-9 w-full rounded-lg bg-black leading-relaxed text-white hover:bg-zinc-600 dark:bg-white dark:text-black dark:hover:bg-zinc-400">
          login
        </button>
      </form>
    </section>
  );
};

export default SignInPage;
