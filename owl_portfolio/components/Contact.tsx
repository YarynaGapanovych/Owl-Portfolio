"use client";
import { submitContact } from "@/app/actions/contact";
import { useState } from "react";
export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function action(formData: FormData) {
    try {
      await submitContact(formData);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-header mb-4">
            Share your idea
          </h2>
          <p className="text-primary text-lg">
            Tell us about your idea or project — we&apos;ll get back to you
            within 24 hours.
          </p>
        </div>

        <div className="contact-form-card rounded-2xl p-8 md:p-10">
          <form action={action} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--color-french-gray)" }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="contact-input w-full px-4 py-3 rounded-lg transition-all duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--color-french-gray)" }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="contact-input w-full px-4 py-3 rounded-lg transition-all duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--color-french-gray)" }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="contact-input w-full px-4 py-3 rounded-lg resize-none transition-all duration-200"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 rounded-lg font-semibold border border-subheader text-primary transition-all duration-300  active:scale-[0.98] cursor-pointer  bg-gradient-to-r hover:from-[#dc5f19] hover:to-[#ec4e00]"
            >
              Send Message
            </button>
            {status === "success" && (
              <p
                className="text-center"
                style={{ color: "var(--color-status-success)" }}
              >
                Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p
                className="text-center"
                style={{ color: "var(--color-status-error)" }}
              >
                Something went wrong!
              </p>
            )}
          </form>
        </div>

        {/* <div className="mt-10 flex justify-center gap-8">
          <a href="#" className="contact-link font-medium">
            LinkedIn
          </a>
          <a href="#" className="contact-link font-medium">
            GitHub
          </a>
        </div> */}
      </div>
    </section>
  );
}
