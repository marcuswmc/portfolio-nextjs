import { EmailTemplate } from "@/components/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastname, email, phone, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Marcus Portfolio <onboarding@resend.dev>",
      to: ["marcus.relation@gmail.com"],
      subject: "Novo contato - Portfolio contact form",
      react: EmailTemplate({ firstName, lastname, email, phone, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
