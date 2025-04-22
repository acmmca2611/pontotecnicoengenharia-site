import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Head>
        <title>Ponto Técnico Engenharia</title>
        <meta name="description" content="Execução de obras, projetos técnicos e consultoria especializada em engenharia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-gradient-to-r from-[#5c1e1e] to-[#8e4e1e] text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Ponto Técnico Engenharia</h1>
        <p className="text-xl">Do Virtual ao Concreto</p>
        <Image 
          src="/construction-banner.jpg" 
          alt="Imagem de obra em andamento representando engenharia moderna" 
          width={1200} 
          height={400} 
          className="mx-auto mt-6 rounded-xl" 
        />
      </section>

      <section className="py-10 px-6 grid gap-6 md:grid-cols-3">
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Serviços</h2>
            <p>Execução e acompanhamento de obras civis, reformas e construções comerciais e residenciais.</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Projetos</h2>
            <p>Desenvolvimento técnico de projetos estruturais, elétricos e hidráulicos com precisão e qualidade.</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Consultoria</h2>
            <p>Assessoria técnica especializada para otimizar obras e garantir a viabilidade técnica e legal.</p>
          </CardContent>
        </Card>
      </section>

      <section className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Entre em contato</h2>
        <p className="mb-6">Solicite um orçamento ou tire dúvidas com nossa equipe.</p>
        <a 
          href="https://wa.me/5599999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Fale conosco no WhatsApp"
        >
          <Button className="bg-[#5c1e1e] text-white hover:bg-[#411616] px-6 py-3 rounded-2xl text-lg">
            Fale conosco no WhatsApp
          </Button>
        </a>
      </section>

      <footer className="bg-black text-white text-center py-6">
        <p className="text-sm">© 2025 Ponto Técnico Engenharia e Construções LTDA. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
