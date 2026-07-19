import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  SiReact, SiTypescript, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb,
  SiFigma, SiGithub, SiDocker, SiPython, SiNumpy,
  SiPandas, SiGit, SiPostman, SiVercel, SiRailway,
  SiHtml5, SiCss, SiJavascript, SiMysql
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { VscCode } from 'react-icons/vsc';
import { GrDatabase } from 'react-icons/gr';
import { TbBrain, TbLock, TbNetwork } from 'react-icons/tb';

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
  concepts: string[];
  learning: string;
}

const skillDetails: Skill[] = [
  // --- FRONTEND ---
  {
    name: 'React',
    stage: 'ACTIVE',
    learningSince: 2025,
    projectsCount: 6,
    focus: 'State management & Hooks',
    nextGoal: 'Master React Server Components',
    categories: ['Frontend'],
    Icon: SiReact,
    color: '#61DAFB',
    description: 'Component-based UI development with declarative state flows, custom hooks cycle, and efficient rendering systems.',
    projects: ['Personal Portfolio 2026', 'E-Commerce Platform', 'Real-Time Dashboard'],
    concepts: ['React Hook Workflows', 'Context API & State', 'JSX Rendering Cycle', 'Routing & Data Fetching'],
    learning: 'React 19 forms hooks (useActionState) and compiler compilation upgrades.'
  },
  {
    name: 'TypeScript',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 5,
    focus: 'Strict typing & generics',
    nextGoal: 'Build a custom state management system',
    categories: ['Languages', 'Frontend'],
    Icon: SiTypescript,
    color: '#3178C6',
    description: 'Type-safe JavaScript development. Advanced typings, static analysis, type assertions, and compilation checks.',
    projects: ['Interactive 3D Engine', 'Full-Stack Dashboard API'],
    concepts: ['Interfaces & custom types', 'Generics & Utility Types', 'Strict Null Checks', 'TSConfig Configurations'],
    learning: 'Branded/nominal typing structures for compile-time domain validation.'
  },
  {
    name: 'Next.js',
    stage: 'ACTIVE',
    learningSince: 2026,
    projectsCount: 3,
    focus: 'App Router & server side loading',
    nextGoal: 'Implement robust route caching & middleware handlers',
    categories: ['Frontend'],
    Icon: SiNextdotjs,
    color: '#000000',
    description: 'Modern React meta-framework. Server components routing, server actions execution, and static generation frameworks.',
    projects: ['SaaS Analytics Portal', 'Case Study Site'],
    concepts: ['App Router Layouts', 'Server vs. Client Components', 'Suspense & Streaming', 'SEO & Metadata API'],
    learning: 'Dynamic caching rules and segment config options in App Router.'
  },
  {
    name: 'Tailwind CSS',
    stage: 'ACTIVE',
    learningSince: 2025,
    projectsCount: 10,
    focus: 'Custom themes & responsive screens',
    nextGoal: 'Optimize custom design utility setups',
    categories: ['Frontend'],
    Icon: SiTailwindcss,
    color: '#38BDF8',
    description: 'Utility-first styling approach for rapid, pixel-perfect user interface building and responsive styling sheets.',
    projects: ['All current web builds', 'Component Libraries'],
    concepts: ['Fluid Layout Systems', 'Dynamic Grid / Flexbox', 'Dark Mode Configs', 'Theme Extensions'],
    learning: 'Custom CSS variable declarations inside Tailwind v4 configurations.'
  },
  {
    name: 'HTML5',
    stage: 'FOUNDATION',
    learningSince: 2025,
    projectsCount: 12,
    focus: 'Semantic markup & accessibility',
    nextGoal: 'Implement WCAG 2.1 AA structures',
    categories: ['Frontend'],
    Icon: SiHtml5,
    color: '#E34F26',
    description: 'Structural foundation of modern web documents. Semantic elements, schema mappings, and document flows.',
    projects: ['Main Portfolio Shell', 'Landing Pages Collection'],
    concepts: ['Semantic Layout Elements', 'Forms & Inputs Validation', 'DOM Structure Hierarchies', 'Meta Tagging for SEO'],
    learning: 'ARIA roles mapping configurations for voice reader clients.'
  },
  {
    name: 'CSS3',
    stage: 'FOUNDATION',
    learningSince: 2025,
    projectsCount: 12,
    focus: 'Modern layouts & transitions',
    nextGoal: 'Advanced custom transitions & properties',
    categories: ['Frontend'],
    Icon: SiCss,
    color: '#1572B6',
    description: 'Styling sheets for visual formatting. Custom layouts, animations, transitions, and theme controls.',
    projects: ['Theme Custom Stylesheets', 'Card Parallax Animations'],
    concepts: ['Flexbox & Grid Layouts', 'Responsive Media Queries', 'Custom Variables', 'Hover & Active States'],
    learning: 'Container queries for advanced component-scoped responsive layouts.'
  },
  {
    name: 'JavaScript',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 8,
    focus: 'Async patterns & core APIs',
    nextGoal: 'Master memory profile management',
    categories: ['Languages', 'Frontend', 'Backend'],
    Icon: SiJavascript,
    color: '#F7DF1E',
    description: 'Core scripting language of the web. Asynchronous operations, dynamic events, APIs integrations, and modular patterns.',
    projects: ['Custom Canvas Animations', 'Form Validation Scripting'],
    concepts: ['Promises & Async/Await', 'DOM Manipulation', 'Event Loops & Listeners', 'ES6+ Modules'],
    learning: 'Built-in JavaScript garbage collection cycles and memory leaks profiling.'
  },

  // --- BACKEND ---
  {
    name: 'Node.js',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 4,
    focus: 'Async server logic & scripts',
    nextGoal: 'Build high-volume stream ingestion pipelines',
    categories: ['Backend'],
    Icon: SiNodedotjs,
    color: '#339933',
    description: 'Asynchronous event-driven JavaScript runtime environment, ideal for building scalable network servers.',
    projects: ['Real-Time WebSockets Hub', 'Image Compression Server'],
    concepts: ['Event Loop Mechanics', 'File System Operations', 'Process Management', 'Server Scaling'],
    learning: 'Native Node.js test-runner configurations for microservice suites.'
  },
  {
    name: 'Express',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 4,
    focus: 'REST APIs & routers',
    nextGoal: 'Implement middleware rate-limiting patterns',
    categories: ['Backend'],
    Icon: SiExpress,
    color: '#000000',
    description: 'Minimalist backend web framework for Node.js, providing robust tooling for API endpoints and requests processing.',
    projects: ['REST Backend APIs', 'Authentication Gateways'],
    concepts: ['Routing Middleware', 'Request/Response Contexts', 'Error Boundary Middleware', 'CORS Configs'],
    learning: 'Dynamic validation middlewares built using TS interface matching.'
  },
  {
    name: 'REST APIs',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 6,
    focus: 'Endpoint structures & headers',
    nextGoal: 'Implement advanced versioning systems',
    categories: ['Backend'],
    Icon: TbNetwork,
    color: '#0038FF',
    description: 'Designing RESTful HTTP architectures with clear resource hierarchies, HTTP status rules, and structured replies.',
    projects: ['Recruiter Portal Endpoint', 'User Session Handlers'],
    concepts: ['HTTP Verbs & Semantics', 'Status Code Conventions', 'JSON Response Payloads', 'Query Filtering/Sorting'],
    learning: 'Designing idempotent APIs handling automatic retry headers.'
  },
  {
    name: 'Authentication',
    stage: 'LEARNING',
    learningSince: 2026,
    projectsCount: 2,
    focus: 'JWT & local token storage',
    nextGoal: 'Build multi-tenant authentication from scratch',
    categories: ['Backend'],
    Icon: TbLock,
    color: '#FF007A',
    description: 'Implementing secure verification protocols, login flows, hashing passwords, and protecting backend endpoints.',
    projects: ['Dashboard Login Gate', 'Admin Route Guards'],
    concepts: ['Password Hashing (bcrypt)', 'JWT Generation & Verification', 'Cookie Session Contexts', 'Route Protection Guards'],
    learning: 'OAuth 2.0 protocol specifications and integration architectures.'
  },

  // --- LANGUAGES ---
  {
    name: 'Java',
    stage: 'FOUNDATION',
    learningSince: 2024,
    projectsCount: 3,
    focus: 'OOP structures & compiler rules',
    nextGoal: 'Learn Spring Boot backend setups',
    categories: ['Languages'],
    Icon: DiJava,
    color: '#ED8B00',
    description: 'Class-based, object-oriented compiled programming language designed to have minimal implementation dependencies.',
    projects: ['CLI Inventory Manager', 'Bank Transaction Script'],
    concepts: ['Classes & Object Blueprints', 'Inheritance & Polymorphism', 'Methods & Overloading', 'Basic Data Structures'],
    learning: 'Modern Java stream API filters and map methods.'
  },
  {
    name: 'Python',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 5,
    focus: 'Data scripts & API integration',
    nextGoal: 'Train custom local neural networks',
    categories: ['Languages', 'AI / ML'],
    Icon: SiPython,
    color: '#3776AB',
    description: 'High-level general-purpose scripting language, optimal for data science, automation scripts, and AI integrations.',
    projects: ['Web Scraper Tool', 'Data Cleanup Runner'],
    concepts: ['Data Types & Structures', 'Script Writing & Automation', 'File I/O Parsing', 'Package Configs (pip/venv)'],
    learning: 'FastAPI structures for rapid Python microservice creation.'
  },
  {
    name: 'SQL',
    stage: 'FOUNDATION',
    learningSince: 2025,
    projectsCount: 3,
    focus: 'Relational queries & filters',
    nextGoal: 'Write advanced query window routines',
    categories: ['Languages', 'Databases'],
    Icon: GrDatabase,
    color: '#0038FF',
    description: 'Structured Query Language used to write, filter, join, and manage data entries stored in relational tables.',
    projects: ['Customer Ledger database', 'Reporting Dashboards'],
    concepts: ['Select, Filter, & Sort', 'Table Joins (Inner/Outer)', 'Group By Aggregations', 'Schema Design Foundations'],
    learning: 'Subquery optimizations and writing nested CTE operations.'
  },

  // --- DATABASES ---
  {
    name: 'PostgreSQL',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 3,
    focus: 'Table designs & foreign keys',
    nextGoal: 'Optimize slow queries using indexing plans',
    categories: ['Databases'],
    Icon: SiPostgresql,
    color: '#4169E1',
    description: 'Enterprise-grade open-source relational database system, supporting strict schema constraints and ACID compliance.',
    projects: ['User Database Store', 'SaaS Client Repositories'],
    concepts: ['Relational Schema Models', 'Primary & Foreign Keys', 'Data Normalization rules', 'Simple Query Indexing'],
    learning: 'JSONB data types storage and performance queries.'
  },
  {
    name: 'MySQL',
    stage: 'FOUNDATION',
    learningSince: 2025,
    projectsCount: 2,
    focus: 'Schema setups & table joins',
    nextGoal: 'Learn to configure replication arrays',
    categories: ['Databases'],
    Icon: SiMysql,
    color: '#4479A1',
    description: 'Widely-used relational database management system, powering millions of web applications and structured logging repositories.',
    projects: ['Blog database system', 'System logs collection'],
    concepts: ['Table Schema Setups', 'Primary Key Constraints', 'Basic Joins & Filters', 'Database Backup Triggers'],
    learning: 'Row-level locking configurations for high-concurrency tables.'
  },
  {
    name: 'MongoDB',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 4,
    focus: 'NoSQL schemas & aggregations',
    nextGoal: 'Orchestrate scale-out sharding configurations',
    categories: ['Databases'],
    Icon: SiMongodb,
    color: '#47A248',
    description: 'Document-based NoSQL database offering horizontal scaling, index optimization, and high performance object storage.',
    projects: ['Content Management Backends', 'Logging Databases'],
    concepts: ['Document Store Schemas', 'Aggregation Queries', 'Query Indexes & Filters', 'Mongoose Models Map'],
    learning: 'Time-series data collections setups and storage plans.'
  },

  // --- AI / ML ---
  {
    name: 'NumPy',
    stage: 'FOUNDATION',
    learningSince: 2025,
    projectsCount: 2,
    focus: 'Array operations & vector math',
    nextGoal: 'Optimize custom dot-product math routines',
    categories: ['AI / ML'],
    Icon: SiNumpy,
    color: '#013243',
    description: 'Fundamental package for scientific computing in Python, providing support for multi-dimensional array math operations.',
    projects: ['Linear algebra matrix solvers', 'Numerical math scripts'],
    concepts: ['Array Creation & Dimensions', 'Vectorized Math Operations', 'Array Slicing & Masking', 'Matrix Dot-Products'],
    learning: 'NumPy C-extension integration details for faster loops.'
  },
  {
    name: 'Pandas',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 3,
    focus: 'Data cleanup & DataFrame filters',
    nextGoal: 'Advanced multi-index dataset parsing',
    categories: ['AI / ML'],
    Icon: SiPandas,
    color: '#150458',
    description: 'Flexible data analysis and manipulation library for Python, offering clean DataFrame structures to load and edit datasets.',
    projects: ['CSV parser tools', 'Log analysis scripts'],
    concepts: ['DataFrame Creation', 'Data Cleaning & Dropping', 'Groupby Aggregations', 'CSV / JSON Ingestion'],
    learning: 'Streaming large CSV payloads without overflow issues.'
  },
  {
    name: 'OpenAI API',
    stage: 'ACTIVE',
    learningSince: 2025,
    projectsCount: 4,
    focus: 'Structured outputs & completions',
    nextGoal: 'Build dynamic multi-agent system arrays',
    categories: ['AI / ML'],
    Icon: TbBrain,
    color: '#412991',
    description: 'Integrating large language model endpoints into custom applications for chat operations, content parsing, and structured JSON output.',
    projects: ['Resume Generator API', 'Auto Code Reviewer'],
    concepts: ['Chat Completions API', 'System Prompts & Rules', 'Function/Tool Callbacks', 'JSON Mode Formatting'],
    learning: 'Structured outputs using Zod schema constraints.'
  },
  {
    name: 'RAG',
    stage: 'LEARNING',
    learningSince: 2026,
    projectsCount: 2,
    focus: 'Vector search context injection',
    nextGoal: 'Master semantic cross-encoder reranking',
    categories: ['AI / ML'],
    Icon: TbBrain,
    color: '#CCFF00',
    description: 'Combining dynamic retrieval searches with large language models to supply custom, domain-specific background context to prompts.',
    projects: ['Local documents questioner', 'Semantic search engine'],
    concepts: ['Vector Search Database Context', 'Context Injection Setups', 'Text Chunking Strategies', 'Embeddings Generation API'],
    learning: 'Chunking overlap tuning and cross-encoder search filters.'
  },
  {
    name: 'Prompt Engineering',
    stage: 'ACTIVE',
    learningSince: 2025,
    projectsCount: 5,
    focus: 'Few-shot & reasoning templates',
    nextGoal: 'Configure programmatic prompt test suites',
    categories: ['AI / ML'],
    Icon: TbBrain,
    color: '#0038FF',
    description: 'Crafting, testing, and optimizing system prompts to get structured, reliable, and high-fidelity output from language models.',
    projects: ['Structured agents rules', 'Prompt templates tester'],
    concepts: ['System Rules & Guidelines', 'Few-shot Learning Prompts', 'Chain-of-Thought Patterns', 'Context Windows Constraints'],
    learning: 'Systematic test evaluations with custom parsing checks.'
  },

  // --- TOOLS ---
  {
    name: 'Git',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 15,
    focus: 'Branch management & commits',
    nextGoal: 'Master interactive rebase workflows',
    categories: ['Tools'],
    Icon: SiGit,
    color: '#F05032',
    description: 'Local distributed version control tool tracking edits, branches, merges, and commit history chains.',
    projects: ['All codebases repos', 'Open source contributions'],
    concepts: ['Committing & Staging', 'Branching & Merging', 'Resolving Staging Conflicts', 'Git Diff & Log Tools'],
    learning: 'Custom pre-commit git hook automation scripts.'
  },
  {
    name: 'GitHub',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 15,
    focus: 'PR reviews & releases',
    nextGoal: 'Write custom CI/CD action workflows',
    categories: ['Tools'],
    Icon: SiGithub,
    color: '#181717',
    description: 'Web-based hosting portal for Git repositories, facilitating team PR reviews, issues tracking, and release runs.',
    projects: ['Hosting current portfolio', 'GitHub Actions setups'],
    concepts: ['Pull Request Code Reviews', 'Issue Tracking Systems', 'GitHub Pages Deployments', 'Forking & Upstream Merges'],
    learning: 'GitHub Actions automated unit-testing pipelines.'
  },
  {
    name: 'VS Code',
    stage: 'ACTIVE',
    learningSince: 2024,
    projectsCount: 20,
    focus: 'Extensions & configurations',
    nextGoal: 'Set up custom global keybindings',
    categories: ['Tools'],
    Icon: VscCode,
    color: '#007ACC',
    description: 'Extensible code editor providing rich syntax, lint tools integration, task configs, and terminal setups.',
    projects: ['All IDE development workspaces'],
    concepts: ['Extension Customizations', 'Integrated Terminal Setups', 'Debugger Workspace Setups', 'Workspace Settings Config'],
    learning: 'Custom keyboard mapping rules for faster editing workflows.'
  },
  {
    name: 'Postman',
    stage: 'ACTIVE',
    learningSince: 2025,
    projectsCount: 8,
    focus: 'HTTP testing & contexts',
    nextGoal: 'Configure automated collections check suites',
    categories: ['Tools'],
    Icon: SiPostman,
    color: '#FF6C37',
    description: 'API client tool allowing developers to execute, check, log, and automate REST HTTP endpoint requests.',
    projects: ['REST Backend Testing', 'Route validations logs'],
    concepts: ['HTTP Request Generation', 'Environment Variables Config', 'Response Assertions Checks', 'Collection Running tools'],
    learning: 'Scripting response validation assertions inside test tabs.'
  },
  {
    name: 'Figma',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 4,
    focus: 'Wireframes & auto layouts',
    nextGoal: 'Configure advanced variable systems',
    categories: ['Tools'],
    Icon: SiFigma,
    color: '#F24E1E',
    description: 'Vector design editor and prototyping tool, ideal for visual layout mockups, user flows, and wireframing dashboards.',
    projects: ['App UX Wireframes', 'Client Site Mockups'],
    concepts: ['Auto Layout v5 Padding', 'Component Variants Config', 'Vector Framing Layouts', 'Interactive Web Prototyping'],
    learning: 'Component token mappings for unified dark mode systems.'
  },
  {
    name: 'Docker',
    stage: 'EXPLORING',
    learningSince: 2026,
    projectsCount: 2,
    focus: 'Dockerfile multistage building',
    nextGoal: 'Deploy local multi-container swarm configurations',
    categories: ['Tools'],
    Icon: SiDocker,
    color: '#2496ED',
    description: 'Container platform standardizing application builds to execute reliably across development, testing, and production servers.',
    projects: ['Local API Dev Environment', 'Deployable Backend containers'],
    concepts: ['Dockerfile Formats', 'Multi-Container Compose files', 'Volume Bindings & Storage', 'Container Ports Mapping'],
    learning: 'Local Swarm cluster deployments and network setups.'
  },

  // --- CLOUD ---
  {
    name: 'Vercel',
    stage: 'ACTIVE',
    learningSince: 2025,
    projectsCount: 8,
    focus: 'Frontend deploys & domain config',
    nextGoal: 'Configure edge middleware redirect logic',
    categories: ['Cloud'],
    Icon: SiVercel,
    color: '#000000',
    description: 'Cloud platform optimized for frontend hosting, offering serverless builds, caching, and edge routing.',
    projects: ['Static Frontend Hosting', 'Portfolio deployments'],
    concepts: ['Static Web Hosting', 'Custom Domain Settings', 'Serverless Functions run', 'GitHub Deployment Webhooks'],
    learning: 'Edge middleware cookie checking verification rules.'
  },
  {
    name: 'Railway',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 4,
    focus: 'Backend deploys & databases',
    nextGoal: 'Set up horizontal scaling alert hooks',
    categories: ['Cloud'],
    Icon: SiRailway,
    color: '#000000',
    description: 'Infrastructure platform providing deployment environments for backend APIs, databases, cron jobs, and background workers.',
    projects: ['Backend API Deployments', 'Database Instances Hosting'],
    concepts: ['Backend Deployments', 'Database Instance Setups', 'Environment Variables config', 'Service Linking Network'],
    learning: 'Internal private networking connections between services.'
  },
  {
    name: 'Hostinger',
    stage: 'ACTIVE',
    learningSince: 2024,
    projectsCount: 3,
    focus: 'DNS records & shared hosting',
    nextGoal: 'Set up automated FTP publish tasks',
    categories: ['Cloud'],
    Icon: SiVercel, // Fallback/Nice Cloud Icon
    color: '#673DE6',
    description: 'Hosting provider offering domain registration, shared hosting spaces, DNS control, and cPanel configuration setups.',
    projects: ['Shared Webspaces Config', 'DNS Records Mapping'],
    concepts: ['Shared Webspaces Config', 'DNS Records Mapping (A/CNAME)', 'FTP Upload Connections', 'SSL Cert Setup Trigger'],
    learning: 'Scripting Git action releases to publish files over SFTP.'
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
    <div className="w-full min-h-screen bg-white pt-32 pb-24 px-6 md:px-10 font-sans selection:bg-[#CCFF00] selection:text-black">
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

              {/* What I've Learned */}
              <div>
                <h4 className="text-[#CCFF00] text-[10px] font-black uppercase tracking-wider mb-1.5">
                  WHAT I'VE LEARNED
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
