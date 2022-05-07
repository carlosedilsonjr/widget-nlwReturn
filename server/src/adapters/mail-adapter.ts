export interface SendEmailData {
  subject: string,
  body: string,
}

export interface MailAdapter {
  sendemail: (data: SendEmailData) => Promise<void>
}