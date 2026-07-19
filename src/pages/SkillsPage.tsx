import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  SiReact, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPostgresql, SiGithub,
  SiPython, SiNumpy, SiPandas, SiGit, SiPostman,
  SiVercel, SiRailway, SiHtml5, SiCss, SiJavascript, SiMysql,
  SiFigma
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { VscCode } from 'react-icons/vsc';
import { GrDatabase } from 'react-icons/gr';
import { TbBrain, TbNetwork } from 'react-icons/tb';

interface Skill {
  name: string;
  stage: 'ACTIVE' | 'PROJECT READY' | 'EXPLORING' | 'FOUNDATION' | 'LEARNING';
  learningSince: number;
  projectsCount: number;
  focus: string;
  nextGoal: string;
  categories: string[];
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  description: string;
  projects: string[];
  conceptsHeader: string;
  concepts: string[];
  learning: string;
}

const skillDetails: Skill[] = [
  // --- FRONTEND ---
  {
    name: 'React',
    stage: 'ACTIVE',
    learningSince: 2025,
    projectsCount: 4,
    focus: 'Building Portfolio & Brainstormzz',
    nextGoal: 'Learn Authentication & Server Components',
    categories: ['Frontend'],
    Icon: SiReact,
    color: '#61DAFB',
    description: 'Component-based UI development with hooks state management, component tree rendering, and responsive elements integration.',
    projects: ['Personal Portfolio 2026', 'Brainstormzz Canvas', 'Interactive Dashboard'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Components & Nesting', 'Props Passing', 'useState & useEffect Hooks', 'Routing Integrations', 'REST API Integration', 'Responsive Design Rules'],
    learning: 'React state rendering optimization and hooks triggers.'
  },
  {
    name: 'TypeScript',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 3,
    focus: 'Strict typing & generics in state',
    nextGoal: 'Configure advanced compile check suites',
    categories: ['Languages', 'Frontend'],
    Icon: SiTypescript,
    color: '#3178C6',
    description: 'Statically-typed JavaScript layout layer, enforcing strict contracts, interface layouts, and generic configurations.',
    projects: ['Interactive 3D Engine', 'Full-Stack Dashboard API'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Interfaces & Type Aliases', 'Generics & Utility Types', 'Strict Type Checking configs', 'Integration with React/Vite'],
    learning: 'Typing APIs response envelopes and custom event handlers.'
  },
  {
    name: 'Tailwind CSS',
    stage: 'ACTIVE',
    learningSince: 2025,
    projectsCount: 8,
    focus: 'Theme custom configs & fluid layout variables',
    nextGoal: 'Tailwind v4 optimization frameworks',
    categories: ['Frontend'],
    Icon: SiTailwindcss,
    color: '#38BDF8',
    description: 'Utility-first CSS styling classes, facilitating responsive layouts and immediate theme configurations without writing standalone CSS documents.',
    projects: ['Main Portfolio Site', 'Landing Page templates'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Utility Classes Styling', 'Flexbox & Grid utilities', 'Responsive screen modifiers', 'Dark mode variant rules'],
    learning: 'Fluid variable systems mapping using Tailwind custom themes.'
  },
  {
    name: 'HTML5',
    stage: 'FOUNDATION',
    learningSince: 2025,
    projectsCount: 12,
    focus: 'Semantic elements hierarchy',
    nextGoal: 'Implement full WCAG 2.1 AA accessibility layouts',
    categories: ['Frontend'],
    Icon: SiHtml5,
    color: '#E34F26',
    description: 'Markup standard for web documents. Creating correct semantic elements to structures information for search bots and reader tools.',
    projects: ['Main Website Shell', 'Landing Pages Collection'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Semantic Document Layouts', 'Forms & standard inputs', 'DOM structures & tags', 'Meta Tagging configs'],
    learning: 'Adding ARIA descriptors to interactive buttons.'
  },
  {
    name: 'CSS3',
    stage: 'FOUNDATION',
    learningSince: 2025,
    projectsCount: 12,
    focus: 'Layout alignment & visual grids',
    nextGoal: 'Advanced transitions & custom animation curves',
    categories: ['Frontend'],
    Icon: SiCss,
    color: '#1572B6',
    description: 'Styling layout sheet parameters, implementing custom positioning, media boundaries, flex columns, and click transitions.',
    projects: ['Grid layout stylesheets', 'Cards parallax transitions'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Flexbox Layouts', 'CSS Grid Alignments', 'Media Queries (Mobile-first)', 'Hover/Active Transition states'],
    learning: 'Designing layouts around container query limits.'
  },
  {
    name: 'JavaScript',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 8,
    focus: 'Async network queries & JSON parsing',
    nextGoal: 'Optimizing memory profile processing',
    categories: ['Languages', 'Frontend', 'Backend'],
    Icon: SiJavascript,
    color: '#F7DF1E',
    description: 'Core scripting engine of web software. Async loops, event handlers, and data transformations.',
    projects: ['Custom Canvas animations', 'Client validation logic'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['DOM events listening', 'Promises & async/await', 'Array Methods (map, filter, reduce)', 'ES6 Module imports'],
    learning: 'JavaScript event loop call stack execution.'
  },

  // --- BACKEND ---
  {
    name: 'Node.js',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 4,
    focus: 'Express routing & API integration',
    nextGoal: 'Secure route authorization configurations',
    categories: ['Backend'],
    Icon: SiNodedotjs,
    color: '#339933',
    description: 'Event-driven, asynchronous JavaScript runtime enabling server-side execution of backend scripts.',
    projects: ['Real-Time WebSockets Hub', 'Image Compression Server'],
    conceptsHeader: "WHAT I'VE BUILT",
    concepts: ['REST APIs', 'Express Routing', 'Middleware', 'CRUD Operations', 'Environment Variables'],
    learning: 'Built-in Node.js file system read/write stream operations.'
  },
  {
    name: 'Express.js',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 4,
    focus: 'Express Routing & Middleware',
    nextGoal: 'Configure middleware error handling',
    categories: ['Backend'],
    Icon: SiExpress,
    color: '#000000',
    description: 'Minimalist web server framework for Node.js, simplifying routing configurations, request handling, and backend services setups.',
    projects: ['REST Backend APIs', 'Authentication Gateways'],
    conceptsHeader: "WHAT I'VE BUILT",
    concepts: ['Route Controller setup', 'CORS & Header controls', 'Body-parser configurations', 'Custom router endpoints'],
    learning: 'Typing Express request and response contexts.'
  },
  {
    name: 'REST APIs',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 6,
    focus: 'Response structures & HTTP verbs',
    nextGoal: 'Implement API versioning',
    categories: ['Backend'],
    Icon: TbNetwork,
    color: '#0038FF',
    description: 'Structuring stateless HTTP backends with unified resource routes, clean payload returns, and HTTP status codes.',
    projects: ['Recruiter Portal Endpoint', 'User Session Handlers'],
    conceptsHeader: "WHAT I'VE BUILT",
    concepts: ['HTTP Verbs (GET/POST/PUT/DELETE)', 'Status Code Conventions (200, 404, 500)', 'JSON payloads returning', 'Query parameters filters'],
    learning: 'Structuring API versioning directories (/api/v1/...).'
  },

  // --- LANGUAGES ---
  {
    name: 'Java',
    stage: 'LEARNING',
    learningSince: 2024,
    projectsCount: 3,
    focus: 'Learning through DSA problems',
    nextGoal: 'Advanced DSA Exception Handling',
    categories: ['Languages'],
    Icon: DiJava,
    color: '#ED8B00',
    description: 'Class-based, object-oriented compiled programming language designed to have minimal implementation dependencies.',
    projects: ['CLI Inventory Manager', 'Bank Transaction Script'],
    conceptsHeader: "LEARNING FOCUS",
    concepts: ['OOP principles', 'Collections framework', 'DSA implementations', 'Exception handling', 'File handling'],
    learning: 'Java syntax compilation rules and algorithmic logic optimization.'
  },
  {
    name: 'Python',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 5,
    focus: 'Applied in AI Projects',
    nextGoal: 'Implement custom analytics parsers',
    categories: ['Languages', 'AI / ML'],
    Icon: SiPython,
    color: '#3776AB',
    description: 'High-level general-purpose scripting language, optimal for data science, automation scripts, and AI integrations.',
    projects: ['Web Scraper Tool', 'Data Cleanup Runner'],
    conceptsHeader: "USED FOR",
    concepts: ['AI APIs integration', 'Script writing & automation', 'NumPy operations', 'Pandas datasets cleanup', 'Data Processing'],
    learning: 'Automating local file processing runs with OS library.'
  },
  {
    name: 'SQL',
    stage: 'FOUNDATION',
    learningSince: 2025,
    projectsCount: 3,
    focus: 'Relational queries & filters',
    nextGoal: 'Query optimization & indexes',
    categories: ['Languages', 'Databases'],
    Icon: GrDatabase,
    color: '#0038FF',
    description: 'Structured Query Language used to write, filter, join, and manage data entries stored in relational tables.',
    projects: ['Customer Ledger database', 'Reporting Dashboards'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Select, Filter, & Sort queries', 'Inner & Outer Table Joins', 'Group By & Aggregates', 'Basic Table Schema Design'],
    learning: 'Optimizing nested subqueries and writing CTE queries.'
  },

  // --- DATABASES ---
  {
    name: 'MySQL',
    stage: 'FOUNDATION',
    learningSince: 2025,
    projectsCount: 2,
    focus: 'Schema setups & joins',
    nextGoal: 'Complex CTEs and windows functions',
    categories: ['Databases'],
    Icon: SiMysql,
    color: '#4479A1',
    description: 'Relational database management system, powering millions of web applications and structured logging repositories.',
    projects: ['Blog database system', 'System logs collection'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Table Schema Setups', 'Primary Key Constraints', 'Basic Joins & Filters', 'Database Backup Triggers'],
    learning: 'Relational database foreign key setups.'
  },
  {
    name: 'PostgreSQL',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 3,
    focus: 'Relational modeling & Indexing',
    nextGoal: 'Advanced window functions & CTEs',
    categories: ['Databases'],
    Icon: SiPostgresql,
    color: '#4169E1',
    description: 'Enterprise-grade open-source relational database system, supporting strict schema constraints and ACID compliance.',
    projects: ['User Database Store', 'SaaS Client Repositories'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Relational Schema Models', 'Primary & Foreign Keys', 'Data Normalization rules', 'Simple Query Indexing'],
    learning: 'JSONB data types storage and performance queries.'
  },

  // --- AI / ML ---
  {
    name: 'NumPy',
    stage: 'FOUNDATION',
    learningSince: 2025,
    projectsCount: 2,
    focus: 'Array operations & vectors',
    nextGoal: 'Matrix dot-product operations',
    categories: ['AI / ML'],
    Icon: SiNumpy,
    color: '#013243',
    description: 'Fundamental package for scientific computing in Python, providing support for multi-dimensional array math operations.',
    projects: ['Linear algebra matrix solvers', 'Numerical math scripts'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Array Creation & Dimensions', 'Vectorized Math Operations', 'Array Slicing & Masking', 'Matrix Dot-Products'],
    learning: 'Matrix transformations and slicing matrices.'
  },
  {
    name: 'Pandas',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 3,
    focus: 'DataFrame operations & cleanup',
    nextGoal: 'Advanced multi-index transformations',
    categories: ['AI / ML'],
    Icon: SiPandas,
    color: '#150458',
    description: 'Flexible data analysis and manipulation library for Python, offering clean DataFrame structures to load and edit datasets.',
    projects: ['CSV parser tools', 'Log analysis scripts'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['DataFrame Creation', 'Data Cleaning & Dropping', 'Groupby Aggregations', 'CSV / JSON Ingestion'],
    learning: 'Clearing and parsing missing dataset columns.'
  },
  {
    name: 'OpenAI API',
    stage: 'ACTIVE',
    learningSince: 2025,
    projectsCount: 4,
    focus: 'ChatCompletions & Function calling',
    nextGoal: 'Structured outputs with Zod schemas',
    categories: ['AI / ML'],
    Icon: TbBrain,
    color: '#412991',
    description: 'Integrating large language model endpoints into custom applications for chat operations, content parsing, and structured JSON output.',
    projects: ['Resume Generator API', 'Auto Code Reviewer'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Chat Completions API', 'System Prompts & Rules', 'Function/Tool Callbacks', 'JSON Mode Formatting'],
    learning: 'Structured outputs validation formats.'
  },
  {
    name: 'Prompt Engineering',
    stage: 'ACTIVE',
    learningSince: 2025,
    projectsCount: 5,
    focus: 'Few-shot & Chain of Thought template validation',
    nextGoal: 'Programmatic prompt evaluation checks',
    categories: ['AI / ML'],
    Icon: TbBrain,
    color: '#0038FF',
    description: 'Crafting, testing, and optimizing system prompts to get structured, reliable, and high-fidelity output from language models.',
    projects: ['Structured agents rules', 'Prompt templates tester'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['System Rules & Guidelines', 'Few-shot Learning Prompts', 'Chain-of-Thought Patterns', 'Context Windows Constraints'],
    learning: 'Automated prompt templates parser runs.'
  },

  // --- DEVELOPMENT TOOLS ---
  {
    name: 'Git',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 15,
    focus: 'Branch management & commits',
    nextGoal: 'Interactive rebasing',
    categories: ['Tools'],
    Icon: SiGit,
    color: '#F05032',
    description: 'Local distributed version control tool tracking edits, branches, merges, and commit history chains.',
    projects: ['All codebases repos', 'Open source contributions'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Committing & Staging', 'Branching & Merging', 'Resolving Staging Conflicts', 'Git Diff & Log Tools'],
    learning: 'Git config rules and aliases setups.'
  },
  {
    name: 'GitHub',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 15,
    focus: 'PR reviews & releases',
    nextGoal: 'GitHub Actions automation workflows',
    categories: ['Tools'],
    Icon: SiGithub,
    color: '#181717',
    description: 'Web-based hosting portal for Git repositories, facilitating team PR reviews, issues tracking, and release runs.',
    projects: ['Hosting current portfolio', 'GitHub Actions setups'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Pull Request Code Reviews', 'Issue Tracking Systems', 'GitHub Pages Deployments', 'Forking & Upstream Merges'],
    learning: 'Writing basic actions configurations.'
  },
  {
    name: 'VS Code',
    stage: 'ACTIVE',
    learningSince: 2024,
    projectsCount: 20,
    focus: 'Workspace configs & extensions',
    nextGoal: 'Configure custom keybindings',
    categories: ['Tools'],
    Icon: VscCode,
    color: '#007ACC',
    description: 'Extensible code editor providing rich syntax, lint tools integration, task configs, and terminal setups.',
    projects: ['All IDE development workspaces'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Extension Customizations', 'Integrated Terminal Setups', 'Debugger Workspace Setups', 'Workspace Settings Config'],
    learning: 'Keyboard shortcuts configurations and tasks customization.'
  },
  {
    name: 'Postman',
    stage: 'ACTIVE',
    learningSince: 2025,
    projectsCount: 8,
    focus: 'HTTP testing & collections',
    nextGoal: 'Automate validation scripts inside tests',
    categories: ['Tools'],
    Icon: SiPostman,
    color: '#FF6C37',
    description: 'API client tool allowing developers to execute, check, log, and automate REST HTTP endpoint requests.',
    projects: ['REST Backend Testing', 'Route validations logs'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['HTTP Request Generation', 'Environment Variables Config', 'Response Assertions Checks', 'Collection Running tools'],
    learning: 'Response testing scripting commands.'
  },
  {
    name: 'Figma',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 4,
    focus: 'Wireframes & layouts',
    nextGoal: 'Variable design token mappings',
    categories: ['Tools'],
    Icon: SiFigma,
    color: '#F24E1E',
    description: 'Vector design editor and prototyping tool, ideal for visual layout mockups, user flows, and wireframing dashboards.',
    projects: ['App UX Wireframes', 'Client Site Mockups'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Auto Layout v5 Padding', 'Component Variants Config', 'Vector Framing Layouts', 'Interactive Web Prototyping'],
    learning: 'Custom token setups and styling alignments.'
  },

  // --- CLOUD ---
  {
    name: 'Vercel',
    stage: 'ACTIVE',
    learningSince: 2025,
    projectsCount: 8,
    focus: 'Frontend deployments & caching',
    nextGoal: 'Edge middleware configuration',
    categories: ['Cloud'],
    Icon: SiVercel,
    color: '#000000',
    description: 'Cloud platform optimized for frontend hosting, offering serverless builds, caching, and edge routing.',
    projects: ['Static Frontend Hosting', 'Portfolio deployments'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Static Web Hosting', 'Custom Domain Settings', 'Serverless Functions run', 'GitHub Deployment Webhooks'],
    learning: 'Deploying React apps through Git build targets.'
  },
  {
    name: 'Railway',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 4,
    focus: 'Service deployments & databases',
    nextGoal: 'Configure horizontal scaling rules',
    categories: ['Cloud'],
    Icon: SiRailway,
    color: '#000000',
    description: 'Infrastructure platform providing deployment environments for backend APIs, databases, cron jobs, and background workers.',
    projects: ['Backend API Deployments', 'Database Instances Hosting'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Backend Deployments', 'Database Instance Setups', 'Environment Variables config', 'Service Linking Network'],
    learning: 'Linking backend environments to private databases.'
  },
  {
    name: 'Hostinger',
    stage: 'ACTIVE',
    learningSince: 2024,
    projectsCount: 3,
    focus: 'Shared hosting & DNS setups',
    nextGoal: 'Automated FTP release scripting',
    categories: ['Cloud'],
    Icon: SiVercel, // Fallback/Nice Cloud Icon
    color: '#673DE6',
    description: 'Hosting provider offering domain registration, shared hosting spaces, DNS control, and cPanel configuration setups.',
    projects: ['Shared Webspaces Config', 'DNS Records Mapping'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Shared Webspaces Config', 'DNS Records Mapping (A/CNAME)', 'FTP Upload Connections', 'SSL Cert Setup Trigger'],
    learning: 'Configuring domain names to resolve over custom DNS namespaces.'
  }
];

const categories = [
  'All',
  'Frontend',
  'Backend',
  'Languages',
  'Databases',
  'AI / ML',
  'Tools',
  'Cloud'
];

export function SkillsPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState<Skill>(skillDetails[0]);
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering Logic
  const filteredSkills = skillDetails.filter(skill => {
    const matchesCategory = activeTab === 'All' || skill.categories.includes(activeTab);
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.categories.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Safe selection update if the current selected skill gets filtered out
  const finalSelected = filteredSkills.some(s => s.name === selectedSkill.name)
    ? selectedSkill
    : filteredSkills[0] || selectedSkill;

  return (
    <div className="w-full min-h-screen bg-white bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] pt-32 pb-24 px-6 md:px-10 font-sans selection:bg-[#CCFF00] selection:text-black relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-10">
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
          <p className="text-black/50 text-sm max-w-xl font-medium leading-relaxed mt-4">
            A curated toolkit of technologies, languages, and platforms I use to design, build, and continuously improve modern software.
          </p>
        </div>

        {/* Toolkit Metric Counters */}
        <div className="flex flex-wrap gap-8 my-8 border-y border-black/5 py-6 mb-12">
          <div>
            <span className="text-xs font-black uppercase text-black/40 block">Total Technologies</span>
            <span className="text-3xl font-black text-black">{skillDetails.length}</span>
          </div>
          <div className="w-[1px] bg-black/5 self-stretch hidden sm:block" />
          <div>
            <span className="text-xs font-black uppercase text-black/40 block">Categories</span>
            <span className="text-3xl font-black text-black">{categories.length - 1}</span>
          </div>
          <div className="w-[1px] bg-black/5 self-stretch hidden sm:block" />
          <div>
            <span className="text-xs font-black uppercase text-black/40 block">Active Projects</span>
            <span className="text-3xl font-black text-black">15+</span>
          </div>
        </div>

        {/* Filter & Search Bar - Sticky */}
        <div className="sticky top-[64px] z-40 bg-white/95 backdrop-blur-md py-4 border-b border-black/5 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5 max-w-3xl">
            {categories.map(cat => {
              const count = cat === 'All'
                ? skillDetails.length
                : skillDetails.filter(s => s.categories.includes(cat)).length;
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveTab(cat);
                    const list = cat === 'All' ? skillDetails : skillDetails.filter(s => s.categories.includes(cat));
                    if (list.length > 0) {
                      setSelectedSkill(list[0]);
                    }
                  }}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border-2 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-black text-[#CCFF00] border-black shadow-md'
                      : 'bg-white text-black border-black/10 hover:border-black'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search technology..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                const q = e.target.value.toLowerCase();
                const matches = skillDetails.filter(s =>
                  s.name.toLowerCase().includes(q) &&
                  (activeTab === 'All' || s.categories.includes(activeTab))
                );
                if (matches.length > 0) {
                  setSelectedSkill(matches[0]);
                }
              }}
              className="w-full bg-[#F8F9FA] text-black font-bold text-xs px-4 py-2.5 rounded-xl border border-black/15 focus:border-[#0038FF] focus:outline-none transition-all placeholder:text-black/30"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-black text-black/40 hover:text-black cursor-pointer"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

        {/* Layout: Grid of Cards + Side Detail Panel */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Grid Panel */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {filteredSkills.map((skill) => {
              const { Icon, color } = skill;
              const isSelected = finalSelected.name === skill.name;
              
              // Color mappings for stages
              const stageColors: Record<string, string> = {
                'ACTIVE': 'bg-[#CCFF00] text-black border-black',
                'PROJECT READY': 'bg-[#0038FF]/10 text-[#0038FF] border-[#0038FF]/20',
                'FOUNDATION': 'bg-black/5 text-black/60 border-black/5',
                'LEARNING': 'bg-amber-500/10 text-amber-700 border-amber-500/20',
                'EXPLORING': 'bg-cyan-500/10 text-cyan-700 border-cyan-500/20'
              };

              return (
                <button
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className={`group flex items-center justify-between text-left bg-[#F8F9FA] rounded-2xl p-5 border-2 transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'border-[#0038FF] shadow-[4px_4px_0px_0px_#0038FF] -translate-x-0.5 -translate-y-0.5'
                      : 'border-black/5 hover:border-black/15 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:-translate-x-0.5 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white border border-black/5 flex items-center justify-center shadow-sm">
                      <Icon style={{ color: color === '#000000' ? '#555' : color }} className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <p className="font-black text-sm text-black leading-none mb-1">
                        {skill.name}
                      </p>
                      <span className="text-[9px] font-black text-black/40 uppercase tracking-widest">
                        Since {skill.learningSince}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 border rounded-full ${stageColors[skill.stage] || 'bg-black/5'}`}>
                      {skill.stage}
                    </span>
                    <span className="text-[8px] font-black text-black/40 uppercase">
                      {skill.projectsCount} {skill.projectsCount === 1 ? 'Project' : 'Projects'}
                    </span>
                  </div>
                </button>
              );
            })}

            {filteredSkills.length === 0 && (
              <div className="col-span-full py-16 text-center text-black/35 font-bold text-sm">
                No technologies matching your filter or search query.
              </div>
            )}
          </div>

          {/* Details Sidebar Panel - The Black Engineering Card */}
          <div className="w-full lg:w-[380px] flex-shrink-0 bg-black text-white rounded-[2.25rem] p-7 border-4 border-black shadow-2xl relative overflow-hidden">
            {/* Background tech grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-5.5">
              
              {/* Header inside Panel */}
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 rounded-2xl bg-[#CCFF00] flex items-center justify-center text-black shadow-lg">
                  {React.createElement(finalSelected.Icon, {
                    style: { color: finalSelected.color === '#000000' ? '#0038FF' : finalSelected.color },
                    className: 'w-6.5 h-6.5',
                  })}
                </div>
                <div>
                  <h3 className="font-black text-xl uppercase leading-none mb-1">
                    {finalSelected.name}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {finalSelected.categories.map((c, i) => (
                      <span key={i} className="text-[7.5px] font-black uppercase tracking-widest bg-[#0038FF] text-white px-2 py-0.5 rounded-full">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status and Timeline metrics row */}
              <div className="grid grid-cols-3 gap-2 border-y border-white/10 py-3.5">
                <div>
                  <span className="text-[8.5px] font-black text-white/35 block uppercase tracking-wider mb-0.5">Status</span>
                  <span className="text-[10px] font-black text-[#CCFF00] uppercase tracking-wider">{finalSelected.stage}</span>
                </div>
                <div className="w-[1px] bg-white/10 self-stretch justify-self-center" />
                <div>
                  <span className="text-[8.5px] font-black text-white/35 block uppercase tracking-wider mb-0.5">Learning Since</span>
                  <span className="text-[10px] font-black text-white">{finalSelected.learningSince}</span>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h4 className="text-[#CCFF00] text-[10px] font-black uppercase tracking-wider mb-1.5">
                  OVERVIEW
                </h4>
                <p className="text-white/70 text-xs font-medium leading-relaxed">
                  {finalSelected.description}
                </p>
              </div>

              {/* What I've Learned / Built */}
              <div>
                <h4 className="text-[#CCFF00] text-[10px] font-black uppercase tracking-wider mb-1.5">
                  {finalSelected.conceptsHeader}
                </h4>
                <ul className="flex flex-col gap-1 text-xs text-white/75 font-semibold">
                  {finalSelected.concepts.map((concept, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] mt-1.5 flex-shrink-0" />
                      <span>{concept}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projects Using React / MySQL etc. */}
              <div>
                <h4 className="text-[#CCFF00] text-[10px] font-black uppercase tracking-wider mb-1.5">
                  PROJECTS USING {finalSelected.name.toUpperCase()}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {finalSelected.projects.map((proj, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-black uppercase bg-white/10 border border-white/12 px-2.5 py-0.5 rounded-full text-white/90"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>

              {/* Current Focus */}
              <div>
                <h4 className="text-[#CCFF00] text-[10px] font-black uppercase tracking-wider mb-1">
                  CURRENT FOCUS
                </h4>
                <p className="text-white/70 text-xs font-bold">
                  {finalSelected.focus}
                </p>
              </div>

              {/* Next Goal */}
              <div className="bg-[#CCFF00]/10 border border-[#CCFF00]/20 rounded-xl p-3">
                <h4 className="text-[#CCFF00] text-[10px] font-black uppercase tracking-wider mb-1">
                  NEXT GOAL
                </h4>
                <p className="text-white text-xs font-black">
                  {finalSelected.nextGoal}
                </p>
              </div>

              {/* Currently Exploring / Active Research */}
              <div>
                <h4 className="text-[#CCFF00] text-[10px] font-black uppercase tracking-wider mb-1">
                  CURRENTLY EXPLORING
                </h4>
                <p className="text-white/60 text-[11px] font-medium leading-relaxed">
                  {finalSelected.learning}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
