import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { useFormContext } from "react-hook-form";

export const InputCommercialNameEnterpriseFormComponent = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl
      variant={"standard"}
      {...(errors.commercialName && { error: true })}
    >
      <InputLabel htmlFor="component-helper">Commercial Name</InputLabel>
      <Input
        id="component-helper"
        aria-describedby="component-helper-text"
        {...register("commercialName", {
          required: "Required Field",
        })}
      />
      {errors.commercialName && (
        <FormHelperText id="component-helper-text">
          <>{errors.commercialName.message}</>
        </FormHelperText>
      )}
    </FormControl>
  );
};
