import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xlgyywkz");
  const [showAlert, setShowAlert] = useState(true);

  return (
    <section id="contact" className="w-full py-12 border-t border-gray-50/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-lg text-(--sec) mb-2 shiny-sec">Let&apos;s talk</h2>
        <h3 className="text-4xl md:text-5xl font-medium text-(--white) mb-6">Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-(--white-icon)">
            <p className="mb-4">Have a question or a project in mind? Feel free to reach out.</p>
            <div className="flex items-center gap-2">
              <span>Location:</span>
              <span className="text-(--white)">Sargodha, Pakistan</span>
            </div>
          </div>
          <div>
            {state.succeeded && showAlert ? (
              <div className="flex items-start gap-3 p-4 rounded-lg border border-green-500/30 bg-green-500/10 text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mt-0.5 shrink-0">
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" />
                </svg>
                <div className="flex-1">
                  <p className="font-medium text-sm">Message sent successfully!</p>
                  <p className="text-xs opacity-75 mt-0.5">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                </div>
                <button onClick={() => setShowAlert(false)} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" />
                  </svg>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" name="name" placeholder="Name" required
                  className="px-4 py-2 bg-surface text-(--white) border border-(--white-icon-tr) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--sec) placeholder:text-(--white-icon)" />
                <input type="email" name="email" placeholder="Email" required
                  className="px-4 py-2 bg-surface text-(--white) border border-(--white-icon-tr) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--sec) placeholder:text-(--white-icon)" />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm" />
                <textarea name="message" placeholder="Message" rows={6} required
                  className="px-4 py-2 bg-surface text-(--white) border border-(--white-icon-tr) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--sec) resize-none placeholder:text-(--white-icon)" />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm" />
                <button type="submit" disabled={state.submitting}
                  className="px-4 py-2 bg-surface text-(--white) rounded-lg opacity-60 transition-opacity border border-(--white-icon-tr) hover:opacity-100 disabled:cursor-not-allowed">
                  {state.submitting ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
