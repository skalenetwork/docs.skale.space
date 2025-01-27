import React, { useState } from 'react';
import ToolCard from './ToolCard';
import { tools } from '../../config/index';
import type { Tool, SKALEChains } from '../../config/index';
import './ToolsStyle.css';

type ToolsProps = {
  categories: readonly string[];
  searchBar?: boolean;
  filters?: boolean;
};

export default function ToolsPage({categories, searchBar = true ,filters = true}:ToolsProps) {
  const [selectedChains, setSelectedChains] = useState<SKALEChains[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterClick = (chain: SKALEChains) => {
    setSelectedChains((prev) => 
      prev.includes(chain) 
        ? prev.filter(c => c !== chain) 
        : [...prev, chain]
    );
  };

  const filteredTools = Object.keys(tools).reduce((acc, category) => {
    const filteredToolsForCategory = tools[category as keyof typeof tools].filter((tool) => {

      const matchesSearch =
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (tool.description && tool.description.toLowerCase().includes(searchQuery.toLowerCase()));
  
      const matchesChains =
        selectedChains.length > 0
          ? tool.chains.some((chain) => selectedChains.includes(chain))
          : true;
  
      return matchesSearch && matchesChains;
    });
  
    if (filteredToolsForCategory.length > 0) {
      acc[category] = filteredToolsForCategory;
    }
    return acc;
  }, {} as Record<string, Tool[]>);
  

  return (
     <div className="tools-container">
      { searchBar && (
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}

      { filters && (
      <div className="filter-buttons-container">
        {(["Calypso", "Europa", "Nebula", "Titan"] as const).map((chain) => (
          <button
            key={chain}
            onClick={() => handleFilterClick(chain)}
            className={`filter-button ${selectedChains.includes(chain) ? 'selected' : ''}`}
          >
            {chain}
          </button>
        ))}
      </div>
      )}

      {categories.map((category) => {
        const toolsForCategory = filteredTools[category];

        if (!toolsForCategory || toolsForCategory.length === 0) {
          return null;
        }

        return (
          <div key={category}>
            {filters && (
              <h3 id={`${category}`}>{category}</h3>
            )}
            <div className={`card-grid ${filters ? 'is-main-tools-paige': ''}`}>
              {toolsForCategory.map((tool) => (
                <ToolCard
                  key={tool.title}
                  title={tool.title}
                  href={tool.docPath}
                  description={tool.description}
                  badges={tool.chains.map((chain) => ({ text: chain, variant: chain.toLowerCase() }))}
                  category={tool.category.map((catg) => ({ text: catg, variant: 'note' }))}
                  image={tool.image}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
