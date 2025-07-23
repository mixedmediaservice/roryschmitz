import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <Image
        src="/hero-image.jpg"
        alt="Rory Schmitz"
        fill
        className="object-cover"
        priority
      />
    </main>
  );
}