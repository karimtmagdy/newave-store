import { TUserType } from "./TUserType";

export type TFormUser = Pick<
  TUserType,
  "_id" | "username" | "email" | "password" | "confirm_password"
>;
export type THandleForm = {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
// export type TPublicUser = Pick<
//   TUserType,
//   "_id" | "username" | "email" | "role"
// >;

// export type TSafeUser = Omit<TUserType, "password" | "confirm_password">;
export type TLoginFormType = TFormUser &
  THandleForm & {
    form: {
      email: string;
      password: string;
    };
    setForm?: React.Dispatch<
      React.SetStateAction<{
        email: string;
        password: string;
      }>
    >;
  };

export type TRegistrationType = TFormUser &
  THandleForm & {
    form: {
      username: string;
      email: string;
      password: string;
      confirm_password: string;
    };
    setForm?: React.Dispatch<
      React.SetStateAction<{
        username: string;
        email: string;
        password: string;
        confirm_password: string;
      }>
    >;
  };
