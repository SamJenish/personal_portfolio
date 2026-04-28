"use client";

import { useState } from "react";
import Magnetic from "./motion/Magnetic";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Inquiry from Portfolio");
    const body = encodeURIComponent(
      `From: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:sammjenis@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="w-full px-4 md:px-12 py-32 bg-[#050505]" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        <div className="md:w-1/2 flex flex-col">
          <h2 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em] mb-6">Contact</h2>
          <h3 className="text-6xl md:text-[8vw] font-bold tracking-tighter text-[#ededed] leading-[0.85] mb-12 uppercase">
            Let&apos;s<br/>talk.
          </h3>
          
          <Magnetic radius={100}>
            <a href="mailto:sammjenis@gmail.com" className="text-xl md:text-2xl font-light text-[#ededed] border-b border-neutral-700 pb-2 inline-block hover:border-[#ededed] transition-colors" data-cursor="link">
              sammjenis@gmail.com
            </a>
          </Magnetic>
        </div>

        <div className="md:w-1/2 w-full mt-12 md:mt-0 pt-12 md:pt-0">
          {sent ? (
            <div className="h-full flex flex-col items-start justify-center pt-10">
               <h3 className="text-3xl font-bold mb-4 text-[#ededed]">Message Prepared.</h3>
               <p className="text-gray-400 text-lg font-light">Your default email client should open shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-12 pt-10">
              <div className="flex flex-col gap-4">
                 <label htmlFor="email" className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em]">Your Email</label>
                 <input
                   id="email"
                   type="email"
                   placeholder="hello@domain.com"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required
                   className="w-full bg-transparent border-b border-neutral-800 text-xl text-[#ededed] py-4 focus:outline-none focus:border-[#ededed] transition-colors placeholder:text-neutral-800 font-light"
                   data-cursor="link"
                 />
              </div>
              <div className="flex flex-col gap-4">
                 <label htmlFor="message" className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em]">Message</label>
                 <textarea
                   id="message"
                   placeholder="How can I help you?"
                   value={message}
                   onChange={(e) => setMessage(e.target.value)}
                   required
                   className="w-full bg-transparent border-b border-neutral-800 text-xl text-[#ededed] py-4 h-32 resize-none focus:outline-none focus:border-[#ededed] transition-colors placeholder:text-neutral-800 font-light"
                   data-cursor="link"
                 />
              </div>
              
              <div className="mt-8">
                 <Magnetic radius={80}>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-32 h-32 rounded-full border border-neutral-800 text-[#ededed] font-medium uppercase tracking-widest text-[10px] hover:bg-[#ededed] hover:text-[#050505] transition-colors duration-500"
                      data-cursor="link"
                    >
                      Send
                    </button>
                 </Magnetic>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
