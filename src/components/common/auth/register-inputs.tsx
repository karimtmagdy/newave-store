import { Input, Label } from "@/components/ui";
import { TFormType } from "@/types/TRegistrationType";

const RegisterInputs = ({ form, handleInputChange }: TFormType) => {
  return (
    <>
      <fieldset className="grid gap-2">
        <Label htmlFor="text">username</Label>
        <Input
          type="username"
          id="username"
          name="username"
          placeholder="username"
          autoComplete="new-username"
          value={form.username}
          onChange={handleInputChange}
        />
      </fieldset>
      <fieldset className="grid gap-2">
        <Label htmlFor="email">email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          autoComplete="new-email"
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
          autoComplete="new-password"
          value={form.password}
          onChange={handleInputChange}
        />
      </fieldset>
      <fieldset className="grid gap-2">
        <Label htmlFor="confirm_password">confirm password</Label>
        <Input
          type="password"
          id="confirm_password"
          name="confirm_password"
          placeholder="confirm password"
          autoComplete="new-confirm-password"
          value={form.confirm_password}
          onChange={handleInputChange}
        />
      </fieldset>
    </>
  );
};

export default RegisterInputs;
