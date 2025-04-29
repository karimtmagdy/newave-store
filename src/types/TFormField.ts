import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";

export type FormLoginValues = {
  email: string;
  password: string;
};
export type FormRegisterValues = {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
};

export type TFieldFormProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};
export type FormElement = Array<{
  id: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete: string;
}>;
