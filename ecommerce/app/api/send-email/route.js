import { EmailTemplate } from '../../_components/email-template.tsx';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["a7md3laaa@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: 'Ahmed' }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}