import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-gray-200 border-gray-500 border-3px flex justify-center space-x-10 p-4">
      <h4>FOOTER</h4>
      <p> © Nebulosa Store. Todos los Derechos reservados 2024</p>
      <p>Desarrollado por felipesdiseno</p>
      <div>
        <h3>sigueme en mis redes: </h3>
        <div className="flex justify-center space-x-5 p-2">
          <Link href="https://github.com/felipesdiseno">
            <Image src="/icons/github.svg" alt="github" width={30} height={0} />
          </Link>
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
  );
}
