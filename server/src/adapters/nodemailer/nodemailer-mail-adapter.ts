import { MailAdapter, SendEmailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8ce8168f87b682",
    pass: "fe42fe53c07122"
  }
});

export class NodemailerAdapter implements MailAdapter {
  async sendemail({ subject, body }: SendEmailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Diego Fernandes <carlosedilsonabj@gmail.com>',
      subject,
      html: body
    })
  }
} 