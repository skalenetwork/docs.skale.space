import React, { useState } from 'react';
import ToolCard from './ToolCard';
import { tools } from '../../config/index';
import type { Tool ,SKALEChains } from '../../config/index';
import CardGrid from './CardGrid';
import './ToolsStyle.css';


const categories = ['Wallets', 'Bridges', 'Data', 'NFTs', 'Payments', 'Randomness'] as const; 
type ToolCategory = keyof typeof tools; 

export default function Tools() {
  const [selectedChain, setSelectedChain] = useState<SKALEChains | null>(null);
  const [searchQuery, setSearchQuery] = useState('');


  // Function to handle button clicks
  const handleFilterClick = (chain: SKALEChains) => {
    setSelectedChain((prev) => (prev === chain ? null : chain));
  };

  const filteredTools = Object.keys(tools).reduce((acc, category) => {
    const filteredToolsForCategory = tools[category as keyof typeof tools].filter((tool) =>
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedChain ? tool.chains.some(chain => chain === selectedChain)  : true)
    );
    if (filteredToolsForCategory.length > 0) {
      acc[category] = filteredToolsForCategory;
    }
    return acc;
  }, {} as Record<string, Tool[]>);


  return (
    <div className='tools-container'>
      
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search tools..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="filter-buttons-container">
        {(["Calypso", "Europa", "Nebula", "Titan"] as const).map((chain) => (
          <button
            key={chain}
            onClick={() => handleFilterClick(chain)}
            className={`filter-button ${selectedChain === chain ? 'selected' : ''}`}
          >
            {chain}
          </button>
        ))}
      </div>

      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <div className="card-grid">
            {filteredTools[category] ? (
              filteredTools[category].map((tool) => (
                <ToolCard
                  key={tool.title}
                  title={tool.title}
                  href={tool.docPath}
                  description={tool.description}
                  badges={tool.chains.map((chain) => ({ text: chain, variant: 'note' }))}
                  category={tool.category.map((catg) => ({ text: catg, variant: 'success' }))}
                  image={tool.image}
                />
              ))
            ) : (
              <p>No tools found</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
