import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  SiReact, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPostgresql, SiGithub,
  SiPython, SiNumpy, SiPandas, SiGit,
  SiVercel, SiRailway, SiHtml5, SiCss, SiJavascript,
  SiFirebase, SiFigma
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { VscCode } from 'react-icons/vsc';
import { GrDatabase } from 'react-icons/gr';
import { TbBrain, TbLock, TbNetwork, TbEye } from 'react-icons/tb';

interface Skill {
  name: string;
  stage: 'ACTIVE' | 'PROJECT READY' | 'EXPLORING' | 'FOUNDATION' | 'LEARNING' | 'Comfortable';
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
    stage: 'LEARNING',
    learningSince: 2025,
    projectsCount: 2,
    focus: 'Learning fundamentals',
    nextGoal: 'Move from template customization to independent component/state architecture',
    categories: ['Frontend'],
    Icon: SiReact,
    color: '#61DAFB',
    description: 'Declarative component-based user interfaces. Mostly customizes and refactors AI-assisted templates currently. Learning state and custom hooks lifecycle.',
    projects: ['Personal Portfolio 2026', 'Upsilon'],
    conceptsHeader: "WHAT I'VE USED / CUSTOMIZED",
    concepts: ['JSX Customization', 'useState Hook (built dark mode toggle)', 'Template integration & customization'],
    learning: 'React fundamentals, independent component state design, and native rendering hooks.'
  },
  {
    name: 'TypeScript',
    stage: 'LEARNING',
    learningSince: 2025,
    projectsCount: 0,
    focus: 'Getting started',
    nextGoal: 'Learn and apply in a real project',
    categories: ['Languages', 'Frontend'],
    Icon: SiTypescript,
    color: '#3178C6',
    description: 'Type-safe JavaScript extension. Enforcing syntax checking and compilation guidelines.',
    projects: [],
    conceptsHeader: "LEARNING FOCUS",
    concepts: ['Type annotations', 'Basic interface contracts', 'Understanding compiler errors'],
    learning: 'Type declarations and mapping TS variables in React.'
  },
  {
    name: 'Tailwind CSS',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 3,
    focus: 'Theme custom configs & styling mappings',
    nextGoal: 'Tailwind v4 layouts optimization',
    categories: ['Frontend'],
    Icon: SiTailwindcss,
    color: '#38BDF8',
    description: 'Utility-first styling utility. Creating responsive screens grids and custom config files.',
    projects: ['Upsilon (AKS ecosystem)', 'Portfolio Page', 'AI Career Engine'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Utility Styling Classes', 'Custom theme layouts configs', 'Responsive grid structures', 'Flexbox modifiers'],
    learning: 'Dynamic variable mappings under Tailwind theme controls.'
  },
  {
    name: 'HTML5',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 5,
    focus: 'Semantic elements layouts structures',
    nextGoal: 'Complete WCAG 2.1 AA document rules validation',
    categories: ['Frontend'],
    Icon: SiHtml5,
    color: '#E34F26',
    description: 'Semantic skeletal layout patterns for modern web apps. Document flow structuring.',
    projects: ['Personal Portfolio 2026', 'Brainstormzz', 'AI Career Engine', 'AKS Internship Website', 'Devinterio'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Semantic Document Hierarchies', 'Structured Inputs & Forms', 'DOM Tree structures', 'SEO Meta tag layout setups'],
    learning: 'Mapping structural ARIA roles for accessibility tools.'
  },
  {
    name: 'CSS3',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 5,
    focus: 'Responsive alignments & grid templates',
    nextGoal: 'Advanced fluid sizing properties',
    categories: ['Frontend'],
    Icon: SiCss,
    color: '#1572B6',
    description: 'Layout styling sheets managing spacing, animations, alignments, responsive rules, and visual formats.',
    projects: ['Personal Portfolio 2026', 'Brainstormzz', 'AI Career Engine', 'AKS Internship Website', 'Devinterio'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Flexbox Positioning', 'CSS Grid layouts', 'Media Queries (responsive sizing)', 'Hover & active state transitions'],
    learning: 'Scoping alignments using container-based styling queries.'
  },
  {
    name: 'JavaScript',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 5,
    focus: 'DOM queries, event systems & functions',
    nextGoal: 'Learn Fetch API for network integration',
    categories: ['Languages', 'Frontend', 'Backend'],
    Icon: SiJavascript,
    color: '#F7DF1E',
    description: 'Web scripting operations. Managing local state modifications, page triggers, calculations, and inputs checks.',
    projects: ['Personal Portfolio 2026', 'Brainstormzz', 'AI Career Engine', 'AKS Internship Website', 'Devinterio'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['DOM manipulation operations', 'Event Listeners hooks', 'Form Validation routines', 'Modular file structures'],
    learning: 'Asynchronous event loop behaviors and execution timelines.'
  },

  // --- BACKEND ---
  {
    name: 'Node.js',
    stage: 'LEARNING',
    learningSince: 2025,
    projectsCount: 3,
    focus: 'AI-assisted backend scripting',
    nextGoal: 'Understand backend logic independently, not just AI-assisted output',
    categories: ['Backend'],
    Icon: SiNodedotjs,
    color: '#339933',
    description: 'Server runtime running JavaScript. Backend configurations constructed with AI assistance.',
    projects: ['Brainstormzz', 'AI Career Engine', 'Upsilon'],
    conceptsHeader: "WHAT I'VE BUILT (AI-ASSISTED)",
    concepts: ['Routing files', 'Process Env Settings', 'Port execution setups'],
    learning: 'Core server execution loops and filesystem I/O operations.'
  },
  {
    name: 'Express.js',
    stage: 'LEARNING',
    learningSince: 2025,
    projectsCount: 3,
    focus: 'Express router setup (AI-assisted)',
    nextGoal: 'Understand Express middleware and server routing independently',
    categories: ['Backend'],
    Icon: SiExpress,
    color: '#000000',
    description: 'Backend web framework. Setting up router controllers and server endpoints.',
    projects: ['Brainstormzz', 'AI Career Engine', 'Upsilon'],
    conceptsHeader: "WHAT I'VE BUILT (AI-ASSISTED)",
    concepts: ['Routing endpoints definitions', 'Port listening scripts', 'Body-parsing middleware configs'],
    learning: 'Middleware chains setups and standard server error handling.'
  },
  {
    name: 'REST APIs',
    stage: 'LEARNING',
    learningSince: 2025,
    projectsCount: 3,
    focus: 'Surface-level api queries and routing',
    nextGoal: 'Understand request/response handling deeply',
    categories: ['Backend'],
    Icon: TbNetwork,
    color: '#0038FF',
    description: 'Designing endpoints formats and connecting clients. Mostly consumed Google OAuth APIs and static JSON data routers.',
    projects: ['AI Career Engine API', 'Brainstormzz OpenAI endpoint', 'OAuth flow redirects'],
    conceptsHeader: "WHAT I'VE CONSUMED",
    concepts: ['Google OAuth endpoints', 'JSON API Response variables', 'Vite proxy mappings'],
    learning: 'Stateless server concepts and HTTP protocols rules.'
  },
  {
    name: 'Authentication',
    stage: 'LEARNING',
    learningSince: 2026,
    projectsCount: 2,
    focus: 'Google OAuth cloud console config',
    nextGoal: 'Understand OAuth flow end-to-end (server-side token/session handling)',
    categories: ['Backend'],
    Icon: TbLock,
    color: '#FF007A',
    description: 'Enforcing login rules. Implemented console Google OAuth verification (client IDs/credentials) but server handling remains AI-assisted.',
    projects: ['AI Career Engine (Google Auth)', 'Upsilon portal login'],
    conceptsHeader: "WHAT I'VE CONFIGURED",
    concepts: ['Google Cloud Console settings', 'Client ID & redirect URIs configs', 'Client-side verification hooks'],
    learning: 'Server token generation, session cookies, and security hashing keys.'
  },

  // --- LANGUAGES ---
  {
    name: 'Java',
    stage: 'LEARNING',
    learningSince: 2024,
    projectsCount: 0,
    focus: 'DSA practice problems',
    nextGoal: 'Continue DSA in Java',
    categories: ['Languages'],
    Icon: DiJava,
    color: '#ED8B00',
    description: 'Object-oriented programming language utilized for local algorithmic training and DSA practices.',
    projects: [],
    conceptsHeader: "LEARNING FOCUS",
    concepts: ['OOP basic concepts', 'Control Flow loops', 'Java Arrays & variables', 'DSA practice setups'],
    learning: 'Java collections framework and structures complexity optimization.'
  },
  {
    name: 'Python',
    stage: 'Comfortable',
    learningSince: 2025,
    projectsCount: 3,
    focus: 'Not actively focused right now',
    nextGoal: 'Build fluency for AI Engineer-track roles',
    categories: ['Languages', 'AI / ML'],
    Icon: SiPython,
    color: '#3776AB',
    description: 'High-level programming language used for scripting widgets, games, and basic calculations tools.',
    projects: ['Gita Verse Generator (Tkinter)', 'Turtle Crossing Game', 'Unit Converter'],
    conceptsHeader: "USED FOR",
    concepts: ['Tkinter UI creation', 'Turtle Game loop math', 'Automation logic', 'Basic calculations scripts'],
    learning: 'Python scripts execution frameworks and package managers.'
  },
  {
    name: 'SQL',
    stage: 'LEARNING',
    learningSince: 2025,
    projectsCount: 0,
    focus: 'Relational query basics',
    nextGoal: 'Learn joins and table relationships further',
    categories: ['Languages', 'Databases'],
    Icon: GrDatabase,
    color: '#0038FF',
    description: 'Relational data query syntax. Knows basic data select statements and filters.',
    projects: [],
    conceptsHeader: "LEARNING FOCUS",
    concepts: ['CREATE TABLE schemas', 'SELECT and WHERE data filters', 'Basic JOIN syntax usage'],
    learning: 'Relational schema design rules and complex CTE operations.'
  },

  // --- DATABASES ---
  {
    name: 'PostgreSQL',
    stage: 'LEARNING',
    learningSince: 2025,
    projectsCount: 1,
    focus: 'Table creation & Neon connection',
    nextGoal: 'Learn to write queries independently, including joins',
    categories: ['Databases'],
    Icon: SiPostgresql,
    color: '#4169E1',
    description: 'Relational data storage (NeonDB serverless cloud). Table schemas built with manual + AI-assisted code.',
    projects: ['Upsilon'],
    conceptsHeader: "WHAT I'VE DONE (AI-ASSISTED + MANUAL)",
    concepts: ['NeonDB cloud database integrations', 'Table creations', 'Basic database table fields mapping'],
    learning: 'Query plans optimization and writing nested joins.'
  },
  {
    name: 'Firebase',
    stage: 'LEARNING',
    learningSince: 2025,
    projectsCount: 1,
    focus: 'Incomplete project connection',
    nextGoal: 'Master database setups',
    categories: ['Databases'],
    Icon: SiFirebase,
    color: '#FFCA28',
    description: 'NoSQL cloud database services. Used basic database bindings in an incomplete application.',
    projects: ['Incomplete app setup'],
    conceptsHeader: "WHAT I'VE DONE (AI-ASSISTED + MANUAL)",
    concepts: ['Firebase dashboard project creation', 'Basic collections connections'],
    learning: 'Firebase auth rules configurations.'
  },

  // --- AI / ML ---
  {
    name: 'OpenAI / Claude API',
    stage: 'Comfortable',
    learningSince: 2025,
    projectsCount: 2,
    focus: 'Prompt integrations & JSON schema outputs',
    nextGoal: 'Handle rate limits and API errors more robustly',
    categories: ['AI / ML'],
    Icon: TbBrain,
    color: '#412991',
    description: 'Querying foundation models to retrieve response formats. Managed JSON structured queries parser.',
    projects: ['Brainstormzz (OpenAI)', 'AI Career Engine (Claude API)'],
    conceptsHeader: "WHAT I'VE INTEGRATED",
    concepts: ['Structured JSON completions prompts', 'API callbacks mapping', 'Whiteboard rendering of OpenAI suggestions'],
    learning: 'Structured output formats checks and error retry loops.'
  },
  {
    name: 'Prompt Engineering',
    stage: 'Comfortable',
    learningSince: 2025,
    projectsCount: 2,
    focus: 'Iterative prompt refinement',
    nextGoal: 'Explore few-shot prompting in production contexts',
    categories: ['AI / ML'],
    Icon: TbBrain,
    color: '#0038FF',
    description: 'Structuring clear prompt payloads to yield predictable completions formats.',
    projects: ['Brainstormzz Prompt Settings', 'AI Career Engine template'],
    conceptsHeader: "WHAT I'VE REFINED",
    concepts: ['JSON extraction templates', 'Iterative prompt tuning tests', 'System instructions scoping'],
    learning: 'Few-shot prompts validation routines.'
  },
  {
    name: 'NumPy / Pandas',
    stage: 'LEARNING',
    learningSince: 2025,
    projectsCount: 0,
    focus: 'Basic array construction',
    nextGoal: 'Build toward real data analysis use cases',
    categories: ['AI / ML'],
    Icon: SiPandas, // Fallback/nice data icon
    color: '#150458',
    description: 'Basic data structures arrays. No data cleaning or analysis has been performed yet.',
    projects: [],
    conceptsHeader: "LEARNING FOCUS",
    concepts: ['NumPy arrays layout', 'Pandas DataFrame basic creation', 'Basic dataset table dimensions check'],
    learning: 'Dataset row sorting and missing data cleanup pipelines.'
  },

  // --- TOOLS ---
  {
    name: 'Git',
    stage: 'Comfortable',
    learningSince: 2025,
    projectsCount: 5,
    focus: 'Branching, commits, push/pull',
    nextGoal: 'Handle a real merge conflict',
    categories: ['Tools'],
    Icon: SiGit,
    color: '#F05032',
    description: 'Version control software. Pushes, checkouts, and branching performed on daily repositories.',
    projects: ['All personal portfolio repositories', 'AKS internship layouts'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Local staging (add/commit)', 'Branch management (checkout/branch)', 'Pushes/pulls to GitHub repos'],
    learning: 'Advanced git stash tools and rebasing operations.'
  },
  {
    name: 'GitHub',
    stage: 'Comfortable',
    learningSince: 2025,
    projectsCount: 5,
    focus: 'Branching, commits, push/pull',
    nextGoal: 'GitHub Actions automation workflows',
    categories: ['Tools'],
    Icon: SiGithub,
    color: '#181717',
    description: 'Remote hosting platform for code and repos.',
    projects: ['All personal portfolio repositories', 'AKS internship layouts'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Repository hosting management', 'Issue tracking basic usage', 'Pull requests processing'],
    learning: 'GitHub actions continuous integration pipelines.'
  },
  {
    name: 'VS Code',
    stage: 'PROJECT READY',
    learningSince: 2024,
    projectsCount: 5,
    focus: 'Primary code editor',
    nextGoal: 'Configure custom keybindings',
    categories: ['Tools'],
    Icon: VscCode,
    color: '#007ACC',
    description: 'Local code editing environment. Standard editor setups.',
    projects: ['All current web builds code bases'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Extension setups configs', 'Integrated shell workspace usage', 'Standard configurations editing'],
    learning: 'Debug environments profiling setups.'
  },
  {
    name: 'Chrome DevTools',
    stage: 'Comfortable',
    learningSince: 2025,
    projectsCount: 5,
    focus: 'Debugging DOM and layouts',
    nextGoal: 'Configure performance tracing',
    categories: ['Tools'],
    Icon: TbEye,
    color: '#007ACC',
    description: 'In-browser inspector and diagnostics suite.',
    projects: ['All current web builds code bases'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['DOM and CSS inspector logs', 'Console logging debugging', 'Mobile layout view simulations'],
    learning: 'Performance rendering audits and memory leaks logs.'
  },
  {
    name: 'GitHub Projects',
    stage: 'LEARNING',
    learningSince: 2025,
    projectsCount: 1,
    focus: 'Task tracking on closed project',
    nextGoal: 'Manage a multi-contributor workflow',
    categories: ['Tools'],
    Icon: SiGithub, // Reusing SiGithub
    color: '#181717',
    description: 'Task board platform managing cards roadmap progress tracking.',
    projects: ['Upsilon management board (now closed)'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Task cards setups', 'Kanban boards states mapping'],
    learning: 'Automated milestone progress updates.'
  },
  {
    name: 'Figma',
    stage: 'LEARNING',
    learningSince: 2025,
    projectsCount: 1,
    focus: 'Code-first layout alignments',
    nextGoal: 'Variable design token mappings',
    categories: ['Tools'],
    Icon: SiFigma,
    color: '#F24E1E',
    description: 'Interface vector mockups tool. Prefers designing in code directly, but inspects templates and components.',
    projects: ['Client site wireframes mockup inspects'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Reviewing component vectors', 'Auto layout inspection'],
    learning: 'Designing layouts from scratch using auto-layout variables.'
  },

  // --- CLOUD ---
  {
    name: 'Vercel',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 3,
    focus: 'Frontend deployments',
    nextGoal: 'Edge middleware configurations',
    categories: ['Cloud'],
    Icon: SiVercel,
    color: '#000000',
    description: 'Web hosting infrastructure. Configured deployments via automatic repository hooks.',
    projects: ['Brainstormzz', 'AI Career Engine (frontend)', 'SSB Simulator (WAT/PPDT/SRT)'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Deploying from Git hooks', 'Vercel dashboard domain setups'],
    learning: 'Handling serverless functions headers and edge routing logs.'
  },
  {
    name: 'Railway',
    stage: 'PROJECT READY',
    learningSince: 2025,
    projectsCount: 1,
    focus: 'Service deployments',
    nextGoal: 'Configure horizontal scaling rules',
    categories: ['Cloud'],
    Icon: SiRailway,
    color: '#000000',
    description: 'Cloud hosting environment for backend applications and servers.',
    projects: ['AI Career Engine (backend)'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Hosting Node backends from Git', 'Setting dashboard environmental variables'],
    learning: 'Database instances links configurations.'
  },
  {
    name: 'Hostinger',
    stage: 'PROJECT READY',
    learningSince: 2024,
    projectsCount: 1,
    focus: 'Shared hosting & DNS setups',
    nextGoal: 'Automated FTP release scripting',
    categories: ['Cloud'],
    Icon: SiVercel, // Fallback/Nice Cloud Icon
    color: '#673DE6',
    description: 'Shared web space space provider. Configured domains redirection.',
    projects: ['Devinterio'],
    conceptsHeader: "WHAT I'VE USED",
    concepts: ['Shared hosting allocations', 'Nameservers mapping (A/CNAME settings)'],
    learning: 'Releasing files automatically over SFTP.'
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
        
        {/* Header with Stats on the right */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 border-b border-black/5 pb-8">
          <div className="max-w-2xl">
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

          {/* Toolkit Metric Counters in the right empty gap */}
          <div className="flex gap-6 sm:gap-10 bg-white/40 backdrop-blur-md border-2 border-black rounded-[2.25rem] p-6 sm:p-8 shadow-[6px_6px_0_#000000] flex-shrink-0 self-start lg:self-center">
            <div>
              <span className="text-[10px] font-black uppercase text-black/40 block mb-1">Technologies</span>
              <span className="text-3xl sm:text-4xl font-black text-black leading-none">{skillDetails.length}</span>
            </div>
            <div className="w-[2px] bg-black/10 self-stretch" />
            <div>
              <span className="text-[10px] font-black uppercase text-black/40 block mb-1">Categories</span>
              <span className="text-3xl sm:text-4xl font-black text-black leading-none">{categories.length - 1}</span>
            </div>
            <div className="w-[2px] bg-black/10 self-stretch" />
            <div>
              <span className="text-[10px] font-black uppercase text-black/40 block mb-1">Projects</span>
              <span className="text-3xl sm:text-4xl font-black text-black leading-none">15+</span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar - Sticky Glassmorphic Menu */}
        <div className="sticky top-[80px] z-40 bg-white/20 backdrop-blur-md py-3 px-5 border-2 border-black/10 rounded-2xl shadow-lg mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
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
                'Comfortable': 'bg-[#CCFF00] text-black border-black',
                'PROJECT READY': 'bg-[#0038FF]/10 text-[#0038FF] border-[#0038FF]/20',
                'FOUNDATION': 'bg-black/5 text-black/60 border-black/5',
                'LEARNING': 'bg-amber-500/10 text-amber-700 border-amber-500/20',
                'EXPLORING': 'bg-cyan-500/10 text-cyan-700 border-cyan-500/20'
              };

              return (
                <button
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className={`group flex flex-col justify-between text-left bg-white/40 backdrop-blur-md rounded-2xl p-4 border-2 transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'border-[#0038FF] shadow-[3px_3px_0_#0038FF] bg-white/70 -translate-x-0.5 -translate-y-0.5'
                      : 'border-black/5 hover:border-black/10 hover:shadow-[3px_3px_0_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5'
                  }`}
                  style={{ minHeight: '110px' }}
                >
                  {/* Top Block: Icon & Stacked Title + Stage */}
                  <div className="flex items-start gap-2.5 w-full mb-2">
                    <div className="w-9 h-9 rounded-xl bg-white border border-black/5 flex items-center justify-center shadow-sm flex-shrink-0">
                      <Icon style={{ color: color === '#000000' ? '#555' : color }} className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-col items-start gap-1 flex-1 min-w-0">
                      <p className="font-black text-xs text-black leading-tight break-words pr-0.5">
                        {skill.name}
                      </p>
                      <span className={`text-[7px] font-black uppercase tracking-wider px-1.5 py-0.5 border rounded-full whitespace-nowrap flex-shrink-0 ${stageColors[skill.stage] || 'bg-black/5'}`}>
                        {skill.stage}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Row: Since & Projects */}
                  <div className="flex items-center justify-between w-full border-t border-black/5 pt-2 mt-auto text-[8px] font-black text-black/40 uppercase tracking-wider">
                    <span>Since {skill.learningSince}</span>
                    <span>
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

          {/* Details Sidebar Panel - The Grayish Engineering Card */}
          <div className="w-full lg:w-[440px] flex-shrink-0 bg-[#1E2026] text-white rounded-[2.25rem] p-7 border-4 border-black shadow-2xl relative overflow-hidden">
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
