import { personal, projects, navLinks } from '../data/content.js';
const project=projects.find(x=>x.slug===new URLSearchParams(location.search).get('id'));
if(!project){location.replace('index.html');throw new Error('Project not found');}
const list=(title,items)=>`<section class="detail-list">
<h2>${title}</h2>
<ol>${items.map((x,i)=>`<li>
<code>${String(i+1).padStart(2,'0')}</code>
<p>
<b>${x.title}</b> — ${x.description}</p>
</li>`).join('')}</ol>
</section>`;
document.querySelector('#app').innerHTML=`<header class="navbar">
<div class="nav-pill">
<a class="logo" href="index.html">${personal.name}</a>
<nav class="desktop-nav">${navLinks.map(x=>`<a href="index.html#${x.id}">${x.label}</a>`).join('')}</nav>
<a class="contact-cta" href="index.html#contact">Get in Touch</a>
</div>
</header>
<main class="project-page">
<div class="container">
<a class="back-link" href="index.html#work">‹ Back to projects</a>
<div class="project-title">
<span class="badge">${project.category}</span>
<h1>${project.title}</h1>
<code>${project.year}</code>
</div>
<img class="detail-image" src="${project.detailImage}" alt="${project.title}">
<div class="detail-card">
<div>
<p>${project.description}</p>
<div class="chips">${project.techStack.map(x=>`<span class="chip">${x}</span>`).join('')}</div>
</div>
<div>${list('Features',project.features)}${list('Outcomes',project.outcomes)}</div>
</div>
<div class="detail-actions">${project.githubUrl?`<a class="button dark" href="${project.githubUrl}" target="_blank">GitHub</a>`:''}${project.liveUrl?`<a class="button" href="${project.liveUrl}" target="_blank">Live Demo</a>`:''}</div>
</div>
</main>`;
