let FirstSection = [
  {
    id: 1,
    Title: "INY VINTAGE CHAIR",
    img: "/img/Pastedimage2.png",
  },
  {
    id: 2,
    Title: "LARGE TERRACOTA VASE",
    img: "/img/image.png",
  },
];

function Section1(){
    return(
        <section>
      <div
        className="h-130 w-323 bg-cover bg-center mt-4"
        style={{ backgroundImage: "url('/img/Pastedimage.png')" }}
      >
        <div className=" w-full flex justify-end p-40 font-bold">
          <div className="flex flex-col gap-8">
            <h4 className="text-xl text-gray-900">HOT DEALS THIS WEEK</h4>
            <h1 className="text-5xl text-yellow-700">
              SALE UP 50% <br></br> MODERN FURNITURE
            </h1>
            <button className="text-xs text-gray-800 border mr-100 py-3 px-6 ">
              VIEW NOW
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-10 py- px-20 gap-10">
  {FirstSection.map((item) => (
    <div key={item.id} className="flex w-[50%] h-80 ">
      <img
        src={item.img}
        alt={item.Title}
        className="w-1/2 h-full object-cover"
      />
      <div className="flex flex-col justify-between py-24 px-4 w-1/2">
        <h1 className="font-semibold text-gray-800 text-2xl leading-tight">
          {item.Title}
        </h1>
        <button className="text-xs text-gray-800 border p-3 mr-30 font-semibold">
          VIEW DETAILS
        </button>
      </div>
    </div>
  ))}
</div>

    </section>
    )
}

export default Section1;