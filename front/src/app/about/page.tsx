"use client";
import CustomButton from "@/components/CustomButton";

import Image from "next/image";
import Link from "next/link";

const handleClick = () => {
  console.log("button clicked");
};
const customProps = {
  text: "Ver nuestros productos",
  onClick: handleClick,
};

export default function About() {
  return (
    <div className="m-4 p-6 bg-gray-400 rounded-md max-w-4xl mx-auto">
      <Image
        src="/icons/nebula.png"
        alt="nebulaLogo"
        width={250}
        height={250}
        className="mx-auto"
      />
      <h1 className="text-6xl text-white pb-2">Nebula Store</h1>
      <p className="text-white text-2xl">
        Es tu destino definitivo para lo último en tecnología. Ofrecemos una
        amplia gama de productos, desde los gadgets más innovadores hasta
        componentes de alta calidad. En Nebula Store, nos apasiona brindarte la
        mejor experiencia de compra con un servicio al cliente excepcional y
        precios competitivos. Descubre lo nuevo en tecnología y lleva tu
        experiencia digital al siguiente nivel con Nebulosa Store. ¡Explora,
        compra y disfruta de la tecnología con nosotros!
      </p>
      <div className="mt-6 mx-auto max-w-xs">
        <Link href="/home">
          <CustomButton
            {...customProps}
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          />
        </Link>
      </div>
    </div>
  );
}
