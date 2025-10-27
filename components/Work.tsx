import React, { useState, useMemo } from 'react';
import type { Project } from '../types';
import AnimatedSection from './AnimatedSection';
import TagIcon from './icons/TagIcon';

// Mock data for projects
const projectsData: Project[] = [
  {
    image: './images/hindimeinjaankari.png',
    title: 'hindimeinjaankari.com',
    category: 'WordPress',
    description:
      'A Hindi information website built using WordPress, focused on delivering genuine and educational content across topics like finance, technology, health, and government schemes. I handled the design, development, SEO, and performance optimization of the site.',
    link: 'https://hindimeinjaankari.com/',
  },
  {
    image: './images/khetiwale.png',
    title: 'khetiwale.com',
    category: 'WordPress',
    description:
      'An agriculture-focused Hindi website built using WordPress, dedicated to educating farmers with practical information on crops, organic farming, agribusiness, and modern farming techniques. I managed the design, development, SEO, and optimization of the site.',
    link: 'https://khetiwale.com/',
  },
  {
    image: './images/universityresultzone.png',
    title: 'universityresultzone.com',
    category: 'WordPress',
    description:
      'A Hindi-language information portal built with WordPress, designed to simplify students’ university journeys by providing result updates, admit-card guides, career advice, and exam insights. I managed the design, development, SEO, and performance optimization of the site.',
    link: 'https://universityresultzone.com/',
  },
  {
    image: './images/topgearguide.png',
    title: 'topgearguide.com',
    category: 'WordPress',
    description:
      'topgearguide.com – An automobile-focused website built using WordPress, dedicated to delivering the latest updates on cars, bikes, and mobile launches. The site provides detailed reviews, comparisons, and automotive news to help readers make informed decisions. I handled the design, development, SEO, and performance optimization of the site.',
    link: 'https://topgearguide.com/',
  },
];

const WorkPage: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projectsData.map((p) => p.category)))],
    []
  );

  const filteredProjects =
    filter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <div className="py-24 pt-36 bg-zinc-950">
      <div className="container max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-4 tracking-tight">
            Featured Work
          </h2>
          <p className="text-lg text-zinc-400 text-center max-w-3xl mx-auto mb-12">
            We partner with forward-thinking brands to create digital experiences
            that are both beautiful and impactful.
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay="delay-200">
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                  filter === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white/10 text-zinc-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={project.title} delay={`delay-${index * 150}`}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative bg-white/5 rounded-xl shadow-lg border border-white/10 overflow-hidden transition-all duration-300 hover:border-indigo-500/50 hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <TagIcon className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm text-indigo-400 font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm">{project.description}</p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
