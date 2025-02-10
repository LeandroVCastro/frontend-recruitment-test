import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { useFormContext } from "react-hook-form";

export const InputNameEnterpriseFormComponent = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl variant={"standard"} {...(errors.name && { error: true })}>
      <InputLabel htmlFor="component-helper-name">Name</InputLabel>
      <Input
        id="component-helper-name"
        aria-describedby="component-helper-text-name"
        {...register("name", { required: "Required Field" })}
      />
      {errors.name?.message && (
        <FormHelperText id="component-helper-text-name">
          <>{errors.name.message}</>
        </FormHelperText>
      )}
    </FormControl>
  );
};
