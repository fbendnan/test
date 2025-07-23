function Section3() {
  return (
    <section
      className="bg-cover bg-center h-120 py-10"
      style={{
        backgroundImage: "url('/img/S21.png')", // notice the leading slash
      }}
    >
      <div className="bg-white/80 ml-46 mr-142 flex flex-col gap-5 px-36 py-14 mt-16">
        <h1 className="text-gray-800 font-bold text-3xl">BEDSHEET SETS</h1>
        <div className="flex gap-4">
          <h1 className="text-2xl font-bold text-yellow-800 ">$50.00</h1>
          <h6 className="text-yellow text-sm font-bold text-yellow-800 line-through self-center">
            $220.00
          </h6>
        </div>
        <p className="font-light text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <div>
          <button className="border p-3 text-xs font-semibold ">VIEW DETAILS</button>
        </div>
      </div>
    </section>
  );
}
export default Section3;
