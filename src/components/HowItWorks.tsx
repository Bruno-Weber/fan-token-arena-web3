import { Trophy, Wallet, Bitcoin } from "lucide-react";

const HowItWorks = () => {
  const steps = [{
    icon: <Trophy className="h-12 w-12 text-sport-blue" />,
    title: "Clubes Verificados",
    description: "Instituições esportivas passam por um rigoroso processo de verificação via CNPJ, garantindo autenticidade e confiança."
  }, {
    icon: <Bitcoin className="h-12 w-12 text-web3-primary" />,
    title: "Criação de Fan Tokens",
    description: "Tokens exclusivos são criados para cada clube, permitindo aos torcedores participação nas decisões e acesso a benefícios exclusivos."
  }, {
    icon: <Wallet className="h-12 w-12 text-sport-red" />,
    title: "Engajamento da Torcida",
    description: "Os fãs podem adquirir tokens, participar em votações, acessar conteúdos exclusivos e até mesmo lucrar com a valorização dos tokens."
  }];

  return (
    <section id="como-funciona" className="py-24 bg-gradient-to-b from-web3-dark to-web3-dark/95 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16">
          <h2 className="text-2xl font-bold mb-2 text-gradient neon-text md:text-3xl animate-fade-in">
            Como Funciona
          </h2>
          <h3
            className="text-3xl md:text-4xl font-bold mb-3 text-gradient neon-glow animate-fade-in"
            style={{ animationDelay: "0.08s", animationFillMode: "backwards" }}
          >
            FAN TOKENS AGORA SÃO MAIS ÚTEIS
          </h3>
          <p
            className="text-lg text-white/80 max-w-3xl text-left animate-fade-in neon-text"
            style={{ animationDelay: "0.17s", animationFillMode: "backwards" }}
          >
            Conectamos clubes esportivos e torcedores através de uma plataforma Web3 segura e transparente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line with neon effect */}
          <div className="hidden md:block absolute top-1/3 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-sport-blue via-web3-primary to-sport-red opacity-50 neon-shadow"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="glass-card hover:neon-shadow transition-all duration-500 p-6 group"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-web3-primary to-sport-blue p-1 rounded-full neon-shadow">
                <div className="bg-web3-dark rounded-full h-16 w-16 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <div className="pt-14">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-web3-primary transition-colors neon-text text-left">
                  {step.title}
                </h3>
                <p className="text-white/80 group-hover:text-white transition-colors text-left">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          
          
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
