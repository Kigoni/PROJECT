// import React from 'react';
import PlatformSection from './PlatformSection';

const indexers = [
  {
    title: "African Index Medicus",
    description: "A comprehensive database indexing African health literature and information resources, providing visibility to African health research.",
    image: "/AIM.jpg",
    link: "http://indexmedicus.afro.who.int"
  },
  {
    title: "Directory of Open Access Journals",
    description: "A community-curated directory that indexes and provides access to high-quality, open access, peer-reviewed journals from Africa.",
    image: "/DOAJ.png",
    link: "https://doaj.org"
  },
  {
    title: "Google Scholar",
    description: "A comprehensive academic search engine that indexes scholarly literature across disciplines, making African research globally discoverable.",
    image: "/Scholar.png",
    link: "https://scholar.google.com"
  }
];

const repositories = [
  {
    title: "INASP's Journal Online",
    description: "A collaborative platform hosting African journals, providing global visibility and accessibility to regional research output.",
    image: "/INASP.svg",
    link: "https://www.inasp.info"
  },
  {
    title: "ISSN Portal",
    description: "The international registry for serial publications, ensuring unique identification and discoverability of African journals.",
    image: "/ISSN.svg",
    link: "https://portal.issn.org"
  }
];

export default function ResearchPlatforms() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_25%),radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.05),transparent_25%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.05),transparent_25%)]" />
      
      {/* Research Indexers */}
      <PlatformSection
        title="Research Indexers"
        description="Discover comprehensive indexing platforms that make African research more visible and accessible globally"
        platforms={indexers}
        columns={3}
      />

      {/* Research Repositories */}
      <PlatformSection
        title="Research Repositories"
        description="Explore trusted platforms that host and preserve African scholarly content for global access"
        platforms={repositories}
        columns={3} // Ensure uniform grid
      />
    </div>
  );
}
