import { Input, Label } from "@/components/ui";
import { TFormType } from "@/types/TRegistrationType";

const LoginInputs = ({ form, handleInputChange }: TFormType) => {
  return (
    <>
      <fieldset className="grid gap-2">
        <Label htmlFor="email">email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          autoComplete="current-email"
          value={form.email}
          onChange={handleInputChange}
        />
      </fieldset>
      <fieldset className="grid gap-2">
        <Label htmlFor="password">password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          autoComplete="current-password"
          value={form.password}
          onChange={handleInputChange}
        />
      </fieldset>
    </>
  );
};

export default LoginInputs;
