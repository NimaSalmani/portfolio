import logo from "@/public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

export const Navigation = () => {
  return (
    <div className="w-full border-b-[1px] border-background-gray-dark pt-[40px]">
      <Image
        src={logo}
        width={60}
        height={60}
        alt="portfolio"
        className="w-[60px] mx-auto"
      />
      <div className="flex justify-center gap-[32px] text-[14px] text-typography-gray-default py-[24px]">
        <nav>
          <Link href={""} className=" hover:text-typography-gray-light">
            Home
          </Link>
        </nav>
        <nav>
          <Link href={""} className=" hover:text-typography-gray-light">
            Projects
          </Link>
        </nav>
        <nav>
          <Link href={""} className=" hover:text-typography-gray-light">
            About Me
          </Link>
        </nav>
        <nav>
          <Link href={""} className=" hover:text-typography-gray-light">
            My Skills
          </Link>
        </nav>
        <nav>
          <Link href={""} className=" hover:text-typography-gray-light">
            Contact Me
          </Link>
        </nav>
      </div>
    </div>
  );
};
