'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContactForm } from '@/components/component/ContactForm/useContactForm'


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

const {form} = useContactForm()

export const ContactForm: React.FC = () => {
  return (
    <Form {...form}>
      <form className="flex flex-col">
        <div className="p-12">
          <Typography variant="4xl">Contact us</Typography>
          <div className="p-4">
            <Input type="メールアドレス" placeholder="メールアドレス" />
          </div>
        </div>
      </form>
    </Form>
  )
}
