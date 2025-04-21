import { Bitcoin, Wallet, Trophy, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
const FanBenefits = () => {
  const benefits = [{
    icon: <Bitcoin className="h-12 w-12 text-sport-blue" />,
    title: "Participação em Decisões",
    description: "Vote em decisões importantes do clube, desde novos uniformes até contratações estratégicas."
  }, {
    icon: <Wallet className="h-12 w-12 text-sport-green" />,
    title: "Acesso Exclusivo",
    description: "Garanta ingressos prioritários, acesso a áreas VIP e conteúdos exclusivos."
  }, {
    icon: <Trophy className="h-12 w-12 text-sport-red" />,
    title: "Benefícios e Recompensas",
    description: "Receba produtos oficiais, encontre com atletas e participe de experiências únicas."
  }, {
    icon: <TrendingUp className="h-12 w-12 text-web3-primary" />,
    title: "Potencial de Valorização",
    description: "Seu token pode valorizar conforme o desempenho e popularidade do clube crescem."
  }];
  return <section id="torcedores" className="py-24 bg-web3-dark">
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
          {benefits.map((benefit, index) => <div key={index} className="bg-web3-dark/50 border border-white/10 flex flex-col items-center text-center p-8 rounded-xl group hover:border-web3-primary/50 transition-all hover:shadow-xl">
              <div className="mb-6 transform group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-web3-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-white/70">
                {benefit.description}
              </p>
            </div>)}
        </div>

        
      </div>
    </section>;
};
export default FanBenefits;