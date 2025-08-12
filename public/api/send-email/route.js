import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../../emails/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Faltan campos obligatorios.' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'Durex-Crom <onboarding@resend.dev>', // Debes verificar este email en Resend. Puedes usar el dominio de prueba.
      to: ['fdbertolo@gmail.com'], // Reemplaza con tu email de destino
      subject: `Nueva consulta de ${name}`,
      react: EmailTemplate({ name, email, phone, company, message }),
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
  }
}