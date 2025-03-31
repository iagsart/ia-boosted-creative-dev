
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Map, Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi d'un message (à remplacer par une vraie intégration)
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Votre message a bien été envoyé. Je vous recontacterai dans les plus brefs délais.",
      });
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: "Email",
      value: "contact@geoffroystreit.com",
      link: "mailto:contact@geoffroystreit.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: "Téléphone",
      value: "+33 6 XX XX XX XX",
      link: "tel:+33600000000"
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Localisation",
      value: "Strasbourg, France",
      link: "https://goo.gl/maps/k3mFvt2Lxu4S3xfBA"
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Disponibilité",
      value: "Lun-Ven, 9h-18h",
      link: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      <section className="relative py-20">
        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background -z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-fixed bg-cover opacity-5 mix-blend-overlay -z-10"></div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Contactez-moi"
            subtitle="Une idée, un projet, une question ? N'hésitez pas à me contacter"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden border border-accent/10 shadow-lg bg-card/95 backdrop-blur-sm">
                <div className="p-6 bg-accent/5">
                  <h3 className="text-2xl font-display font-semibold">Envoyez-moi un message</h3>
                  <p className="text-muted-foreground mt-2">Je vous répondrai dans les plus brefs délais.</p>
                </div>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Votre nom</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="John Doe" 
                          required
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Votre email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          value={formState.email}
                          onChange={handleChange}
                          type="email" 
                          placeholder="john@example.com" 
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">Sujet</Label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="Le sujet de votre message" 
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Votre message..." 
                        rows={6} 
                        required
                        className="bg-background/50 min-h-[150px] resize-y"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 gap-6 mb-12"
              >
                {contactInfo.map((info, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="border border-accent/10 hover:border-accent/30 transition-all duration-300 bg-card/95 backdrop-blur-sm">
                      <CardContent className="flex items-center p-6">
                        <div className="bg-accent/10 p-3 rounded-full mr-4">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">{info.title}</h3>
                          {info.link ? (
                            <a 
                              href={info.link} 
                              className="text-muted-foreground hover:text-accent transition-colors duration-300"
                              target={info.link.startsWith('http') ? "_blank" : undefined}
                              rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="border border-accent/10 overflow-hidden bg-card/95 backdrop-blur-sm">
                  <div className="p-6 bg-accent/5 flex items-center">
                    <Map className="h-5 w-5 mr-2 text-accent" />
                    <h3 className="text-xl font-display font-semibold">Localisation</h3>
                  </div>
                  <CardContent className="p-0">
                    <div className="aspect-video w-full">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42239.12593440237!2d7.704346!3d48.57249155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c8495e18b2c1%3A0x971a483118e7241f!2sStrasbourg!5e0!3m2!1sfr!2sfr!4v1658486712365!5m2!1sfr!2sfr" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        title="Carte de Strasbourg"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
