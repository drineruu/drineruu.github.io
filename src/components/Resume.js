import React from 'react';
import { Download, MapPin, Calendar, Briefcase } from 'lucide-react';

const Resume = () => {
  const workExperience = [
    {
      title: 'Software Engineer',
      company: 'YNS Philippines Inc.',
      location: 'Makati City, Philippines',
      period: 'June 2023 - Present',
      responsibilities: [
        'Contributed to a large-scale project managing garbage collection, contracts, routes, employees, CO₂ emissions, and collection sites.',
        'Skilled in full-stack development using Laravel, Vue.js, JavaScript, Python, MySQL, Node.js, phpMyAdmin, and Docker.',
        'Built and maintained complex backend logic for route, site, employee, schedule, and contract management.',
        'Improved code quality through active code reviews and regular performance optimizations.',
        'Refactored legacy code to reduce execution time and streamline system processes.',
      ],
    },
    {
      title: 'Software Developer Intern',
      company: 'Commission on Higher Education (CAR)',
      location: 'Baguio City, Philippines',
      period: 'January 2023 - May 2023',
      responsibilities: [
        'Developed a web app for tracking employee leave and managing file documentation, boosting efficiency and transparency.',
        'Maintained and debugged a scholarship system to ensure secure and reliable operations.',
        'Handled software installations, upgrades, and seamless integration of system components.',
        'Supported network administration and resolved IT issues to maintain system stability.',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Wisdom EStudy Books',
      location: 'Baguio City, Philippines',
      period: '2022 - 2022',
      responsibilities: [
        'Part time frontend developer for a startup company.',
        'Updated frontend of the website to improve user experience.',
        'Optimized website for better performance and SEO.',
      ],
    },
  ];

  return (
    <section id='resume' className='section-padding'>
      <div className='container-width'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Resume</h2>
          <p className='text-gray-400 mb-8'>
            Download my full resume or view my work experience below
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='/driner-resume.pdf'
              download
              className='inline-flex items-center gap-2 btn-primary px-6 py-3'
            >
              <Download size={20} />
              Download Resume (PDF)
            </a>
          </div>
        </div>

        {/* Work Experience */}
        <div className='max-w-4xl mx-auto'>
          <h3 className='text-2xl font-bold mb-8 text-primary-400 text-center'>
            Work Experience
          </h3>

          <div className='space-y-8'>
            {workExperience.map((job, index) => (
              <div key={index} className='card p-6 relative'>
                {/* Timeline dot */}
                <div className='absolute -left-4 top-8 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center'>
                  <Briefcase size={16} className='text-white' />
                </div>

                <div className='ml-8'>
                  <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                    <div>
                      <h4 className='text-xl font-bold text-white mb-1'>
                        {job.title}
                      </h4>
                      <p className='text-primary-400 font-medium'>
                        {job.company}
                      </p>
                    </div>
                    <div className='flex flex-col md:items-end mt-2 md:mt-0'>
                      <div className='flex items-center text-gray-400 mb-1'>
                        <Calendar size={16} className='mr-2' />
                        <span className='text-sm'>{job.period}</span>
                      </div>
                      <div className='flex items-center text-gray-400'>
                        <MapPin size={16} className='mr-2' />
                        <span className='text-sm'>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className='space-y-2'>
                    {job.responsibilities.map((responsibility, idx) => (
                      <li
                        key={idx}
                        className='text-gray-300 text-sm flex items-start'
                      >
                        <span className='text-primary-400 mr-2 mt-1'>•</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className='mt-16 max-w-4xl mx-auto'>
          <h3 className='text-2xl font-bold mb-8 text-primary-400 text-center'>
            Key Achievements
          </h3>

          <div className='grid md:grid-cols-3 gap-6'>
            <div className='card p-6 text-center'>
              <div className='text-3xl font-bold text-primary-400 mb-2'>5+</div>
              <p className='text-gray-300'>Projects Completed</p>
            </div>
            <div className='card p-6 text-center'>
              <div className='text-3xl font-bold text-primary-400 mb-2'>3+</div>
              <p className='text-gray-300'>Years Experience</p>
            </div>
            <div className='card p-6 text-center'>
              <div className='text-3xl font-bold text-primary-400 mb-2'>
                80%
              </div>
              <p className='text-gray-300'>Performance Improvement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
