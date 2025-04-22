import { FileCheck, Wallet, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [{
    icon: <Wallet className="h-10 w-10 text-web3-primary" />,
    title: "Criação de Fan Token",
    description: "Personalize seu token e defina os benefícios exclusivos para os detentores."
  }, {
    icon: <Trophy className="h-10 w-10 text-sport-red" />,
    title: "Listagem na Plataforma",
    description: "Seu fan token estará disponível para compra e venda na nossa plataforma."
  },
    {
      icon: <FileCheck className="h-10 w-10 text-sport-green" />,
      title: "Verificação Institucional",
      description: "Instituições esportivas passam por um processo de verificação com KYC."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-web3-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Como <span className="text-gradient">Funciona</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-8 bg-web3-dark rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 neon-box text-lg px-8 py-6">
            <Rocket className="mr-2 h-5 w-5" />
            Comece Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
