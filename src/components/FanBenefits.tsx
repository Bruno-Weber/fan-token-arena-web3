
import { Bitcoin, Wallet, Trophy, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const FanBenefits = () => {
  const benefits = [{
    icon: <Bitcoin className="h-10 w-10 text-sport-blue" />,
    title: "Participação em Decisões",
    description: "Vote em decisões importantes do clube, desde novos uniformes até contratações estratégicas."
  }, {
    icon: <Wallet className="h-10 w-10 text-sport-green" />,
    title: "Acesso Exclusivo",
    description: "Garanta ingressos prioritários, acesso a áreas VIP e conteúdos exclusivos."
  }, {
    icon: <Trophy className="h-10 w-10 text-sport-red" />,
    title: "Benefícios e Recompensas",
    description: "Receba produtos oficiais, encontre com atletas e participe de experiências únicas."
  }, {
    icon: <TrendingUp className="h-10 w-10 text-web3-primary" />,
    title: "Potencial de Valorização",
    description: "Seu token pode valorizar conforme o desempenho e popularidade do clube crescem."
  }];

  return (
    <section id="torcedores" className="py-24 bg-web3-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefícios para <span className="text-gradient">Torcedores</span>
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Vá além de apenas torcer. Participe ativamente do dia a dia do seu clube e obtenha vantagens exclusivas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="p-5 border border-white/10 bg-web3-dark/50 rounded-xl hover:border-web3-primary/50 transition-all hover:shadow-md"
                >
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-white/70 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            <Button className="bg-sport-blue hover:bg-sport-blue/90 text-white btn-animate">LAUNCH APP</Button>
          </div>

          <div className="md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1668894408172-d0d19f4675a0?w=800&auto=format&fit=crop" 
                alt="Torcedores em estádio" 
                className="w-full object-cover h-80" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Histórias de Sucesso</h3>
                  <p className="text-white/80 mb-4">
                    Torcedores que participaram de fan tokens aumentaram seu engajamento em até 75%.
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="bg-web3-dark rounded-full h-10 w-10 flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-sport-red" />
                    </div>
                    <div>
                      <p className="font-bold">+100k Torcedores</p>
                      <p className="text-sm text-white/70">Já utilizam fan tokens</p>
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
                  <p className="text-2xl font-bold text-white">+75%</p>
                  <p className="text-xs text-white/70">Engajamento</p>
                </div>
              </div>
            </div>

            <div 
              className="absolute -bottom-5 -left-5 bg-web3-dark border border-white/10 rounded-lg shadow-xl p-4 animate-float" 
              style={{
                animationDelay: "1.5s"
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-sport-green/10 p-2 rounded-full">
                  <Wallet className="h-5 w-5 text-sport-green" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">3.5M</p>
                  <p className="text-xs text-white/70">Tokens Emitidos</p>
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
