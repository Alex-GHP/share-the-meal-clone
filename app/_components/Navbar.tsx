"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, XCircle } from "lucide-react";
import useMediaQuery from "@/_hooks/useMediaQuery";
import { useState } from "react";

const Navbar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 900px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  return (
    <nav className="flex items-center justify-between z-10 fixed bg-gray-50 shadow-lg w-full top-0 ">
      <Link href="/">
        <Image
          src="/logosvg.svg"
          alt="DonorHub logo"
          width={100}
          height={50}
          className="sm:w-[200px]"
        />
      </Link>
      {isAboveMediumScreens ? (
        <div className="flex gap-16 text-[#1f1f1f]">
          <Link
            href={`/about`}
            className="hover:text-gray-600 hover:border-b hover:border-gray-600 font-bold"
          >
            ABOUT
          </Link>
          <Link
            href={`/campaigns`}
            className="hover:text-gray-600 hover:border-b hover:border-gray-600 font-bold"
          >
            CAMPAIGNS
          </Link>
        </div>
      ) : (
        <button
          className="bg-none"
          onClick={() => {
            setIsMenuToggled(!isMenuToggled);
            console.log("asd");
          }}
        >
          {isMenuToggled ? <XCircle /> : <Menu />}
        </button>
      )}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed border-t-2 border-gray-100 shadow-xl gap-8 bg-blue-300 text-white drop-shadow-2xl right-0 h-full top-10 sm:top-20 w-[300px] z-40 flex flex-col pl-10 justify-start py-16">
          <Link href={`/despre`} className="active:text-gray-200 font-bold">
            DESPRE
          </Link>
          <Link href={`/campanii`} className="active:text-gray-200 font-bold">
            CAPMANII
          </Link>
        </div>
      )}
      <Link href="/campanii">
        <button className="font-semibold text-[#1f1f1f] hover:scale-110 transition duration-300 mr-4 rounded-lg py-1 sm:py-3 px-8 sm:px-10 bg-yellow-400 active:bg-yellow-300">
          Donate
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
