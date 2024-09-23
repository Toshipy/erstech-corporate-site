import { z } from 'zod'
import { ContactMessage } from '@/types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// import { useToast } from '@/hooks/use-toast'
import { toast } from 'sonner'
import emailjs from '@emailjs/browser'

type EmailTemplateParams = {
  inquiryType: string
  name: string
  email: string
  content: string
}

type FormType = z.infer<typeof formSchema>

const formSchema = ContactMessage.pick({
  inquiryType: true,
  name: true,
  email: true,
  content: true,
})

export const useContactForm = () => {
  // const { toast } = useToast()

  const sendEmail = (params: EmailTemplateParams) => {
    const toastId = toast.loading('送信中です、少々お待ちください')
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
          limitRate: {
            throttle: 5000, // you cannot send more than 1 email per 5 seconds
          },
        },
      )
      .then(
        () => {
          toast.success('メッセージの送信を受け付けつけました！', {
            id: toastId,
          })
        },
        () => {
          toast.error('エラーが発生しました。もう一度お試しください。', {
            id: toastId,
          })
        },
      )
  }

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

    sendEmail(data)

    // const res = await fetch('http://localhost:8000/erstech-api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })

    // if (res.ok) {
    //   toast({
    //     title: '成功',
    //     description: '送信に成功しました。',
    //   })
    //   console.log('Form submitted successfully.')
    // } else {
    //   toast({
    //     variant: 'destructive',
    //     title: '失敗',
    //     description: '送信に失敗しました',
    //   })
    //   console.error('Form submission failed')
    // }
  }

  return {
    form,
    onSubmit,
    isSubmitting: form.formState.isSubmitting,
    isValid: form.formState.isValid,
    isDirty: form.formState.isDirty,
  }
}
