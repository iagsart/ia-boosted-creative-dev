
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { formatDistance } from 'date-fns';
import { fr } from 'date-fns/locale';
import { BlogPost } from '@/types/blog';
import { motion } from 'framer-motion';

interface BlogListProps {
  posts: BlogPost[];
}

// Map pour associer chaque article à une image
const postImages: Record<string, string> = {
  'introduction-ai': '/images/blog/ai-futuristic.jpg',
  'python-data-analysis': '/images/blog/python-code.jpg',
  'opensource-alternatives': '/images/blog/opensource-collab.jpg',
  'future-of-ai': '/images/blog/ai-robot-future.jpg',
  'no-code-revolution': '/images/blog/no-code-tools.jpg',
  'prompt-engineering': '/images/blog/prompt-engineering.jpg',
  'ai-ethics': '/images/blog/ai-ethics-balance.jpg',
  'machine-learning-basics': '/images/blog/ml-algorithms.jpg'
};

export const BlogList = ({ posts }: BlogListProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">Aucun article trouvé</h3>
        <p className="text-muted-foreground">Essayez de modifier vos filtres ou votre recherche.</p>
      </div>
    );
  }
  
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {posts.map((post) => (
        <motion.div key={post.slug} variants={item}>
          <Card className="h-full flex flex-col overflow-hidden group hover:shadow-md transition-all duration-300 border-border/60">
            <CardHeader className="p-0">
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative h-52 w-full overflow-hidden">
                  <img 
                    src={postImages[post.slug] || '/images/blog/placeholder.jpg'} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <div className="flex gap-3 text-sm text-muted-foreground mb-3">
                <span className="flex items-center">
                  <Calendar className="mr-1 h-3 w-3" />
                  <time dateTime={post.date}>
                    {formatDistance(new Date(post.date), new Date(), { addSuffix: true, locale: fr })}
                  </time>
                </span>
                <span className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>{post.readingTime} min</span>
                </span>
              </div>
              <CardTitle className="mb-3 line-clamp-2">
                <Link to={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="line-clamp-3 text-muted-foreground">
                {post.excerpt}
              </CardDescription>
            </CardContent>
            <CardFooter className="pt-0 pb-6 px-6">
              <Link 
                to={`/blog/${post.slug}`} 
                className="text-sm font-medium flex items-center text-accent group-hover:underline"
              >
                Lire l'article
                <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};
