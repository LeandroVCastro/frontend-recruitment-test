import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { useFormContext } from "react-hook-form";

export const InputCnpjEnterpriseFormComponent = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl variant={"standard"} {...(errors.cnpj && { error: true })}>
      <InputLabel htmlFor="component-helper-cnpj">CNPJ</InputLabel>
      <Input
        id="component-helper-cnpj"
        aria-describedby="component-helper-text-cnpj"
        {...register("cnpj", { required: "Required Field" })}
      />
      {errors.cnpj && (
        <FormHelperText id="component-helper-text-cnpj">
          <>{errors.cnpj.message}</>
        </FormHelperText>
      )}
    </FormControl>
  );
};
