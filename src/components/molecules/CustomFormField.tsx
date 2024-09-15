import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Control, FieldPath, FieldValues } from "react-hook-form";

type CustomFormFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  type?: string;
};

export const CustomFormField: <T extends FieldValues>(
  props: CustomFormFieldProps<T>
) => React.ReactElement = ({ control, name, label, type = "text" }) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input {...field} type={type} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
