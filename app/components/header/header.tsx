"use client";
import Image from "next/image";
import Link from "next/link";
// import { FaRegUser } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";

export default function Header() {
    return (
        <header className={`w-full bg-[#151ce0]`}>
            <div className="h-[3.5em] flex items-center pl-[1em] pr-[1em] justify-between xl:w-[1080px] xl:m-auto">
                <div className="flex items-center pl-3 gap-4">
                    <GrMenu className="text-xl text-white cursor-pointer xl:hidden" />
                    <Link href="*" className="cursor-pointer">
                        <Image
                        src="/img/logo.png"
                        alt=""
                        width={100}
                        height={100}
                        />
                    </Link>
                    <ul className="xl:flex gap-2 items-center text-white hidden">
                        <li><Link href="/" className="active:bg-white/15 active:p-2 active:shadow-sm active:shadow-black/50 p-2">Planos Controle</Link></li>
                        <li><Link href="/" className="active:bg-white/15 active:p-2 active:shadow-sm active:shadow-black/50 p-2">TIM Pré XIP</Link></li>
                    </ul>
                </div>
                <div className="flex gap-5 text-white items-center ">
                    
                </div>
            </div>
        </header>
    )
}