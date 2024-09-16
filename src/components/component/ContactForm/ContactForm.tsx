'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContactForm } from '@/components/component/ContactForm/useContactForm'
import { FormFieldComponent } from '@/components/FormFieldComponent'

import {
  Button,
  Typography,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui'
import { Input } from '@/components/ui'

export const ContactForm: React.FC = () => {
  const { form, onSubmit } = useContactForm()
  return (
    <Form {...form}>
      <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="p-12">
          <Typography variant="4xl">Contact us</Typography>
          <div className="p-4">
            <FormFieldComponent
              control={form.control}
              label="名前"
              name="name"
              required
            />
            <FormFieldComponent
              control={form.control}
              label="名前"
              name="name"
              required
            />
            <FormFieldComponent
              control={form.control}
              label="メールアドレス"
              name="email"
              required
            />
            <FormFieldComponent
              control={form.control}
              label="お問い合わせ内容"
              name="content"
              required
            />
          </div>
        </div>
      </form>
      {/* </div> */}
    </Form>
  )
}
