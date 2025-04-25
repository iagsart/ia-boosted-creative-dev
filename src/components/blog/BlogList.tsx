
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blogPosts';
import { Calendar, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { BLOG_IMAGES } from '@/data/constants';

interface BlogListProps {
  posts: typeof blogPosts;
  showHeading?: boolean;
}

const BlogList: React.FC<BlogListProps> = ({ posts, showHeading = true }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-12">
      {showHeading && (
        <h2 className="text-3xl font-bold tracking-tight">Articles récents</h2>
      )}

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            className="group flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm hover:shadow-md transition-all duration-300"
            variants={item}
          >
            <Link to={`/blog/${post.slug}`} className="aspect-video w-full overflow-hidden">
              <div className="relative h-full w-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>

            <div className="flex flex-col space-y-2 p-4 flex-grow">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                <time dateTime={post.date}>
                  {format(new Date(post.date), "d MMMM yyyy", { locale: fr })}
                </time>
              </div>

              <Link to={`/blog/${post.slug}`}>
                <h3 className="line-clamp-2 text-xl font-semibold group-hover:text-accent transition-colors duration-200">
                  {post.title}
                </h3>
              </Link>

              <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>

              <div className="flex-grow"></div>

              <div className="pt-2">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
                >
                  Lire l'article
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
};

export default BlogList;
