import { signupFormSchema } from "@/utils/formSchema";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Control } from "react-hook-form";

type InputProps = z.input<typeof signupFormSchema>;

interface CustomFormFieldProps {
  control: Control<InputProps>;
  name: keyof InputProps;
  label: string;
  type?: string;
}

export const CustomFormField: React.FC<CustomFormFieldProps> = ({
  control,
  name,
  label,
  type = "text",
}) => (
  <FormField
    defaultValue=""
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
