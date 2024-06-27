import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white border-b-2">
      <div className="max-w-screen-xl flex items-center justify-between mx-1 px-6 py-2">
        <div className="flex items-center space-x-6">
          <Image src="/icons/nebula.png" alt="nebula" width={50} height={50} />
          <h3 className="text-3xl text-gray-500">Nebula Store</h3>
        </div>

        <div className="flex items-center space-x-6 ml-auto">
          <Link
            href="/home"
            className="text-gray-500 hover:text-gray-700 transform scale-110"
          >
            Home
          </Link>
          <Link href="/about" className="text-gray-500 hover:text-gray-700">
            About
          </Link>
          <Link
            href="/authentication"
            className="text-gray-500 hover:text-gray-700"
          >
            ingresar
          </Link>
        </div>
      </div>
    </nav>
  );
}
