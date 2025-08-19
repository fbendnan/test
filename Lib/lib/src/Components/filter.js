export default function Filter({ setTitleSearch }) {
  return (
    <div className="flex justify-center">
    <input
      type="text"
      placeholder="Search your favorite book "
      className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-gray-300 rounded-xl bg-red-100 shadow-md mt-10 py-2 pr-[200px] pl-3"
      onChange={(e) => setTitleSearch(e.target.value)}
    ></input>
    </div>
  );
}
