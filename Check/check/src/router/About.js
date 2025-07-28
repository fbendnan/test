import React from 'react';

function About() {
  return (

    <><div className="h-px w-324 bg-gray-400 mx-auto mt-3" />
    <div className="bg-[#f4ede4] text-[#4b3621] min-h-screen p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold border-b-4 border-[#a97458] pb-2 mb-6">About Us</h1>

        <p className="text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-[#a97458]">MOODY STUDIO</span>, where comfort meets elegance.
          Our store was founded with a simple mission: to deliver high-quality chairs that combine timeless design with ergonomic support.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Every chair is crafted with premium materials, whether it's solid oak, vegan leather, or plush cushioning.
          We believe your furniture should not only be functional, but also a beautiful statement in your home or office.
        </p>

        <p className="text-lg leading-relaxed">
          With years of experience and a deep passion for design, our team is dedicated to making sure you sit in style and comfort every day.
        </p>
      </div>
    </div></>
  );
}

export default About;
