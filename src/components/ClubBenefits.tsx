import { TrendingUp, Users, Wallet, Trophy, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const ClubBenefits = () => {
  const clubImages = [
    {
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
      alt: "Equipe de gestão em reunião"
    },
    {
      url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop",
      alt: "Executivos analisando dados em monitores"
    },
    {
      url: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop",
      alt: "Reunião de diretoria"
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % clubImages.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const benefits = [{
    icon: <TrendingUp className="h-10 w-10 text-sport-blue" />,
    title: "Monetização Direta",
    description: "Crie uma nova fonte de receita recorrente através da venda de fan tokens e transações secundárias."
  }, {
    icon: <Users className="h-10 w-10 text-sport-green" />,
    title: "Engajamento da Torcida",
    description: "Conecte-se com sua torcida globalmente e aumente a participação em decisões do clube."
  }, {
    icon: <Wallet className="h-10 w-10 text-web3-primary" />,
    title: "Economia do Clube",
    description: "Desenvolva um ecossistema econômico próprio em torno do seu token e fidelize seus torcedores."
  }, {
    icon: <Trophy className="h-10 w-10 text-sport-red" />,
    title: "Dados e Insights",
    description: "Acesse informações valiosas sobre sua base de fãs para tomadas de decisão estratégicas."
  }];

  return <section id="clubes" className="py-24 bg-web3-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefícios para <span className="text-gradient">Clubes</span>
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Transforme sua relação com os torcedores e abra novas possibilidades de receita e engajamento através dos fan tokens.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => <div key={index} className="p-5 border border-white/10 bg-web3-dark/50 rounded-xl hover:border-web3-primary/50 transition-all hover:shadow-md">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-white/70 text-sm">{benefit.description}</p>
                </div>)}
            </div>

            <Button 
              className="bg-primary hover:bg-primary/90 neon-box text-lg px-8 py-6"
              size="lg"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Launch App
            </Button>
          </div>

          <div className="md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Carousel>
                <CarouselContent>
                  {clubImages.map((image, index) => (
                    <CarouselItem key={index} className={index === currentImage ? "block" : "hidden"}>
                      <img 
                        src={image.url}
                        alt={image.alt}
                        className="w-full object-cover h-80"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Histórias de Sucesso</h3>
                  <p className="text-white/80 mb-4">
                    Clubes aumentaram sua receita em até 30% no primeiro ano após o lançamento de fan tokens.
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="bg-web3-dark rounded-full h-10 w-10 flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-sport-red" />
                    </div>
                    <div>
                      <p className="font-bold">+200 Clubes</p>
                      <p className="text-sm text-white/70">Já utilizam nossa plataforma</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 bg-web3-dark border border-white/10 rounded-lg shadow-xl p-4 animate-float">
              <div className="flex items-center space-x-3">
                <div className="bg-sport-blue/10 p-2 rounded-full">
                  <TrendingUp className="h-5 w-5 text-sport-blue" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">+45%</p>
                  <p className="text-xs text-white/70">Aumento de receita</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 bg-web3-dark border border-white/10 rounded-lg shadow-xl p-4 animate-float" style={{
            animationDelay: "1.5s"
          }}>
              <div className="flex items-center space-x-3">
                <div className="bg-sport-green/10 p-2 rounded-full">
                  <Users className="h-5 w-5 text-sport-green" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">3.2M</p>
                  <p className="text-xs text-white/70">Fãs engajados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default ClubBenefits;
