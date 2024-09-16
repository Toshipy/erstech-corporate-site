import { z } from 'zod'

export const ContactMessage = z.object({
  inquiryType: z.enum(['選択してください', '採用に関するお問い合わせ', 'その他お問い合わせ']),
  name: z.string().trim().min(1, {
    message: '必須項目です',
  }),
  email: z.string().trim().min(1, {
    message: '必須項目です',
  }),
  content: z.string().trim().min(1, {
    message: '必須項目です',
  }),
  created_at: z.number(),
  updated_at: z.number(),
})

export type ContactMessage = z.infer<typeof ContactMessage>
