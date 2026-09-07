import React from 'react';
import { ExternalLink, Github, Play, Sparkles } from 'lucide-react';

// Served from /public so CRA's SVGR doesn't choke on undraw namespace tags
const projectImg = file => `${process.env.PUBLIC_URL}/images/projects/${file}`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Document Processing Web Application',
      description:
        'A web application that allows users to upload and process documents. Built with modern web technologies for optimal performance.',
      technologies: ['Laravel', 'MySQL', 'phpMyAdmin'],
      image: projectImg('undraw_ai-document-analysis_1sq9.svg'),
      demoUrl: 'https://github.com/drineruu/driner-document-processing',
      githubUrl: 'https://github.com/drineruu/driner-document-processing',
      challenges:
        'This project is a web application that allows users to upload and process documents. It is built with Laravel and MySQL.',
    },
    {
      id: 2,
      title: 'UB Telecare',
      description:
        'Telemedicine system with multiple user roles and video call functionalities',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
      image: projectImg('undraw_medicine_hqqg.svg'),
      demoUrl: 'https://github.com/drineruu/ub-telecare',
      githubUrl: 'https://github.com/drineruu/ub-telecare',
      challenges:
        'This project is a telemedicine system with multiple user roles and video call functionalities. It is built with Vue.js and Laravel.',
    },
    {
      id: 3,
      title: 'Succulent Alpha Order Management System (SAOMS)',
      description: 'A simple e-commerce system for succulent products',
      technologies: ['Laravel', 'MySQL', 'phpMyAdmin'],
      image: projectImg('undraw_plants_md5c.svg'),
      demoUrl: 'https://github.com/drineruu/saoms',
      githubUrl: 'https://github.com/drineruu/saoms',
      challenges:
        'This project is a simple e-commerce system for succulent products. It is built with Laravel and MySQL.',
    },
    {
      id: 4,
      title: 'Baguio Transient Booking Automation',
      description:
        'A custom Google Workspace workflow that takes guest booking answers from Google Forms, processes them in Google Sheets, and automatically creates calendar events. This is used to manage bookings for a transient homestay in Baguio City.',
      technologies: [
        'Google Apps Script',
        'Google Forms',
        'Google Sheets',
        'Google Calendar',
      ],
      image: projectImg('undraw_calendar_8r6s.svg'),
      challenges:
        'Connecting Forms → Sheets → Calendar so each submission becomes a clean booking record and a calendar block without manual copy-paste, while keeping availability and stay dates accurate for the property.',
    },
  ];

  const cardWidth = 'w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]';

  return (
    <section id='projects' className='section-padding'>
      <div className='container-width'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Featured Projects
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Here are some of my recent projects that showcase my skills and
            experience in full-stack development
          </p>
        </div>

        <div className='flex flex-wrap justify-center gap-8'>
          {projects.map(project => (
            <div
              key={project.id}
              className={`card group hover:scale-105 transition-all duration-300 ${cardWidth}`}
            >
              {/* Temporary sample snapshot */}
              <div className='h-48 bg-surface-800/80 rounded-t-lg flex items-center justify-center overflow-hidden border-b border-surface-600 p-6'>
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className='max-h-full max-w-full object-contain'
                />
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors'>
                  {project.title}
                </h3>

                <p className='text-gray-400 mb-4 text-sm leading-relaxed'>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className='mb-4'>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className='bg-primary-600/20 text-primary-300 px-2 py-1 rounded text-xs font-medium'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div className='mb-6'>
                  <h4 className='text-sm font-semibold text-gray-300 mb-2'>
                    Key Challenge:
                  </h4>
                  <p className='text-xs text-gray-500'>{project.challenges}</p>
                </div>

                {/* Links */}
                {(project.demoUrl || project.githubUrl) && (
                  <div className='flex gap-3'>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors duration-200'
                      >
                        <Play size={16} />
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 bg-surface-700 hover:bg-surface-600 text-white px-3 py-2 rounded text-sm font-medium transition-colors duration-200'
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Coming soon / in the works */}
          <div
            className={`${cardWidth} rounded-lg border border-dashed border-primary-500/40 bg-gradient-to-br from-surface-800/40 to-primary-950/40 p-6 flex flex-col items-center justify-center text-center min-h-[28rem] hover:border-primary-400/60 transition-colors duration-300`}
          >
            <div className='mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500/10 text-primary-400'>
              <Sparkles size={28} />
            </div>
            <p className='text-xs uppercase tracking-[0.2em] text-primary-400/80 mb-3'>
              In the works
            </p>
            <h3 className='text-xl font-bold mb-3 text-gray-100'>
              Something&apos;s brewing
            </h3>
            <p className='text-gray-400 text-sm leading-relaxed max-w-xs'>
              New builds, automations, and experiments are on the desk. Check
              back soon — or peek at what&apos;s already shipping on GitHub.
            </p>
            <div className='mt-6 flex flex-wrap justify-center gap-2'>
              {['Ideas', 'Drafts', 'Shipping soon'].map(tag => (
                <span
                  key={tag}
                  className='bg-primary-600/10 text-primary-300/80 px-2 py-1 rounded text-xs font-medium border border-primary-500/20'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className='text-center mt-12'>
          <a
            href='https://github.com/drineruu'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 btn-secondary px-6 py-3'
          >
            <ExternalLink size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
