import Link from "next/link";
import Post from "../../component/Post";
import Button from "@/component/Bouton";
import axios from "axios";

export default async function Home() {
  const response = await fetch("http://localhost:3333/api/posts", {
    method: "get",
  });

  const posts = await response.json();

  return (
    <div className="h-screen flex flex-col">
      <main className="min-h-screen bg-white flex flex-col items-left pb-2">
        <div className="grid grid-cols-8 justify-content-around">
          {posts.data.map((item, index) => (
            <div key={index} className="col-span-2 mx-2">
              <Post {...item} />
            </div>
          ))}
        </div>
        <Link href="/post">
          <Button
            title="poster"
            type="submit"
            className="w-40 bg-blue-500 hover:bg-blue-600 text-white py-2 mt-110 ml-10 rounded-md"
            onClick={undefined}
          />
        </Link>
      </main>
    </div>
  );
}
