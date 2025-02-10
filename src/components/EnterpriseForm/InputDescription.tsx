import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { useFormContext } from "react-hook-form";

export const InputDescriptionEnterpriseFormComponent = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl
      variant={"standard"}
      {...(errors.description && { error: true })}
    >
      <InputLabel htmlFor="component-helper-description">
        Description
      </InputLabel>
      <Input
        multiline
        rows={5}
        id="component-helper-description"
        aria-describedby="component-helper-text-description"
        {...register("description", {
          required: "Required Field",
        })}
      />
      {errors.description && (
        <FormHelperText id="component-helper-text-description">
          <>{errors.description.message}</>
        </FormHelperText>
      )}
    </FormControl>
  );
};
