
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { formatDistance } from 'date-fns';
import { fr } from 'date-fns/locale';
import { BlogPost } from '@/types/blog';

interface BlogListProps {
  posts: BlogPost[];
}

export const BlogList = ({ posts }: BlogListProps) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">Aucun article trouvé</h3>
        <p className="text-muted-foreground">Essayez de modifier vos filtres ou votre recherche.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <Card key={post.slug} className="card-hover h-full flex flex-col">
          <CardHeader className="p-0">
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
              <img 
                src={post.image || '/placeholder.svg'} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
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
            <CardTitle className="mb-2 line-clamp-2">
              <Link to={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                {post.title}
              </Link>
            </CardTitle>
            <CardDescription className="line-clamp-3">
              {post.excerpt}
            </CardDescription>
          </CardContent>
          <CardFooter className="pt-0 pb-6 px-6">
            <Link 
              to={`/blog/${post.slug}`} 
              className="text-sm font-medium flex items-center text-accent hover:underline"
            >
              Lire l'article
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
