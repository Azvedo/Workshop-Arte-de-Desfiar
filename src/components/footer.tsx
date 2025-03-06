
import Image from "next/image";
import footerIMG from "../assets/footer.png"; 

export default function Footer() {
    return (
        <footer className="bg-white shadow">
            <div className="mx-auto sm:px-6 lg:px-8 flex items-center justify-around py-2">  
                <p className="text-gray-500 text-sm">© 2025 Artededesfiar. Todos os direitos reservados.</p>
                <Image src={footerIMG} alt="PNAB" className="opacity-65 w-2xl z-0"/>
            </div>
        </footer>
    );
}