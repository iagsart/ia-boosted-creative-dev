
import { useState } from 'react';
import { Bot, Send, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/integrations/supabase/client';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage = { role: 'user' as const, content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Appel à l'edge function Supabase directement
      const { data, error } = await supabase.functions.invoke('generate-response', {
        body: { message: input.trim() },
      });

      if (error) throw new Error(error.message || 'Failed to get response');
      
      const assistantMessage = { role: 'assistant' as const, content: data.response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'obtenir une réponse. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg z-50"
          >
            <Bot className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        
        <DrawerContent className="h-[80vh]">
          <DrawerHeader>
            <DrawerTitle>Assistant IA</DrawerTitle>
          </DrawerHeader>
          
          <div className="flex flex-col h-full p-4">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Bot className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Bonjour ! Comment puis-je vous aider aujourd'hui ?</p>
                </div>
              )}
              
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground ml-auto'
                        : 'bg-muted'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg p-3">
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </div>
                </div>
              )}
            </div>
            
            <form onSubmit={handleSendMessage} className="mt-auto flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question..."
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading || !input.trim()}>
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Chatbot;
