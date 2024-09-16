import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Typography,
} from '@/components/index'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/index'

import type { FieldPath, Control, FieldValues } from 'react-hook-form'

type FormFieldProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
  label: string
  required?: boolean
  placeholder?: string
}

export const SelectForm = <TFieldValues extends FieldValues>({
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
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-[300px]">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recruit">
                    採用に関するお問い合わせ
                  </SelectItem>
                  <SelectItem value="other">その他お問い合わせ</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
