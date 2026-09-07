import React from 'react';
import {
  Code,
  Database,
  FileSpreadsheet,
  Globe,
  Server,
  Settings,
  Zap,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: [
        { name: 'PHP', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 75 },
        { name: 'Kotlin', level: 75 },
        { name: 'Java', level: 70 },
      ],
    },
    {
      title: 'Frontend Frameworks',
      icon: <Globe size={24} />,
      skills: [
        { name: 'Vue.js', level: 90 },
        { name: 'jQuery', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Bootstrap', level: 80 },
      ],
    },
    {
      title: 'Backend Technologies',
      icon: <Server size={24} />,
      skills: [
        { name: 'Laravel', level: 95 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Apache', level: 70 },
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 70 },
      ],
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: [
        { name: 'MySQL', level: 95 },
        { name: 'Redis', level: 80 },
        { name: 'Firebase', level: 70 },
        { name: 'MongoDB', level: 70 },
      ],
    },
    {
      title: 'Development Tools',
      icon: <Settings size={24} />,
      skills: [
        { name: 'Version Control (Git, GitHub, Bitbucket)', level: 95 },
        { name: 'Docker', level: 95 },
        { name: 'Postman', level: 90 },
        { name: 'VS Code and Cursor AI', level: 95 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Zap size={24} />,
      skills: [
        { name: 'Linux', level: 80 },
        { name: 'GitHub Actions', level: 75 },
        { name: 'AWS', level: 70 },
      ],
    },
    {
      title: 'Google Workspace & Automation',
      icon: <FileSpreadsheet size={24} />,
      skills: [
        { name: 'Google Apps Script', level: 90 },
        { name: 'Google Sheets / Excel', level: 90 },
        { name: 'Google Forms', level: 90 },
        { name: 'Google Docs', level: 85 },
        { name: 'Google Calendar automation', level: 85 },
      ],
    },
  ];

  return (
    <section id='skills' className='section-padding bg-surface-800/50'>
      <div className='container-width'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Skills & Technologies
          </h2>
          <p className='text-gray-400'>Technologies and tools I work with</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skillCategories.map((category, index) => (
            <div key={index} className='card p-6'>
              <div className='flex items-center mb-6'>
                <div className='text-primary-400 mr-3'>{category.icon}</div>
                <h3 className='text-xl font-bold'>{category.title}</h3>
              </div>

              <div className='space-y-4'>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='text-sm font-medium text-gray-300'>
                        {skill.name}
                      </span>
                      <span className='text-xs text-gray-500'>
                        {skill.level}%
                      </span>
                    </div>
                    <div className='w-full bg-surface-700 rounded-full h-2'>
                      <div
                        className='h-2 rounded-full bg-primary-500 transition-all duration-1000'
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
