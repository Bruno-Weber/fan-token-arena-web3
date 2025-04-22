import { Award, ShieldCheck, Users } from "lucide-react";

const HowItWorks = () => {
  const steps = [{
    icon: <ShieldCheck className="h-12 w-12 text-sport-blue" />,
    title: "Instituições Esportivas",
    description: "Passam por um processo de verificação com KYC, garantindo autenticidade e confiança."
  }, {
    icon: <Award className="h-12 w-12 text-web3-primary" />,
    title: "Tokens Exclusivos",
    description: "São criados para cada clube, trazendo benefícios para instituições e torcedores."
  }, {
    icon: <Users className="h-12 w-12 text-sport-red" />,
    title: "Os Fãs",
    description: "Podem adquirir tokens, participar em votações e acessar conteúdos exclusivos."
  }];

  return (
    <section id="como-funciona" className="py-24 bg-gradient-to-b from-web3-dark to-web3-dark/95 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gradient neon-text md:text-4xl px-0 text-center">
            Como Funciona
          </h2>
          <p className="text-2xl font-bold text-white/80 max-w-3xl mx-auto text-center mb-4">
            Fan Tokens agora são mais úteis
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-center">
            Conectamos clubes esportivos e torcedores através de uma plataforma Web3 segura e transparente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line with neon effect */}
          <div className="hidden md:block absolute top-1/3 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-sport-blue via-web3-primary to-sport-red opacity-50 neon-shadow"></div>

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glass-card hover:neon-shadow transition-all duration-500 p-6 group rounded-2xl border border-white/20" 
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
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-web3-primary transition-colors neon-text">
                  {step.title}
                </h3>
                <p className="text-white/80 group-hover:text-white transition-colors">
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
