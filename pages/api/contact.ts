import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Only POST allowed' });

  const { name, surname, petName, email, description } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name} ${surname}</p>
        <p><strong>Pet's Name:</strong> ${petName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Description:</strong><br/>${description}</p>
      `,
    });

    await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Gracias por contactarnos - Luz Animal',
    html: `
        <p>Hola ${name},</p>
        <p>Gracias por ponerte en contacto con Luz Animal. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
        <p>Mientras tanto, si necesitas ayuda urgente, puedes llamarnos o escribirnos por WhatsApp.</p>
        <p>Un cordial saludo,<br/>El equipo de Luz Animal 🕊️</p>
    `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, error });
  }
}