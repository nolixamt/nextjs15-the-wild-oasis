import Image from "next/image";
import bg from "@/public/bg.png";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <Image
        src={bg}
        alt={"Background - Image of cabin"}
        fill
        className={"object-cover object-top -z-10"}
      />

      <div className={"flex flex-col items-center gap-y-16"}>
        <p className={"text-7xl mt-6"}>Welcome to paradise</p>
        <Link
          href={"/cabins"}
          className={
            "text-xl bg-accent-500 py-4 px-6 text-primary-800 hover:bg-accent-600 transition"
          }
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}
