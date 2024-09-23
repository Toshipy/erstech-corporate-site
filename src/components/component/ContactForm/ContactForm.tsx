'use client'
import { Loader2 } from 'lucide-react'
import { useContactForm } from '@/components/component/ContactForm/useContactForm'
import { InputForm, SelectForm, TextareaForm } from '@/components/index'

import { Typography, Form, ScrollArea, Button } from '@/components/ui'
import Link from 'next/link'
import { HOME, CONTACT } from '@/contants'
import { Toaster } from 'sonner'

export const ContactForm: React.FC = () => {
  const { form, onSubmit, isSubmitting, isValid, isDirty } = useContactForm()
  return (
    <ScrollArea className="h-full w-full bg-background p-12">
      <Toaster richColors={true} />
      <Link href={`${HOME}`}>Home&nbsp;&nbsp;</Link>
      &gt;
      <Link href={`${CONTACT}`} className="font-bold">
        &nbsp;&nbsp;Contact
      </Link>
      <div className="px-12 pt-12">
        <Typography variant="4xl">Contact us</Typography>
      </div>
      <div className="flex justify-center">
        <Form {...form}>
          <form
            className="flex flex-col"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="w-full max-w-[600px] flex-col items-center gap-8">
              <div className="h-full w-full py-11">
                <SelectForm
                  control={form.control}
                  label="お問い合わせ種別"
                  name="inquiryType"
                  placeholder="選択してください"
                  required
                />
                <div className="mt-6">
                  <InputForm
                    control={form.control}
                    label="名前"
                    name="name"
                    placeholder="名前"
                    required
                  />
                </div>
                <div className="mt-6">
                  <InputForm
                    control={form.control}
                    label="メールアドレス"
                    name="email"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
                <div className="mt-6">
                  <TextareaForm
                    control={form.control}
                    label="お問い合わせ内容"
                    name="content"
                    placeholder="お問い合わせ内容"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center py-5">
              <Button
                disabled={isSubmitting || !isValid || !isDirty}
                className="w-[200px] rounded-lg py-5"
                variant="default"
                size="default"
                type="submit"
              >
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                送信
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </ScrollArea>
  )
}
