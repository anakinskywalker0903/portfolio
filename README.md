# Rohit Dubey — Engineering Portfolio Hub (2026)

A premium, high-performance web portfolio built to showcase personal engineering milestones, production applications, verified internship experience, and professional client case studies.

## 🚀 Tech Stack

*   **Framework**: React 19 (TypeScript)
*   **Build Tool**: Vite (optimized asset pipelining)
*   **Styling**: Tailwind CSS (custom utility skins)
*   **Animations**: Motion (Framer Motion) & Custom CSS Keyframes
*   **3D Elements**: React Three Fiber, Three.js, & Rapier Physics (3D Dangle Lanyard)
*   **Hosting & Deployment**: Vercel

## 📂 Core Pages & Architecture

1.  **Home Page (`/`)**: Cinematic opening preloader, dynamic availability indicators, and interactive 3D physics-based dangle Lanyard displaying developer ID badge.
2.  **Projects (`/projects`)**: Scoped grid displaying production builds (NoteLift, NoteLift-AI, Brainstormzz, SSB Simulator, InstaSave, RailDost) with verified contribution notes.
3.  **Client Work (`/client-work`)**: Clean client case studies page featuring DevInterio website redesign and upcoming CGI architecture portals (Jaas Visual).
4.  **Experience (`/experience`)**: Chronological timeline displaying verified AKS Ecosystem Web Development Internship.
5.  **Learning & Certifications (`/learning-archive`)**: Categorized certification registry featuring Featured credentials (Oracle Java, IIT NPTEL Cloud, UMich Applied ML, GitHub LinkedIn) and learning collection pathways. Includes stateful inline PDF viewing without page redirections.
6.  **Global Shell Navigation**: Unified `Layout` component with a responsive floating `← Back to Home` breadcrumb button that dynamically hides on the home view.

## 🛠️ Local Development & Commands

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### Dev Server
Start the local hot-reloaded development server:
```bash
npm run dev
```

### Production Build
Build the minified production bundle to the `dist/` directory:
```bash
npm run build
```
