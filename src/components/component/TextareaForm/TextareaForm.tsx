import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Textarea,
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

export const TextareaForm = <TFieldValues extends FieldValues>({
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
              <Textarea
                placeholder={placeholder}
                {...field}
                className="h-32 w-full resize-none rounded-md border border-gray-300 p-2"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
