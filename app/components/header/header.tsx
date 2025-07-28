"use client";
import Image from "next/image";
import Link from "next/link";
// import { FaRegUser } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";

export default function Header() {
    return (
        <header className={`w-full bg-[#151ce0]`}>
            <div className="h-[3.5em] flex items-center pl-[1em] pr-[1em] justify-between">
                <div className="flex items-center pl-3">
                    <GrMenu className="text-xl text-white cursor-pointer" />
                    <Link href="*" className="cursor-pointer">
                        <Image
                        src="/img/logo.png"
                        alt=""
                        width={100}
                        height={100}
                        />
                    </Link>
                </div>
                <div className="flex gap-5 text-white items-center ">
                    
                </div>
            </div>
        </header>
    )
}