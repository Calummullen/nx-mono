import { NextRequest } from 'next/server';
import { EmailTemplate } from '@calum-business-mono/shared-components/src/email/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const emailData = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'bethsdoggyden.co.uk <enquiry@bethsdoggyden.co.uk>',
      to: 'calummullen1995@gmail.com',
      subject: 'Business enquiry',
      react: EmailTemplate({ ...emailData }),
      text: '',
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
