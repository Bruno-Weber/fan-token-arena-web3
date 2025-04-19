
import { Check, Shield, Lock, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const VerificationSection = () => {
  const securityFeatures = [
    {
      icon: <FileCheck className="h-6 w-6 text-sport-green" />,
      title: "Verificação via CNPJ",
      description: "Processo de KYC institucional que garante a autenticidade dos clubes participantes."
    },
    {
      icon: <Shield className="h-6 w-6 text-sport-blue" />,
      title: "Segurança Blockchain",
      description: "Tecnologia de ponta para garantir transparência e imutabilidade das transações."
    },
    {
      icon: <Lock className="h-6 w-6 text-sport-red" />,
      title: "Proteção aos Fãs",
      description: "Sistema de verificação que protege os torcedores contra fraudes e tokens falsos."
    }
  ];

  return (
    <section id="verificacao" className="py-24 web3-section bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Segurança e <span className="text-gradient">Transparência</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nossa plataforma prioriza a confiança através de um rigoroso processo de verificação institucional, garantindo que apenas clubes reais e oficiais possam criar fan tokens.
            </p>

            <ul className="space-y-6 mb-8">
              {securityFeatures.map((feature, index) => (
                <li key={index} className="flex gap-4">
                  <div className="mt-1 bg-primary/10 rounded-full p-2">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Button className="bg-web3-primary hover:bg-web3-primary/90 btn-animate">
              Saiba Mais Sobre Segurança
            </Button>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative bg-gradient-to-br from-web3-primary/20 to-sport-blue/20 rounded-2xl p-1 animate-pulse-slow">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="bg-gray-100 rounded-lg p-6 mb-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="font-bold">Verificação Institucional</h3>
                      <p className="text-sm text-muted-foreground">Processo seguro e transparente</p>
                    </div>
                    <Shield className="h-10 w-10 text-sport-green animate-pulse-slow" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-sm">
                      <Check className="h-5 w-5 text-sport-green mr-2" />
                      <span>Validação do CNPJ na Receita Federal</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="h-5 w-5 text-sport-green mr-2" />
                      <span>Verificação de representante legal</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="h-5 w-5 text-sport-green mr-2" />
                      <span>Autenticação de documentação oficial</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="h-5 w-5 text-sport-green mr-2" />
                      <span>Confirmação de identidade institucional</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="bg-sport-green/20 p-2 rounded-full mr-3">
                      <Check className="h-6 w-6 text-sport-green" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Clube Verificado</p>
                      <p className="text-xs text-muted-foreground">Segurança garantida</p>
                    </div>
                  </div>
                  <div className="text-xs px-3 py-1 bg-sport-green/10 text-sport-green rounded-full font-medium">
                    Verificado
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 -bottom-6 -right-6 h-64 w-64 bg-gradient-to-br from-web3-primary to-sport-blue rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationSection;
