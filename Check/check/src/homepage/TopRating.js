import { CiStar } from "react-icons/ci";

let TopItems = [
  {
    id: 1,
    img: "/img/TopRating/image.png",
    Title: "Tray with Foot",
    Price: 30,
  },
  {
    id: 2,
    img: "/img/TopRating/image2.png",
    Title: "Twill Seat Cushion",
    Price: 30,
  },
  {
    id: 3,
    img: "/img/TopRating/image3.png",
    Title: "Fluted Beverage Glass",
    Price: 30,
  },
  {
    id: 4,
    img: "/img/TopRating/image4.png",
    Title: "Ceramic Egg Cup",
    Price: 30,
  },
  {
    id: 5,
    img: "/img/TopRating/image5.png",
    Title: "Tray with Foot",
    Price: 30,
  },
  {
    id: 6,
    img: "/img/TopRating/image6.png",
    Title: "Tray with Foot",
    Price: 30,
  },
];

function TopRating() {
  return (
    <>
      <div className="px-10 ">
        <h1 className="ml-24 mt-10 mb-8 font-bold text-gray-800 text-3xl">TOP RATING</h1>
        <section className="grid grid-cols-3 place-content-center gap-4 mx-20">
          {TopItems.map((item) => (
            <div key={item.id} className="flex gap-1 max-h-200 max-w-200">
              <img src={item.img} className="max-h-100 max-w-150" />
              <div className="flex flex-col self-center max-w-1/3 ">
                <h2 className="font-semibold text-gray-800">{item.Title}</h2>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <CiStar
                      key={index}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <h2 className="font-bold text-gray-800">${item.Price}</h2>
              </div>
            </div>
          ))}

          <div className=" p-4 col-2 text-center">
            <button className="border py-4 px-12 bg-black/90 font-semibold text-white">
              load more products
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default TopRating;
