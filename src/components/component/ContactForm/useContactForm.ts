import { z } from 'zod'
import { ContactMessage } from '@/types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'

const formSchema = ContactMessage.pick({
  inquiryType: true,
  name: true,
  email: true,
  content: true,
})

type FormType = z.infer<typeof formSchema>
export const useContactForm = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = useCallback(async (values: FormType) => {
    const data = {
      inquiryType: values.inquiryType,
      name: values.name,
      email: values.email,
      content: values.content,
    }
  }, [])
  return {
    form,
    onSubmit,
    isSubmitting: form.formState.isSubmitting,
    isValid: form.formState.isValid,
    isDirty: form.formState.isDirty,
  }
}
