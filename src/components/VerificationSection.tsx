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
  return;
};
export default VerificationSection;