
import { Check, Shield, Lock, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const VerificationSection = () => {
  const securityFeatures = [{
    icon: <FileCheck className="h-6 w-6 text-sport-green" />,
    title: "Verificação via CNPJ",
    description: "Processo de KYC institucional que garante a autenticidade dos clubes participantes."
  }, {
    icon: <Shield className="h-6 w-6 text-sport-blue" />,
    title: "Segurança Blockchain",
    description: "Tecnologia de ponta para garantir transparência e imutabilidade das transações."
  }, {
    icon: <Lock className="h-6 w-6 text-sport-red" />,
    title: "Proteção aos Fãs",
    description: "Sistema de verificação que protege os torcedores contra fraudes e tokens falsos."
  }];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Verificação e Segurança</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="bg-primary/10 hover:bg-primary/20">
            Saiba Mais Sobre Nosso Processo de Verificação
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VerificationSection;
