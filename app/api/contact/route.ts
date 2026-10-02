import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
    let body: Record<string, unknown>
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Bad request" }, { status: 400 });
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();
    const website = String(body.website ?? "");

    if (website) {
        return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
        return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (name.length > 100 || email.length > 200 || message.length > 3000) {
        return NextResponse.json({ error: "Too long" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: process.env.CONTACT_TO_EMAIL!,
        replyTo: email,
        subject: `Новое сообщение от ${name}`,
        text: `От: ${name} (${email})\n\n${message}`,
    });

    if (error) {
        console.error(error);
        return NextResponse.json({ error: "Send failed" }, { status: 500 });
    }
    
    return NextResponse.json({ ok: true})
}