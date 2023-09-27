import React from "react";

export default function ContactCard() {
  return (
    <section id="contact-form" className="container mb-32">
        <form
        id="contact-form"
        action="https://formspree.io/f/xwkdrgwv"
        method="POST"
        className="container text-white border rounded-lg border-gray-900 shadow-xl dark:default:shadow-dark"
        data-aos="zoom-in"
        data-aos-delay="300"
        >
        <h2 className="text-[16px] font-mono text-center mb-4 text-pastel-green">Send me an Email</h2>

        <div className="mb-4">
            <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
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
        <div className="flex justify-center">
        <button type="submit" className="border border-pastel-purple bg-pastel-purple text-white hover:bg-white hover:text-pastel-purple text-sm -my-0.5 px-2 py-0.5 rounded-full shadow hover:shadow-md outline-none focus:outline-none"> Send </button>
        </div>
        </form>
    </section>
  );
}
