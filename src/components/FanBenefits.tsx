import { Bitcoin, Wallet, Trophy, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const FanBenefits = () => {
  const benefits = [
    {
      icon: <Bitcoin className="h-12 w-12 text-sport-blue" />,
      title: "Participação em Decisões",
      description: "Vote em decisões importantes do clube, desde novos uniformes até contratações estratégicas."
    },
    {
      icon: <Wallet className="h-12 w-12 text-sport-green" />,
      title: "Acesso Exclusivo",
      description: "Garanta ingressos prioritários, acesso a áreas VIP e conteúdos exclusivos."
    },
    {
      icon: <Trophy className="h-12 w-12 text-sport-red" />,
      title: "Benefícios e Recompensas",
      description: "Receba produtos oficiais, encontre com atletas e participe de experiências únicas."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-web3-primary" />,
      title: "Potencial de Valorização",
      description: "Seu token pode valorizar conforme o desempenho e popularidade do clube crescem."
    }
  ];

  return (
    <section id="torcedores" className="py-24 bg-web3-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefícios para <span className="text-gradient">Torcedores</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Vá além de apenas torcer. Participe ativamente do dia a dia do seu clube e obtenha vantagens exclusivas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-web3-dark/50 border border-white/10 flex flex-col items-center text-center p-8 rounded-xl group hover:border-web3-primary/50 transition-all hover:shadow-xl"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-web3-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-white/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-2xl bg-web3-dark/50 border border-white/10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Experimente a Plataforma</h3>
            <p className="text-lg text-white/70 mb-6">
              Nosso app móvel permite que você gerencie seus fan tokens, participe em votações e acesse todos os benefícios exclusivos em um só lugar.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-gradient-to-r from-web3-primary to-sport-blue hover:opacity-90 text-white btn-animate">
                Explorar Fan Tokens
              </Button>
              <Button variant="outline" className="border-white/10 text-white hover:bg-web3-primary/10 btn-animate">
                Acessar Demo
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-web3-dark border border-white/10 p-2 rounded-2xl shadow-xl rotate-3 animate-float">
              <div className="bg-web3-dark/50 rounded-xl p-5">
                <div className="bg-web3-dark/80 rounded-lg p-4 mb-4 shadow-sm border border-white/5">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="font-bold text-white">FC Barcelona</h4>
                      <p className="text-xs text-white/70">Fan Token Oficial</p>
                    </div>
                    <div className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded-full font-medium">
                      Verificado
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="h-14 w-14 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      FCB
                    </div>
                    <div>
                      <p className="font-medium text-white">BAR Token</p>
                      <p className="text-xs text-green-500">1 BAR = $24.80 (+5.3%)</p>
                    </div>
                  </div>
                  <div className="h-20 bg-web3-dark/30 rounded-lg mb-3 flex items-center justify-center border border-white/5">
                    <TrendingUp className="h-8 w-8 text-green-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="text-sm px-3 py-2 bg-web3-primary text-white rounded-lg hover:bg-web3-primary/90 transition-colors">
                      Comprar
                    </button>
                    <button className="text-sm px-3 py-2 bg-web3-dark/50 text-white rounded-lg hover:bg-web3-dark/70 transition-colors">
                      Votar
                    </button>
                  </div>
                </div>
                <div className="bg-web3-dark/80 rounded-lg p-4 shadow-sm border border-white/5">
                  <h4 className="font-medium mb-3 text-white">Votação Ativa</h4>
                  <p className="text-sm mb-3 text-white/70">Escolha o design da nova terceira camisa para a próxima temporada:</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full border border-web3-primary"></div>
                      <span className="text-sm text-white/70">Design Azul e Roxo (38%)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full border border-web3-primary bg-web3-primary"></div>
                      <span className="text-sm text-white/70">Design Preto e Dourado (62%)</span>
                    </div>
                  </div>
                  <button className="w-full text-sm px-3 py-2 bg-web3-primary text-white rounded-lg hover:bg-web3-primary/90 transition-colors">
                    Confirmar Voto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FanBenefits;
