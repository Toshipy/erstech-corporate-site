import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/Form/Form'
import { Input } from '@/components/ui/Input/Input'
import { Typography } from '@/components/ui/Typography/Typography'
import type { Control, FieldPath, FieldValues } from 'react-hook-form'

type FormFieldProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
  label: string
  required?: boolean
  placeholder?: string
}

export const InputForm = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  required,
  placeholder
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
              <Input
                className="w-[500px]"
                {...field}
                placeholder={placeholder}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
