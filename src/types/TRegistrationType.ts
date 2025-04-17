export type TFormType = {
  form: {
    username?: string;
    email: string;
    password: string;
    confirm_password?: string;
  };
  setForm?: React.Dispatch<
    React.SetStateAction<{
      username?: string;
      email: string;
      password: string;
      confirm_password?: string;
    }>
  >;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TRegistrationType = {
  username?: string;
  email: string;
  password: string;
  confirm_password?: string;
};
