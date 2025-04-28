
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
const deepseekApiKey = Deno.env.get('DEEPSEEK_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, contextualInstructions } = await req.json();

    // Message de debug pour le suivi
    console.log("Requête reçue avec le message:", message);
    console.log("Instructions contextuelles:", contextualInstructions);

    // Vérification des clés API
    if (!geminiApiKey && !deepseekApiKey) {
      console.error("Erreur: Aucune clé API trouvée (ni Gemini ni Deepseek)");
      throw new Error("Aucune clé API n'est configurée");
    }

    // Préférence pour Gemini si disponible, sinon utiliser Deepseek
    if (geminiApiKey) {
      console.log("Utilisation de l'API Gemini");
      
      // Combinaison des instructions contextuelles avec le message de l'utilisateur
      const prompt = `${contextualInstructions || "Vous êtes un assistant utile et professionnel."} 

Répondez de manière concise et précise à cette question: ${message}`;

      console.log("Prompt envoyé à l'API:", prompt);

      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${geminiApiKey}`,
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ]
        }),
      });

      // Vérification du statut de la réponse
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Erreur de l'API Gemini:", errorData);
        throw new Error(`Erreur de l'API Gemini: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      // Vérification des erreurs possibles dans la réponse de l'API
      if (data.error) {
        console.error("Erreur API Gemini:", data.error);
        throw new Error(data.error.message || "Erreur de l'API Gemini");
      }
      
      if (!data.candidates || data.candidates.length === 0) {
        console.error("Aucune réponse générée:", data);
        throw new Error("Aucune réponse n'a pu être générée");
      }
      
      const generatedText = data.candidates[0].content.parts[0].text;
      console.log("Réponse générée:", generatedText.substring(0, 100) + "...");

      return new Response(JSON.stringify({ response: generatedText }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } 
    // Fallback sur DeepSeek si Gemini n'est pas disponible
    else if (deepseekApiKey) {
      console.log("Utilisation de l'API DeepSeek");
      
      const prompt = `${contextualInstructions || "Vous êtes un assistant utile et professionnel."} 

Répondez de manière concise et précise à cette question: ${message}`;

      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${deepseekApiKey}`,
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            { role: 'system', content: contextualInstructions || "Vous êtes un assistant utile et professionnel." },
            { role: 'user', content: message }
          ],
          temperature: 0.7,
          max_tokens: 1024,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Erreur de l'API DeepSeek:", errorData);
        throw new Error(`Erreur de l'API DeepSeek: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      if (!data.choices || data.choices.length === 0) {
        console.error("Aucune réponse générée par DeepSeek:", data);
        throw new Error("Aucune réponse n'a pu être générée");
      }
      
      const generatedText = data.choices[0].message.content;
      console.log("Réponse générée (DeepSeek):", generatedText.substring(0, 100) + "...");

      return new Response(JSON.stringify({ response: generatedText }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
