import { CiStar } from "react-icons/ci";

let Section = [
  {
    id: 1,
    Title: "LINEN BEACH TOWEL",
    Price: 30,
    img: "/img/S12.png",
  },
  {
    id: 2,
    Title: "Square Clear Glass Box",
    Price: 30,
    img: "/img/S13.png",
  },
  {
    id: 3,
    Title: "4-pack Small Ceramic Plates",
    Price: 30,
    img: "/img/S14.png",
  },
  {
    id: 4,
    Title: "Large Clear Glass Box",
    Price: 30,
    img: "/img/S15.png",
  },
  {
    id: 5,
    Title: "Round Jute Placemat",
    Price: 30,
    img: "/img/S16.png",
  },
  {
    id: 6,
    Title: "Metal Wire Basket",
    Price: 30,
    img: "/img/S17.png",
  },
];

function Section2() {
  return (
    <>
      <section className="flex flex-wrap justify-around gap-4 mt-10 mx-20">
        {Section.map((item) => (
          <div key={item.id} className="max-h-200 max-w-200">
            <img src={item.img} className="max-h-100 max-w-150" />
            <div>
              <h4 className="font-semibold text-gray-800">{item.Title}</h4>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <CiStar
                    key={index}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                  />
                ))}
              </div>
              <h4 className="font-bold text-gray-800">${item.Price}</h4>
            </div>
          </div>
        ))}
      </section>
      <div className=" p-4 text-center">
        <button className="border py-4 px-12 bg-gray-200 font-semibold text-gray-800">VIEW ALL</button>
      </div>
    </>
  );
}

export default Section2;
