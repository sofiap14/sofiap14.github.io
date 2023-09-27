import React from "react";

export default function ContactCard() {
  return (
    <section id="contact-form" className="container mb-32">
        <form
        id="contact-form"
        action="https://formspree.io/f/xwkdrgwv"
        method="POST"
        className="container text-white border border-gray-950 shadow-xl dark:default:shadow-dark"
        data-aos="zoom-in"
        data-aos-delay="300"
        >
        <h2 className="text-[16px] font-mono text-center mb-4 text-pastel-green">Send me an Email</h2>

        <div className="mb-4">
            <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            className="border border-gray-950 bg-gray-900 text-white p-2 rounded-lg w-full"
            />
        </div>

        <div className="mb-4">
            <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            className="border border-gray-950 bg-gray-900 text-white p-2 rounded-lg w-full"
            />
        </div>

        <div className="mb-4">
            <textarea
            name="message"
            id="message"
            rows="7"
            placeholder="Message"
            required
            className="border border-gray-950 bg-gray-900 text-white p-2 rounded-lg w-full"
            ></textarea>
        </div>

        <button
            type="submit"
            className="btn-email"
        >
            Send
        </button>
        </form>
    </section>
  );
}
