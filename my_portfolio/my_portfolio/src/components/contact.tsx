import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl text-gray-800 font-bold mb-6">
          <a id="contact">Get In Touch</a>
        </h2>
        <p className="text-gray-700 mb-12">
          Let's connect! You can reach me via email or find me on my social
          platforms.
        </p>

        <div className="flex justify-center gap-6 text-3xl">
          <a
            href="mailto:fatimazahrabendnane@gmail.com"
            className="text-gray-700 hover:text-red-500 transition"
          >
            <MdEmail />
          </a>

          <a
            href="https://www.linkedin.com/in/fatima-zahra-bendnane-5a5546266/"
            target="_blank"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/fbendnan"
            target="_blank"
            className="text-gray-700 hover:text-black transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
