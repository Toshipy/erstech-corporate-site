'use client'
import { useContactForm } from '@/components/component/ContactForm/useContactForm'
import { Button } from '@/components/ui/Button/Button'
import { Form } from '@/components/ui/Form/Form'
import { ScrollArea } from '@/components/ui/ScrollArea/ScrollArea'
import { Typography } from '@/components/ui/Typography/Typography'
import { CONTACT, HOME } from '@/contants/routes'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import { Toaster } from 'sonner'
import { InputForm } from '../InputForm/InputForm'
import { SelectForm } from '../SelectForm/SelectForm'
import { TextareaForm } from '../TextareaForm/TextareaForm'

export const ContactForm: FC = () => {
  const { form, onSubmit, isSubmitting, isValid, isDirty } = useContactForm()
  return (
    <ScrollArea className="bg-background h-full w-full p-12">
      <Toaster richColors />
      <Link href={`${HOME}`}>Home&nbsp;&nbsp;</Link>
      &gt;
      <Link className="font-bold" href={`${CONTACT}`}>
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
                className="w-[200px] rounded-lg py-5"
                disabled={isSubmitting || !isValid || !isDirty}
                size="default"
                type="submit"
                variant="default"
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
