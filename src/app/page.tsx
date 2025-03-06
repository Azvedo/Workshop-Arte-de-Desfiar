import Image from "next/image";
import Header from "@/components/header";
import Carrousel from "@/components/carrousel";
import Footer from "@/components/footer";
import homeIMG from "@/assets/home_image.jpg";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section id="home" className="flex justify-around items-center py-10">
          <div className="flex flex-col">
            <h1 className="text-start text-3xl text-red-600 font-bold my-10">
              Workshop de Bordado e Desfiado
            </h1>
            <p className="text-start text-xl text-gray-500 font-light max-w-xl">
              No nosso Workshop de Bordado e Desfiado, os participantes tiveram a oportunidade de aprender duas técnicas incríveis: Ponto Gira Mundo e Ponto X. Em uma experiência totalmente prática e imersiva, cada aluno colocou a mão na agulha e saiu do evento com uma peça bordada feita por suas próprias mãos!
              Com um ambiente acolhedor e materiais preparados com cuidado, o workshop proporcionou não apenas aprendizado, mas também um momento de troca e criatividade.
            </p>
          </div>
          <div>
            <Image
              src={homeIMG}
              alt="Ceça Arte de desfiar"
              className="rounded-lg w-96"
            />
          </div>
        </section>
        <section id="photos" className="bg-linear-to-b from-[#c8e8b7] to-[#c8e8b7]/10 py-8">
          <h1 className="text-center text-red-600 text-3xl font-bold p-4">
            Fotos
          </h1>
          <Carrousel />
        </section>
      </main>
      <Footer />
    </div>
  );
}
