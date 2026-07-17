import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AnimatedCircularProgressBar } from '@/components/ui/animated-circular-progress-bar';
import {
  SiReact, SiTypescript, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb,
  SiFigma, SiGithub, SiDocker,
} from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';

const skillDetails = [
  {
    name: 'React',
    level: 95,
    category: 'Frontend',
    Icon: SiReact,
    color: '#61DAFB',
    description: 'Declarative component-based architecture, hooks design, virtual DOM optimization, state engines.',
    projects: ['Personal Portfolio 2026', 'E-Commerce Platform', 'Real-Time Dashboard'],
    concepts: ['Custom Hooks', 'Context API & Redux', 'Server Components', 'Reconciliation & Diffing'],
    learning: 'React 19 features (useActionState, server actions, compilation updates).',
  },
  {
    name: 'TypeScript',
    level: 90,
    category: 'Frontend',
    Icon: SiTypescript,
    color: '#3178C6',
    description: 'Type-safe JavaScript development. Advanced types, interfaces, generics, type guards, compilation setups.',
    projects: ['Interactive 3D Engine', 'Full-Stack Dashboard API'],
    concepts: ['Generics & Utility Types', 'Union & Intersection Types', 'Mapped Types', 'TS Config Refactoring'],
    learning: 'Type testing and branding types for strict domain modeling.',
  },
  {
    name: 'Next.js',
    level: 88,
    category: 'Frontend',
    Icon: SiNextdotjs,
    color: '#000000',
    description: 'Server Side Rendering (SSR), Incremental Static Regeneration (ISR), React Server Components (RSC), App Router structures.',
    projects: ['SaaS Analytics Portal', 'Case Study Site'],
    concepts: ['Routing Cache', 'Middleware & Edge Functions', 'Streaming & Suspense', 'SEO Optimization'],
    learning: 'Next.js App Router route handlers caching strategies.',
  },
  {
    name: 'Tailwind CSS',
    level: 95,
    category: 'Frontend',
    Icon: SiTailwindcss,
    color: '#06B6D4',
    description: 'Utility-first styling workflow. Custom theme setups, responsive architectures, utility optimization.',
    projects: ['All current web builds', 'Component Libraries'],
    concepts: ['Tailwind v4 CSS Imports', 'Arbitrary Variant Styles', 'Fluid Layout Systems', 'Dark Mode Configs'],
    learning: 'Advanced fluid variables using CSS variable mappings.',
  },
  {
    name: 'Node.js',
    level: 85,
    category: 'Backend',
    Icon: SiNodedotjs,
    color: '#339933',
    description: 'Asynchronous event-driven JavaScript runtime. REST APIs, stream processing, performance scaling.',
    projects: ['Real-Time WebSockets Hub', 'Image Compression Server'],
    concepts: ['Event Loop Mechanics', 'File System Streams', 'Cluster & Worker Threads', 'Performance Profiling'],
    learning: 'Native Node.js test runner library.',
  },
  {
    name: 'Express',
    level: 82,
    category: 'Backend',
    Icon: SiExpress,
    color: '#000000',
    description: 'Fast, unopinionated, minimalist web framework for Node.js. Middlewares, router structures.',
    projects: ['REST Backend APIs', 'Authentication Gateways'],
    concepts: ['Middleware Stacking', 'Error Boundary Handling', 'Route Controllers', 'CORS & Security Settings'],
    learning: 'Integrating with modern TS Express frameworks.',
  },
  {
    name: 'PostgreSQL',
    level: 78,
    category: 'Backend',
    Icon: SiPostgresql,
    color: '#4169E1',
    description: 'Powerful, open-source object-relational database system. Query optimization, normalization, indexing.',
    projects: ['User Database Store', 'SaaS Client Repositories'],
    concepts: ['Relational Schema Design', 'Indexes & Query Plans', 'Foreign Keys & Constraints', 'ACID Transactions'],
    learning: 'Advanced window functions and CTE processing.',
  },
  {
    name: 'MongoDB',
    level: 80,
    category: 'Backend',
    Icon: SiMongodb,
    color: '#47A248',
    description: 'Document database designed for ease of development and scaling. Aggregations, schema design.',
    projects: ['Content Management Backends', 'Logging Databases'],
    concepts: ['Aggregation Pipelines', 'BSON Structure Mapping', 'Indexes & Scaling', 'Mongoose Schemas'],
    learning: 'Time-series collection processing and cluster configs.',
  },
  {
    name: 'Figma',
    level: 88,
    category: 'Design',
    Icon: SiFigma,
    color: '#F24E1E',
    description: 'Collaborative interface design tool. Vector layouts, auto layouts, dynamic prototyping.',
    projects: ['App UX Wireframes', 'Client Site Mockups'],
    concepts: ['Auto Layout v5', 'Component Properties', 'Design Token Systems', 'Interactive Prototypes'],
    learning: 'Variable styling and modes configs for dark/light grids.',
  },
  {
    name: 'UI/UX Design',
    level: 85,
    category: 'Design',
    Icon: MdDesignServices,
    color: '#0038FF',
    description: 'User-centered design principles. Accessibility compliance (WCAG), layout flows, visual systems.',
    projects: ['All personal products'],
    concepts: ['User Flow Mapping', 'Information Architecture', 'Accessibility Standards', 'Design Systems'],
    learning: 'Advanced cognitive load reduction research.',
  },
  {
    name: 'Git & GitHub',
    level: 90,
    category: 'Tools',
    Icon: SiGithub,
    color: '#181717',
    description: 'Distributed version control system. Branching models, pull requests, actions configs, hooks.',
    projects: ['Code repositories hosting', 'GitHub CI/CD Automation'],
    concepts: ['Interactive Rebase', 'Git Worktrees', 'GitHub Actions Workflows', 'Merge Conflict Resolving'],
    learning: 'Writing custom pre-commit husky scripts.',
  },
  {
    name: 'Docker',
    level: 70,
    category: 'Tools',
    Icon: SiDocker,
    color: '#2496ED',
    description: 'Containerization technology to package applications. Image building, network setup, compose orchestration.',
    projects: ['Local API Dev Environment', 'Deployable Backends'],
    concepts: ['Dockerfile Multistage Builds', 'Compose Networks', 'Volume Bindings', 'Image Optimization'],
    learning: 'Docker swarm clusters and Kubernetes configurations.',
  },
];

export function SkillsPage() {
  const [selectedSkill, setSelectedSkill] = useState(skillDetails[0]);

  return (
    <div className="w-full min-h-screen bg-white pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block bg-[#CCFF00] text-black font-black text-xs px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            ENGINEERING TOOLKIT
          </span>
          <h2
            className="text-[clamp(3rem,8vw,80px)] font-black leading-none tracking-tighter text-black uppercase"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            SKILLS &amp;<br />
            <span className="text-[#0038FF]">CAPABILITIES</span>
          </h2>
          <p className="text-black/50 text-sm max-w-md font-medium leading-relaxed mt-4">
            Click any technology card in the grid to view detailed case breakdowns, mastered concepts, active projects, and learning timelines.
          </p>
        </div>

        {/* Layout: Grid + Side Detail Panel */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Grid Panel */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-5">
            {skillDetails.map((skill) => {
              const { Icon, color } = skill;
              const isSelected = selectedSkill.name === skill.name;
              return (
                <button
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className={`flex flex-col items-center gap-4 bg-[#F8F9FA] rounded-[1.75rem] p-6 border-2 transition-all duration-300 ${
                    isSelected
                      ? 'border-[#0038FF] shadow-2xl shadow-[#0038FF]/10'
                      : 'border-transparent hover:border-[#0038FF]/30'
                  }`}
                >
                  <div className="relative flex items-center justify-center">
                    <AnimatedCircularProgressBar
                      value={skill.level}
                      gaugePrimaryColor="#0038FF"
                      gaugeSecondaryColor="#E8EEFF"
                      className="!size-24 !text-base !font-black"
                    />
                    <div className="absolute inset-0 flex items-center justify-center mt-4">
                      <Icon style={{ color }} className="w-6 h-6" />
                    </div>
                  </div>
                  <span className="font-black text-sm text-black leading-tight">
                    {skill.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Details Sidebar Panel */}
          <div className="w-full lg:w-[400px] flex-shrink-0 bg-black text-white rounded-[2.5rem] p-8 border-4 border-black shadow-2xl relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-6">
              {/* Header inside Panel */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#CCFF00] flex items-center justify-center text-black">
                  {React.createElement(selectedSkill.Icon, {
                    style: { color: selectedSkill.color === '#000000' || selectedSkill.color === '#ffffff' ? '#0038FF' : selectedSkill.color },
                    className: 'w-7 h-7',
                  })}
                </div>
                <div>
                  <h3 className="font-black text-2xl uppercase leading-none">
                    {selectedSkill.name}
                  </h3>
                  <span className="inline-block mt-1 text-[9px] font-black uppercase tracking-widest bg-[#0038FF] text-white px-2 py-0.5 rounded-full">
                    {selectedSkill.category}
                  </span>
                </div>
              </div>

              <hr className="border-white/10" />

              {/* What I Know */}
              <div>
                <h4 className="text-[#CCFF00] text-xs font-black uppercase tracking-wider mb-2">
                  OVERVIEW
                </h4>
                <p className="text-white/70 text-xs font-medium leading-relaxed">
                  {selectedSkill.description}
                </p>
              </div>

              {/* Concepts Mastered */}
              <div>
                <h4 className="text-[#CCFF00] text-xs font-black uppercase tracking-wider mb-2">
                  CONCEPTS MASTERED
                </h4>
                <ul className="flex flex-col gap-1.5 text-xs text-white/80 font-bold">
                  {selectedSkill.concepts.map((concept, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                      {concept}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projects Using It */}
              <div>
                <h4 className="text-[#CCFF00] text-xs font-black uppercase tracking-wider mb-2">
                  PROJECT SHIPIENTS
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedSkill.projects.map((proj, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-black uppercase bg-white/10 border border-white/15 px-2.5 py-1 rounded-full text-white/90"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>

              {/* Current Learning */}
              <div>
                <h4 className="text-[#CCFF00] text-xs font-black uppercase tracking-wider mb-2">
                  ACTIVE RESEARCH
                </h4>
                <p className="text-white/60 text-xs font-medium leading-relaxed">
                  {selectedSkill.learning}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
