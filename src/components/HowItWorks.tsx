
import { Trophy, Wallet, Bitcoin } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Trophy className="h-12 w-12 text-sport-blue" />,
      title: "Clubes Verificados",
      description: "Instituições esportivas passam por um rigoroso processo de verificação via CNPJ, garantindo autenticidade e confiança."
    },
    {
      icon: <Bitcoin className="h-12 w-12 text-web3-primary" />,
      title: "Criação de Fan Tokens",
      description: "Tokens exclusivos são criados para cada clube, permitindo aos torcedores participação nas decisões e acesso a benefícios exclusivos."
    },
    {
      icon: <Wallet className="h-12 w-12 text-sport-red" />,
      title: "Engajamento da Torcida",
      description: "Os fãs podem adquirir tokens, participar em votações, acessar conteúdos exclusivos e até mesmo lucrar com a valorização dos tokens."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Como Funciona</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conectamos clubes esportivos e torcedores através de uma plataforma Web3 segura e transparente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/3 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-sport-blue via-web3-primary to-sport-red"></div>

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="sport-card bg-card flex flex-col items-center text-center relative group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-sport-blue via-web3-primary to-sport-red p-1 rounded-full">
                <div className="bg-background rounded-full h-16 w-16 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <div className="pt-14">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium max-w-xl mx-auto mb-8">
            Nossa plataforma garante uma experiência segura, transparente e emocionante para clubes e torcedores.
          </p>
          <a 
            href="#verificacao" 
            className="inline-flex items-center text-primary font-medium hover:text-primary/80 group"
          >
            Saiba mais sobre nossa verificação de CNPJ
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
