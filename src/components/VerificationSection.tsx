
import { Check, Shield, Lock, FileCheck } from "lucide-react";
import SectionFadeIn from "./SectionFadeIn";

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
    <SectionFadeIn className="bg-gradient-to-b from-[#1A1F2C] via-[#221F26] to-[#8B5CF6] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Segurança e Verificação</h2>
          <p className="text-lg text-white/70 mt-4">Garantimos a autenticidade e segurança para clubes e torcedores</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <SectionFadeIn key={feature.title} className="bg-web3-dark/50 border border-white/10 rounded-xl p-6 hover:border-web3-primary/50 transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </SectionFadeIn>
          ))}
        </div>
      </div>
    </SectionFadeIn>
  );
};

export default VerificationSection;
