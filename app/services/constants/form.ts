import type { FormElement } from "@/types/TFormField";

export const SignUpForm = [
  {
    label: "username",
    type: "text",
    id: "username",
    placeholder: "enter your username",
    autoComplete: "new-username",
  },
  {
    label: "email",
    type: "email",
    id: "email",
    placeholder: "enter your email",
    autoComplete: "new-email",
  },
  {
    label: "password",
    type: "password",
    id: "password",
    placeholder: "enter your password",
    autoComplete: "new-password",
  },
  {
    label: "confirm password",
    type: "password",
    id: "confirm_password",
    placeholder: "confirm your password",
    autoComplete: "new-confirm-password",
  },
] as FormElement;
export const SignInForm = [
  {
    label: "email",
    type: "email",
    id: "email",
    placeholder: "enter your email",
    autoComplete: "current-email",
  },
  {
    label: "password",
    type: "password",
    id: "password",
    placeholder: "enter your password",
    autoComplete: "current-password",
  },
] as FormElement;
