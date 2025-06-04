import type {
  UseFormRegister,
  FieldErrors,
  FieldValues,
} from "react-hook-form";

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
