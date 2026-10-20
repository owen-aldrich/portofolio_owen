import {
  SiPython, SiTypescript, SiJavascript, SiC,
  SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiOpencv, SiNumpy, SiPandas,
  SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiFastapi, SiPostgresql, SiMysql, SiPrisma,
  SiDocker, SiGit, SiStreamlit,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Database, Network } from 'lucide-react';

/**
 * CoreStackSection
 *
 * Layout per Framer design:
 *   Title kiri (uppercase bold) + subtitle mono, icons flex-wrap di kanan
 *   Separator line antar kategori
 */

// Map nama item → komponen icon
const ICON_MAP = {
  // Languages
  'Python':        SiPython,
  'TypeScript':    SiTypescript,
  'JavaScript':    SiJavascript,
  'Java':          FaJava,
  'C':             SiC,
  'SQL':           Database,

  // AI & ML
  'Deep Learning': Network,
  'TensorFlow':    SiTensorflow,
  'PyTorch':       SiPytorch,
  'Keras':         SiKeras,
  'Scikit-Learn':  SiScikitlearn,
  'OpenCV':        SiOpencv,
  'NumPy':         SiNumpy,
  'Pandas':        SiPandas,

  // Web
  'React':         SiReact,
  'Next.js':       SiNextdotjs,
  'Tailwind CSS':  SiTailwindcss,
  'HTML':          SiHtml5,
  'CSS':           SiCss,

  // Backend
  'Node.js':       SiNodedotjs,
  'Express.js':    SiExpress,
  'FastAPI':       SiFastapi,
  'PostgreSQL':    SiPostgresql,
  'MySQL':         SiMysql,
  'Prisma':        SiPrisma,
  'NeonDB':        Database,

  // DevOps
  'Docker':        SiDocker,
  'Git':           SiGit,
  'Streamlit':     SiStreamlit,
};

const CATEGORIES = [
  {
    title:    'Languages',
    subtitle: '// Programming Languages',
    items:    ['Python', 'Java', 'C', 'JavaScript'],
  },
  {
    title:    'AI & Machine Learning',
    subtitle: '// Intelligent Systems & Models',
    items:    ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas'],
  },
  {
    title:    'Web Development',
    subtitle: '// Interactive Web Interfaces',
    items:    ['HTML', 'CSS', 'React', 'Tailwind CSS'],
  },
  {
    title:    'Backend & Database',
    subtitle: '// Scalable Server Architectures',
    items:    ['Node.js', 'Express.js', 'FastAPI', 'Prisma', 'MySQL', 'PostgreSQL', 'NeonDB'],
  },
  {
    title:    'DevOps & Cloud',
    subtitle: '// Infrastructure & Deployment',
    items:    ['Docker', 'Git', 'Streamlit'],
  },
];

function StackIconBox({ name }) {
  const IconComponent = ICON_MAP[name];
  return (
    <div className="relative group flex-shrink-0">
      {/* Tooltip */}
      <div className="
        absolute bottom-full left-1/2 -translate-x-1/2 mb-2
        px-2 py-1 rounded-md
        bg-primary text-dark-btn-text
        font-jakarta text-xs font-medium whitespace-nowrap
        opacity-0 group-hover:opacity-100
        translate-y-1 group-hover:translate-y-0
        transition-all duration-150 pointer-events-none
        z-10
      ">
        {name}
        {/* Arrow */}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary" />
      </div>

      {/* Icon box */}
      <div className="
        w-[52px] h-[52px] rounded-[12px] border border-border-color bg-white
        flex items-center justify-center
        hover:border-primary hover:shadow-card
        transition-all duration-150 cursor-default
      ">
        {IconComponent ? (
          <IconComponent size={26} className="text-secondary group-hover:text-primary transition-colors duration-150" />
        ) : (
          <span className="text-[9px] font-mono text-muted text-center leading-tight px-1">{name}</span>
        )}
      </div>
    </div>
  );
}

export default function CoreStackSection() {
  return (
    <section id="stack" className="py-20 bg-page-bg">
      <div className="max-w-content mx-auto px-6">

        {/* Section label */}
        <p className="font-mono text-muted text-sm mb-3">// 03 — CORE STACK</p>

        {/* Heading */}
        <h2 className="font-jakarta font-bold text-[48px] text-primary leading-tight mb-12">
          Core Stack.
        </h2>

        {/* Category rows */}
        <div className="flex flex-col">
          {CATEGORIES.map((cat, i) => (
            <div key={cat.title}>
              {i > 0 && <div className="border-t border-border-color" />}

              <div className="flex flex-col md:flex-row md:items-start gap-6 py-8">
                {/* Left: title + subtitle */}
                <div className="md:w-60 lg:w-72 flex-shrink-0">
                  <h3 className="font-jakarta font-bold text-[18px] text-primary uppercase leading-tight">
                    {cat.title}
                  </h3>
                  <p className="font-mono text-[11px] text-muted mt-1.5 uppercase tracking-wide leading-snug">
                    {cat.subtitle}
                  </p>
                </div>

                {/* Right: icons */}
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((name) => (
                    <StackIconBox key={name} name={name} />
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-border-color" />
        </div>

      </div>
    </section>
  );
}
