import Image from "next/image";
import logo from "../assets/logo.png";

export default function Header() {
    return (
        <header className="bg-[#c8e8b7]">
        <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Image src={logo} alt="logo arte de desfiar" className="w-[160px]"/>
            <ul className="flex gap-20 text-white font-light text-lg">
                <a href="#home" className="hover:text-[#FF0000]">
                    <li>Início</li>
                </a>
                <a href="#photos" className="hover:text-[#FF0000]">
                    <li>Fotos</li>
                </a>
                <a href="#material" className="hover:text-[#FF0000]">
                    <li>Material</li>
                </a>
            </ul>
        </div>
        </header>
    );
}