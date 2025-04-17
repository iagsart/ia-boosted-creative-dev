
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import BlogList from "@/components/blog/BlogList";
import { BlogCategories } from "@/components/blog/BlogCategories";
import { BlogSearch } from "@/components/blog/BlogSearch";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Extract unique categories
  const categories = Array.from(
    new Set(blogPosts.flatMap(post => post.categories))
  );
  
  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === null || 
      post.categories.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <PageHeader
        title="Blog Tech & IA"
        subtitle="Articles, analyses et réflexions sur la tech, l'IA et l'innovation"
        backgroundEffect="gradient"
      />
      
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-1 space-y-8">
            <BlogSearch 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
            />
            <BlogCategories 
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
          
          <div className="lg:col-span-3">
            <BlogList posts={filteredPosts} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
