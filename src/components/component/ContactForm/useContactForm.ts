import { z } from 'zod'
import { ContactMessage } from '@/types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from '@/hooks/use-toast'
import { useEffect } from 'react'

const formSchema = ContactMessage.pick({
  inquiryType: true,
  name: true,
  email: true,
  content: true,
})

type FormType = z.infer<typeof formSchema>

export const useContactForm = () => {
  const { toast } = useToast()

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    values: {
      inquiryType: 'other',
      name: '',
      email: '',
      content: '',
    },
    resetOptions: {
      keepDefaultValues: true,
    },
    mode: 'onChange',
  })

  const onSubmit = async (values: FormType) => {
    const data = {
      inquiryType: values.inquiryType,
      name: values.name,
      email: values.email,
      content: values.content,
    }

    const res = await fetch('http://localhost:8000/erstech-api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      toast({
        title: '成功',
        description: '送信に成功しました。',
      })
      console.log('Form submitted successfully.')
    } else {
      toast({
        variant: 'destructive',
        title: '失敗',
        description: '送信に失敗しました',
      })
      console.error('Form submission failed')
    }
  }

  return {
    form,
    onSubmit,
    isSubmitting: form.formState.isSubmitting,
    isValid: form.formState.isValid,
    isDirty: form.formState.isDirty,
  }
}
