import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-base-300 py-16 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        {/* Left Side - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-neutral mb-6">
            I'm currently available for freelance work and open to discussing new
            projects. Feel free to reach out via email, phone, or the contact form.
          </p>

          <ul className="space-y-4 text-neutral">
            <li className="flex items-center gap-3">
              <MdEmail className="text-xl text-primary" />
              mdrafiislam9411@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-xl text-primary" />
              +8801618802042
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-xl text-primary" />
             +8801618802042
            </li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-base-200 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full h-32"
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary text-white w-full"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
