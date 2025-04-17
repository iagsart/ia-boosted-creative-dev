
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Calendar, Tag, Clock, Share2 } from "lucide-react";
import { formatDistance } from 'date-fns';
import { fr } from 'date-fns/locale';
import { motion } from 'framer-motion';
import { BLOG_IMAGES } from '@/data/constants';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <Layout>
        <div className="container py-12 md:py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Article introuvable</h1>
          <p className="mb-6">L'article que vous recherchez n'existe pas ou a été déplacé.</p>
          <Button onClick={() => navigate('/blog')}>Retour au blog</Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="relative w-full h-[50vh] max-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src={BLOG_IMAGES[post.slug] || BLOG_IMAGES['default']} 
          alt={post.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button variant="ghost" className="mb-6 text-white hover:bg-white/20" onClick={() => navigate('/blog')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux articles
              </Button>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white drop-shadow-md">{post.title}</h1>
              
              <div className="flex flex-wrap gap-3 items-center text-white/80 mb-8">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <time dateTime={post.date}>
                    {formatDistance(new Date(post.date), new Date(), { addSuffix: true, locale: fr })}
                  </time>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readingTime} min de lecture</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <article className="container py-12 md:py-16 max-w-4xl">
        <div className="mb-8 flex flex-wrap gap-2">
          {post.categories.map(category => (
            <Link 
              key={category} 
              to={`/blog?category=${category}`} 
              className="flex items-center text-sm bg-secondary px-3 py-1.5 rounded-full hover:bg-accent/10 hover:text-accent transition-colors"
            >
              <Tag className="h-3 w-3 mr-1" />
              {category}
            </Link>
          ))}
        </div>
        
        <motion.div 
          className="prose prose-lg max-w-none" 
          dangerouslySetInnerHTML={{ __html: post.content }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        
        <div className="mt-12 pt-8 border-t">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <h3 className="font-semibold">Partager cet article</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Button asChild>
              <Link to="/blog">Voir d'autres articles</Link>
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
