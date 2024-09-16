'use client'

import { useContactForm } from '@/components/component/ContactForm/useContactForm'
import { InputForm } from '@/components/InputForm'
import { SelectForm } from '@/components/SelectForm'

import { Typography, Form, ScrollArea } from '@/components/ui'

export const ContactForm: React.FC = () => {
  const { form, onSubmit } = useContactForm()
  return (
    <ScrollArea className="h-full w-full bg-background px-6 py-10">
      <div className="px-12">
        <Typography variant="4xl">Contact us</Typography>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-[600px] flex-col items-center gap-8">
          <div className="h-full w-full py-11">
            <Form {...form}>
              <form
                className="flex flex-col"
                onSubmit={form.handleSubmit(onSubmit)}
              >
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
                  <InputForm
                    control={form.control}
                    label="お問い合わせ内容"
                    name="content"
                    placeholder="お問い合わせ内容"
                    required
                  />
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
