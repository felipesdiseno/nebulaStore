import Link from "next/link";

export default function Custom404() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center "
      style={{ backgroundImage: "url('/404.png')" }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 mt-40 p-2 rounded-lg">
        <Link href="/">
          <h1 className="text-blue-500 hover:underline text-lg  ">
            Volver a Home
          </h1>
        </Link>
      </div>
    </div>
  );
}
