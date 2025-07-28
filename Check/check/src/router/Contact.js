import React from 'react';

function Contact() {
  return (

    <><div className="h-px w-324 bg-gray-400 mx-auto mt-3" />
    <div className="bg-[#f4ede4] text-[#4b3621] min-h-screen p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold border-b-4 border-[#a97458] pb-2 mb-6">Get in Touch</h1>

        <p className="text-lg mb-6">
          We'd love to hear from you. Whether you have a question about our chairs, your order, or anything else — our team is here to help.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-[#c0a98b] bg-white focus:outline-none focus:ring-2 focus:ring-[#a97458]"
              placeholder="Your Name" />
          </div>

          <div>
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg border border-[#c0a98b] bg-white focus:outline-none focus:ring-2 focus:ring-[#a97458]"
              placeholder="you@gmail.com" />
          </div>

          <div>
            <label className="block text-sm font-semibold">Message</label>
            <textarea
              rows="5"
              className="w-full p-3 rounded-lg border border-[#c0a98b] bg-white focus:outline-none focus:ring-2 focus:ring-[#a97458]"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#a97458] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8b5e3c] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div></>
  );
}

export default Contact;
