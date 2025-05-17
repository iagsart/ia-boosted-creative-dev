
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Database, ArrowRight, Workflow, Link, Network, Zap, Code, Settings } from "lucide-react";

interface DiagramNodeProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  position: [number, number]; // [x, y] position in percentage
  color?: string;
}

interface DiagramConnectionProps {
  from: string;
  to: string;
  label?: string;
  animated?: boolean;
}

interface WorkflowDiagramProps {
  title: string;
  subtitle: string;
  nodes: DiagramNodeProps[];
  connections: DiagramConnectionProps[];
}

const WorkflowDiagram = ({ title, subtitle, nodes, connections }: WorkflowDiagramProps) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  
  // Get position for curved arrow connections
  const getControlPoint = (x1: number, y1: number, x2: number, y2: number) => {
    // Calculate control point for curved path
    const dx = x2 - x1;
    const dy = y2 - y1;
    const mid = [(x1 + x2) / 2, (y1 + y2) / 2];
    
    // Create curve with bend proportional to distance
    const curveFactor = Math.min(Math.max(Math.sqrt(dx * dx + dy * dy) * 0.2, 30), 100);
    
    // Move control point perpendicular to line
    if (Math.abs(dx) > Math.abs(dy)) {
      // More horizontal line
      return `${mid[0]},${mid[1] - curveFactor}`;
    } else {
      // More vertical line
      return `${mid[0] - curveFactor},${mid[1]}`;
    }
  };
  
  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
      
      <div className="relative w-full aspect-[16/9] border border-border rounded-lg overflow-hidden bg-accent/5">
        {/* Connection lines between nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" className="fill-primary/70" />
            </marker>
            
            <marker
              id="arrowhead-highlighted"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" className="fill-primary" />
            </marker>
          </defs>
          
          {/* Connection lines */}
          {connections.map((connection, i) => {
            const fromNode = nodes.find(n => n.title === connection.from);
            const toNode = nodes.find(n => n.title === connection.to);
            
            if (!fromNode || !toNode) return null;
            
            const [x1, y1] = fromNode.position;
            const [x2, y2] = toNode.position;
            
            // Calculate positions
            const startX = `${x1}%`;
            const startY = `${y1}%`;
            const endX = `${x2}%`;
            const endY = `${y2}%`;
            const controlPoint = getControlPoint(x1, y1, x2, y2);
            
            const isHighlighted = fromNode.title === hoveredNode || toNode.title === hoveredNode;
            
            return (
              <g key={i} className={`transition-opacity duration-300 ${isHighlighted || !hoveredNode ? "opacity-100" : "opacity-20"}`}>
                <path
                  d={`M ${startX},${startY} Q ${controlPoint} ${endX},${endY}`}
                  fill="none"
                  stroke={isHighlighted ? "var(--primary)" : "var(--primary-foreground)"}
                  strokeOpacity={isHighlighted ? 1 : 0.4}
                  strokeWidth={isHighlighted ? 3 : 2}
                  strokeDasharray={connection.animated ? "5,5" : ""}
                  className={connection.animated ? "animate-pulse" : ""}
                  markerEnd={isHighlighted ? "url(#arrowhead-highlighted)" : "url(#arrowhead)"}
                />
                
                {connection.label && (
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    className={`text-xs ${isHighlighted ? "text-primary font-medium" : "text-muted-foreground"}`}
                    transform={`translate(${(x1 + x2) / 2}%, ${(y1 + y2) / 2 - 5}%)`}
                  >
                    {connection.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
        
        {/* Nodes */}
        {nodes.map((node, i) => {
          const [x, y] = node.position;
          
          // Determine classes based on hover state
          const isHighlighted = node.title === hoveredNode;
          const isConnected = !hoveredNode || hoveredNode === node.title || 
            connections.some(c => 
              (c.from === node.title && c.to === hoveredNode) || 
              (c.to === node.title && c.from === hoveredNode)
            );
            
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
                backgroundColor: node.color || 'var(--background)',
              }}
              className={`absolute px-3 py-2 rounded-lg border shadow-sm transition-all duration-300 cursor-pointer z-10
                ${isHighlighted ? 'border-primary ring-2 ring-primary/20 shadow-lg scale-110' : 'border-border'}
                ${isConnected ? 'opacity-100' : 'opacity-30'}`}
              onMouseEnter={() => setHoveredNode(node.title)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className={`p-1 rounded-full ${isHighlighted ? 'bg-primary/20' : 'bg-accent/50'}`}>
                  {node.icon}
                </div>
                <div>
                  <div className={`font-medium text-sm ${isHighlighted ? 'text-primary' : ''}`}>{node.title}</div>
                  <div className="text-xs text-muted-foreground max-w-[120px] truncate">{node.description}</div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

interface AutomationDiagramsProps {
  className?: string;
}

// Predefined diagrams
const simpleDiagram = {
  title: "Workflow d'automatisation IA basique",
  subtitle: "Architecture standard d'un workflow d'automatisation",
  nodes: [
    {
      title: "Déclencheur",
      description: "Événement initial",
      icon: <Bot className="h-4 w-4 text-primary" />,
      position: [15, 30] as [number, number]
    },
    {
      title: "Récupération de données",
      description: "Collecte d'informations",
      icon: <Database className="h-4 w-4 text-primary" />,
      position: [35, 25] as [number, number]
    },
    {
      title: "Traitement IA",
      description: "Analyse et traitement",
      icon: <Workflow className="h-4 w-4 text-primary" />,
      position: [60, 35] as [number, number]
    },
    {
      title: "Action finale",
      description: "Exécution de l'action",
      icon: <ArrowRight className="h-4 w-4 text-primary" />,
      position: [85, 30] as [number, number]
    },
    {
      title: "Stockage",
      description: "Sauvegarde des résultats",
      icon: <Database className="h-4 w-4 text-primary" />,
      position: [75, 65] as [number, number]
    }
  ],
  connections: [
    { from: "Déclencheur", to: "Récupération de données" },
    { from: "Récupération de données", to: "Traitement IA" },
    { from: "Traitement IA", to: "Action finale" },
    { from: "Traitement IA", to: "Stockage", animated: true },
  ]
};

const advancedDiagram = {
  title: "Architecture RAG pour NotebookLM",
  subtitle: "Workflow d'automatisation avec processus RAG",
  nodes: [
    {
      title: "Documents",
      description: "Sources de données",
      icon: <Database className="h-4 w-4 text-blue-500" />,
      position: [10, 30] as [number, number]
    },
    {
      title: "Extraction",
      description: "Parser & OCR",
      icon: <Code className="h-4 w-4 text-purple-500" />,
      position: [30, 20] as [number, number]
    },
    {
      title: "Vectorisation",
      description: "Embeddings",
      icon: <Network className="h-4 w-4 text-green-500" />,
      position: [50, 20] as [number, number]
    },
    {
      title: "Base vectorielle",
      description: "Stockage spécialisé",
      icon: <Database className="h-4 w-4 text-orange-500" />,
      position: [70, 20] as [number, number]
    },
    {
      title: "Prompt utilisateur",
      description: "Question / requête",
      icon: <Workflow className="h-4 w-4 text-primary" />,
      position: [20, 60] as [number, number]
    },
    {
      title: "Retrieval",
      description: "Recherche sémantique",
      icon: <Link className="h-4 w-4 text-primary" />,
      position: [40, 60] as [number, number]
    },
    {
      title: "LLM",
      description: "Génération de contenu",
      icon: <Bot className="h-4 w-4 text-primary" />,
      position: [60, 60] as [number, number]
    },
    {
      title: "Réponse",
      description: "Augmentée par contexte",
      icon: <ArrowRight className="h-4 w-4 text-primary" />,
      position: [85, 50] as [number, number]
    }
  ],
  connections: [
    { from: "Documents", to: "Extraction" },
    { from: "Extraction", to: "Vectorisation" },
    { from: "Vectorisation", to: "Base vectorielle" },
    { from: "Prompt utilisateur", to: "Retrieval" },
    { from: "Base vectorielle", to: "Retrieval", label: "Contexte", animated: true },
    { from: "Retrieval", to: "LLM" },
    { from: "LLM", to: "Réponse" },
  ]
};

const enterpriseDiagram = {
  title: "Orchestration multi-systèmes",
  subtitle: "Intégration complexe entre systèmes d'entreprise",
  nodes: [
    {
      title: "CRM",
      description: "Salesforce",
      icon: <Database className="h-4 w-4 text-blue-500" />,
      position: [15, 20] as [number, number]
    },
    {
      title: "ERP",
      description: "SAP",
      icon: <Settings className="h-4 w-4 text-green-500" />,
      position: [15, 60] as [number, number]
    },
    {
      title: "Plateforme IA",
      description: "OpenAI/Azure",
      icon: <Bot className="h-4 w-4 text-purple-500" />,
      position: [50, 15] as [number, number]
    },
    {
      title: "Automatisation",
      description: "n8n / Make",
      icon: <Workflow className="h-4 w-4 text-primary" />,
      position: [45, 40] as [number, number]
    },
    {
      title: "Base de Connaissances",
      description: "Notion/Confluence",
      icon: <Database className="h-4 w-4 text-orange-500" />,
      position: [50, 65] as [number, number]
    },
    {
      title: "Marketing",
      description: "HubSpot",
      icon: <Zap className="h-4 w-4 text-pink-500" />,
      position: [75, 25] as [number, number]
    },
    {
      title: "Communication",
      description: "Slack/Teams",
      icon: <Link className="h-4 w-4 text-blue-500" />,
      position: [75, 55] as [number, number]
    }
  ],
  connections: [
    { from: "CRM", to: "Automatisation", animated: true },
    { from: "ERP", to: "Automatisation", animated: true },
    { from: "Base de Connaissances", to: "Automatisation", animated: true },
    { from: "Automatisation", to: "Plateforme IA", label: "Requêtes" },
    { from: "Plateforme IA", to: "Automatisation", label: "Réponses" },
    { from: "Automatisation", to: "Marketing", animated: true },
    { from: "Automatisation", to: "Communication", animated: true },
  ]
};

const AutomationDiagrams = ({ className }: AutomationDiagramsProps) => {
  return (
    <div className={`${className || ''}`}>
      <Tabs defaultValue="simple" className="w-full">
        <div className="flex justify-center mb-4">
          <TabsList>
            <TabsTrigger value="simple">Workflow Simple</TabsTrigger>
            <TabsTrigger value="rag">Architecture RAG</TabsTrigger>
            <TabsTrigger value="enterprise">Orchestration Entreprise</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="simple">
          <WorkflowDiagram {...simpleDiagram} />
        </TabsContent>
        
        <TabsContent value="rag">
          <WorkflowDiagram {...advancedDiagram} />
        </TabsContent>
        
        <TabsContent value="enterprise">
          <WorkflowDiagram {...enterpriseDiagram} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AutomationDiagrams;
