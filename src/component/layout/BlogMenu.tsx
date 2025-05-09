import Link from "next/link";

export const BlogMenu = () => {
  return (
    <div className="w-60 p-3 bg-gray-800 flex flex-col ">
      <div className="space-y-10 pt-20">

        <Link href="">
          <button className="px-19 py-2 mb-4 bg-white border border-blue-300 hover:bg-blue-100 rounded-sm shadow-lg">
            liste
          </button>
        </Link>

        <Link href="">
          <button className="px-17 py-2 mb-4 bg-white border border-blue-300 hover:bg-blue-100 rounded-sm shadow-lg">
            profile
          </button>
        </Link>

        <Link href="">
          <button className="px-16 py-2 bg-white border border-blue-300 hover:bg-blue-100 rounded-sm shadow-lg">
            settings
          </button>
        </Link>
      </div>

      <div className="mt-200">
        <img
          src="image/Image 2.jpg"
          alt="yanno"
          className="w-16 h-16 rounded-full border border-gray-200"
        />
      </div>
    </div>
  );
};
