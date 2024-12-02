// import React from 'react';
import PlatformSection from './PlatformSection';

const indexers = [
  {
    title: "African Index Medicus",
    description: "A comprehensive database indexing African health literature and information resources, providing visibility to African health research.",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&q=80",
    link: "http://indexmedicus.afro.who.int"
  },
  {
    title: "Directory of Open Access Journals",
    description: "A community-curated directory that indexes and provides access to high-quality, open access, peer-reviewed journals from Africa.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80",
    link: "https://doaj.org"
  },
  {
    title: "Google Scholar",
    description: "A comprehensive academic search engine that indexes scholarly literature across disciplines, making African research globally discoverable.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80",
    link: "https://scholar.google.com"
  }
];

const repositories = [
  {
    title: "INASP's Journal Online",
    description: "A collaborative platform hosting African journals, providing global visibility and accessibility to regional research output.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80",
    link: "https://www.inasp.info"
  },
  {
    title: "ISSN Portal",
    description: "The international registry for serial publications, ensuring unique identification and discoverability of African journals.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80",
    link: "https://portal.issn.org"
  }
];

export default function ResearchPlatforms() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_25%),radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.05),transparent_25%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.05),transparent_25%)]" />
      
      <PlatformSection
        title="Research Indexers"
        description="Discover comprehensive indexing platforms that make African research more visible and accessible globally"
        platforms={indexers}
        columns={3}
      />
      
      <PlatformSection
        title="Research Repositories"
        description="Explore trusted platforms that host and preserve African scholarly content for global access"
        platforms={repositories}
      />
    </div>
  );
}