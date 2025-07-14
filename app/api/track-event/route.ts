import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { eventName, meta } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `Evento de usuario: ${eventName}`,
    text: `Un usuario realizó una acción:\n\nEvento: ${eventName}\nDetalles:\n${JSON.stringify(meta, null, 2)}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : error }, { status: 500 });
  }
}