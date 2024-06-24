import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Image src="/icons/nebula.png" alt="nebula" width={30} height={30} />
        <h3>Nebula Store</h3>
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
