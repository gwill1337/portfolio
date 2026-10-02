"use client"
import { LocationEdit, Mail, Phone } from "lucide-react";
import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactInfo() {
    const [status, setStatus] = useState<Status>("idle");

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));

        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error();
            setStatus("sent");
            form.reset();
        } catch {
            setStatus("error");
        }
    }

    const inputClass = "w-full rounded-lg bg-background border border-border px-2 py-1.5 text-foreground placeholder:text-second-foreground/60 outline-none focus:border-primary transition";

    return (
        <div className="flex flex-col w-full not-first:items-center max-w-6xl mx-auto">
            <h2 className="self-start text-2xl sm:text-4xl font-semibold text-left mb-8 pl-2 ">
                Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-2 md:mx-auto ">
                {/* <div className="rounded bg-card/80 pt-2 pb-4 sm:py-2 px-5">
                    <h3>
                        Information
                    </h3>
                    <div className="flex mt-3 border rounded border-border p-2">
                        <div className="flex items-center pl-1 pr-3">
                            <Mail size={18} />
                        </div>
                        <div className="flex flex-col flex-1 text-center">
                            <h4 className="text-[13px]">Email</h4>
                            <p>example@gmail.com</p>
                        </div>
                        <div className="pl-1 pr-3 w-4.5 shrink-0" aria-hidden />
                    </div>
                    <div className="flex mt-3 border rounded border-border p-2">
                        <div className="flex items-center pl-1 pr-3">
                            <Phone size={18} />
                        </div>
                        <div className="flex flex-col flex-1 text-center">
                            <h4 className="text-[13px]">Phone</h4>
                            <p>+1 234 5678</p>
                        </div>
                        <div className="pl-1 pr-3 w-4.5 shrink-0" aria-hidden />
                    </div>
                    <div className="flex mt-3 border rounded border-border p-2 ">
                        <div className="flex items-center pl-1 pr-3">
                            <LocationEdit size={18} />
                        </div>
                        <div className="flex flex-col flex-1 text-center">
                            <h4 className="text-[13px]">Location</h4>
                            <p>...</p>
                        </div>
                        <div className="pl-1 pr-3 w-4.5 shrink-0" aria-hidden />
                    </div>
                </div> */}
                <div className="rounded bg-card/80 pt-2 pb-4 sm:py-2 px-5 flex flex-col justify-start text-foreground">
                    <h3>
                        Got a project in mind?
                    </h3>
                    <div className="flex mt-3 p-2">
                        <div className="flex flex-col flex-1 text-center">
                            <p>If you have a project idea, feel free to send me a message. I'm always open to new opportunities, collaborations, and fresh ideas.</p>
                        </div>
                        <div className="pl-1 pr-3 w-4.5 shrink-0" aria-hidden />
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="rounded bg-card/80 py-4 px-6 md:ml-5">
                    <h3>
                        Send a message
                    </h3>

                    <div className="my-4">
                        <label className="block text-center text-[13px] text-foreground">Your name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required maxLength={100}
                            placeholder="gwill1337"
                            className={inputClass}
                        />
                    </div>
                    <div className="my-4">
                        <label className="block text-center text-[13px] text-foreground">Your email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required maxLength={200}
                            placeholder="you@example.com"
                            className={inputClass}
                        />
                    </div>
                    <div className="my-4">
                        <label className="block text-center text-[13px] text-foreground">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Hello..."
                            className={inputClass}
                        />
                    </div>

                    <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        className="hidden"
                    />

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full py-2 rounded border border-border bg-primary disabled:opacity-60 transition cursor-pointer"
                    >
                        {status === "sending" ? "Sending..." : "Send Message"}
                    </button>

                    {status === "sent" && (
                        <p className="text-center text-sm text-primary">Message sent!</p>
                    )}
                    {status === "error" && (
                        <p className="text-center text-sm text-red-500">Something went wrong, try again.</p>
                    )}
                </form>
            </div>
        </div>
    )
}