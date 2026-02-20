"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

export async function submitContact(formData: FormData) {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const message = formData.get("message")?.toString();

  if (!name || !email || !message) {
    throw new Error("Missing fields");
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    throw new Error("Email is not configured");
  }

  if (!CONTACT_EMAIL) {
    console.error("CONTACT_EMAIL is not set");
    throw new Error("Contact email is not configured");
  }

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `Owl's Team: message from ${name}`,
    text: message,
    html: `
      <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    console.error(error);
    throw new Error("Failed to send");
  }

  return { success: true };
}
