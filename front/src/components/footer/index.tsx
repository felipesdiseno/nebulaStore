import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex items-center bg-gray-200 border-gray-500 border-3px flex justify-center space-x-12 p-4">
      <p> © Nebulosa Store. Todos los Derechos reservados 2024</p>
      <p>Desarrollado por Felipe Sanchez</p>
      <div>
        <div className="flex flex-row  items-center justify-center space-x-2 p-2">
          <h3>sigueme en mis redes: </h3>
          <div className="flex items-center bg-none rounded-full p-2 hover:bg-gray-300">
            <Link href="https://github.com/felipesdiseno">
              <Image
                src="/icons/github.svg"
                alt="github"
                width={30}
                height={0}
              />
            </Link>
          </div>
          <div className="bg-none rounded-full p-2 hover:bg-gray-300">
            <Link href="https://www.instagram.com/">
              <Image
                src="/icons/instagram.svg"
                alt="github"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
