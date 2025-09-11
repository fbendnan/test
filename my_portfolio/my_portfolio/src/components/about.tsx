import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="w-72 h-72 relative rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
          <img src="/Images/my_pic.jpeg" alt="my pic" className="h-full" />
        </div>

        <div className="flex-1">
          <h2 className="text-4xl text-gray-800 font-bold mb-4">
            <a id="about">About Me</a>
          </h2>
          <p className="text-gray-700 mb-4">
            I am a Full Stack student at GoMyCode. I am passionate about
            creating beautiful, creative, and responsive web applications using
            different tools such as HTML, CSS, JavaScript, React, Next.js, and
            more.
          </p>
          <p className="text-gray-700">
            I enjoy learning new technologies, solving problems, and building
            projects that make a difference. I am motivated to continuously
            improve my skills and bring ideas to life through code.
          </p>
        </div>
      </div>
    </section>
  );
}
