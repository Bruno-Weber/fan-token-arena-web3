
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Trophy, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    clubName: "",
    isClub: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleToggle = () => {
    setFormData(prev => ({ 
      ...prev, 
      isClub: !prev.isClub 
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio do formulário
    console.log("Formulário enviado:", formData);
    alert("Obrigado por entrar em contato! Retornaremos em breve.");
    setFormData({
      name: "",
      email: "",
      message: "",
      clubName: "",
      isClub: false
    });
  };

  return (
    <section id="contato" className="py-24 bg-web3-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Entre em <span className="text-gradient">Contato</span>
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Quer saber mais sobre como criar fan tokens para seu clube ou como participar como torcedor? Preencha o formulário e nossa equipe entrará em contato.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-web3-primary mt-1" />
                <div>
                  <h3 className="font-bold text-white">Email</h3>
                  <p className="text-white/70">contato@fanbase.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-sport-blue mt-1" />
                <div>
                  <h3 className="font-bold text-white">Telefone</h3>
                  <p className="text-white/70">+55 (11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-sport-red mt-1" />
                <div>
                  <h3 className="font-bold text-white">Endereço</h3>
                  <p className="text-white/70">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-web3-dark/50 border border-white/10 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <Trophy className="h-8 w-8 text-web3-primary" />
                <h3 className="text-xl font-bold text-white">Inscreva-se para o lançamento</h3>
              </div>
              <p className="mb-4 text-white/70">
                Seja o primeiro a saber quando nossa plataforma estiver disponível para o público.
              </p>
              <div className="flex gap-3">
                <Input 
                  type="email" 
                  placeholder="Seu email" 
                  className="bg-web3-dark/30 border-white/10 text-white placeholder:text-white/50" 
                />
                <Button className="bg-web3-primary hover:bg-web3-primary/90 text-white btn-animate whitespace-nowrap">
                  Inscrever-se
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-web3-dark/50 border border-white/10 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Envie uma mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between bg-web3-dark/30 rounded-lg p-1.5 mb-6">
                    <button
                      type="button"
                      onClick={handleToggle}
                      className={`py-2 px-4 rounded-md w-1/2 transition-all ${!formData.isClub ? 'bg-web3-dark text-web3-primary shadow-sm' : 'text-white/70'}`}
                    >
                      Sou Torcedor
                    </button>
                    <button
                      type="button"
                      onClick={handleToggle}
                      className={`py-2 px-4 rounded-md w-1/2 transition-all ${formData.isClub ? 'bg-web3-dark text-web3-primary shadow-sm' : 'text-white/70'}`}
                    >
                      Represento um Clube
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">Nome {formData.isClub && "do Representante"}</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={formData.isClub ? "Nome do representante" : "Seu nome"}
                      required
                      className="bg-web3-dark/30 border-white/10 text-white placeholder:text-white/50"
                    />
                  </div>

                  {formData.isClub && (
                    <div>
                      <label htmlFor="clubName" className="block text-sm font-medium mb-1 text-white">Nome do Clube</label>
                      <Input
                        id="clubName"
                        name="clubName"
                        value={formData.clubName}
                        onChange={handleChange}
                        placeholder="Nome do clube/instituição"
                        required={formData.isClub}
                        className="bg-web3-dark/30 border-white/10 text-white placeholder:text-white/50"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Seu email"
                      required
                      className="bg-web3-dark/30 border-white/10 text-white placeholder:text-white/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-white">Mensagem</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Como podemos ajudar?"
                      rows={4}
                      required
                      className="bg-web3-dark/30 border-white/10 text-white placeholder:text-white/50"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-web3-primary to-sport-blue hover:opacity-90 text-white btn-animate"
                >
                  Enviar Mensagem
                </Button>

                <p className="text-xs text-center text-white/50">
                  Ao enviar este formulário, você concorda com nossa Política de Privacidade e Termos de Serviço.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
