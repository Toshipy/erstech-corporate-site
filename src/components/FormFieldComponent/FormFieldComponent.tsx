import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Typography,
} from '@/components/index'

import type { FieldPath, Control, FieldValues } from 'react-hook-form'

type FormFieldProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
  label: string
  required?: boolean
  placeholder?: string
}

export const FormFieldComponent = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  required,
  placeholder,
}: FormFieldProps<TFieldValues>) => {
  return (
    <>
      <Typography className="mb-2 font-bold" variant="sm">
        {label} {required && <span className="text-lg text-red-500">*</span>}
      </Typography>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input {...field} placeholder={placeholder} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
