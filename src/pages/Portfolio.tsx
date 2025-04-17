
import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import PortfolioCategories from "@/components/portfolio/PortfolioCategories";
import PortfolioSearch from "@/components/portfolio/PortfolioSearch";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { Button } from "@/components/ui/button";
import { webProjects, desktopProjects, projectCategories } from "@/data/portfolioProjects";

const Portfolio = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Combine all projects
  const allProjects = [...webProjects, ...desktopProjects];

  // Filtre les projets en fonction de la recherche et de la catégorie
  useEffect(() => {
    const filtered = allProjects.filter(project => {
      const matchesSearch = searchQuery.trim() === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = 
        selectedCategory === 'Tous' || 
        project.category === selectedCategory ||
        project.subcategory === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredProjects(filtered);
  }, [searchQuery, selectedCategory, allProjects]);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  return (
    <Layout>
      <PageHeader
        title="Mon Portfolio Dev"
        subtitle="Découvrez mes projets personnels réalisés avec passion et créativité"
        backgroundEffect="gradient"
      />

      <section className="relative py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          {/* Barre de recherche */}
          <PortfolioSearch 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {/* Categories filter */}
          <PortfolioCategories 
            categories={projectCategories.filter(cat => cat !== "Tous")} 
            activeCategory={selectedCategory} 
            onCategoryChange={handleCategoryChange} 
          />

          {/* Projects grid */}
          <PortfolioGrid projects={filteredProjects} />
          
          {filteredProjects.length === 0 && (
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Tous");
                }}
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
