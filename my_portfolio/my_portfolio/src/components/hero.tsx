import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-8">

        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-400">
            Hi, I'm Fatima-Zahra Bendnane!
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            I'm a frontend developer passionate about creating beautiful, accessible, and responsive web applications with Next.js and Tailwind CSS.

          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="px-5 py-2 rounded-md border bg-amber-700 hover:bg-amber-800 hover:text-white transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-md bg-amber-700 text-white hover:bg-amber-800 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="w-full md:w-96 bg-gray-50 p-6 rounded-2xl shadow-sm flex items-center justify-center">
          <Image
            src="/Images/my_pic.jpeg"
            alt="Fatima-Zahra"
            width={356} 
            height={256} 
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
