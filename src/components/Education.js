import React from 'react';
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Baguio',
      location: 'Baguio City, Philippines',
      period: '2019 - 2023',
      gpa: 'Cum Laude',
      relevant: [
        'Cum Laude',
        "Dean's Lister",
        'Best Thesis',
        'Data Structures & Algorithms',
        'Database Systems',
        'Web Development',
        'Software Engineering',
      ],
    },
    {
      degree: 'Science, Technology, Engineering and Mathematics (STEM)',
      institution: 'University of the Cordilleras',
      location: 'Baguio City, Philippines',
      period: '2017 - 2019',
      gpa: 'With Honors',
      relevant: [
        'Excel Sheet',
        'Powerpoint',
        'Word',
        'Internet',
        'Microsoft Office',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Civil Service Examination - Professional Level Passer',
      issuer: 'Civil Service Commission',
      date: '2023',
      credentialId: 'CSC-2023',
      verifyUrl: '',
      logo: 'bg-gradient-to-br from-green-500 to-green-600',
    },
    {
      name: 'Certificate of Excellence (Internship)',
      issuer: 'Commission on Higher Education (CAR)',
      date: '2023',
      credentialId: 'COE-2023',
      verifyUrl: '',
      logo: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    },
    {
      name: 'Google I/O Extended 2022: Web Edition BCDxBGOxCDO',
      issuer: 'Google',
      date: '2022',
      credentialId: 'BCDxBGOxCDO',
      verifyUrl: '',
      logo: 'bg-gradient-to-br from-primary-500 to-primary-800',
    },
  ];

  return (
    <section id='education' className='section-padding bg-surface-800/50'>
      <div className='container-width'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Education & Certifications
          </h2>
          <p className='text-gray-400'>
            My academic background and professional certifications
          </p>
        </div>

        {/* Education */}
        <div className='max-w-4xl mx-auto mb-20'>
          <h3 className='text-2xl font-bold mb-8 text-primary-400 text-center'>
            Education
          </h3>

          <div className='space-y-6'>
            {education.map((edu, index) => (
              <div key={index} className='card p-6'>
                <div className='flex items-start'>
                  <div className='bg-primary-600 p-3 rounded-lg mr-4 flex-shrink-0'>
                    <GraduationCap size={24} className='text-white' />
                  </div>

                  <div className='flex-grow'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-3'>
                      <div>
                        <h4 className='text-xl font-bold text-white mb-1'>
                          {edu.degree}
                        </h4>
                        <p className='text-primary-400 font-medium'>
                          {edu.institution}
                        </p>
                        <p className='text-gray-400 text-sm'>{edu.location}</p>
                      </div>
                      <div className='text-right mt-2 md:mt-0'>
                        <div className='flex items-center text-gray-400 mb-1 md:justify-end'>
                          <Calendar size={16} className='mr-2' />
                          <span className='text-sm'>{edu.period}</span>
                        </div>
                        <p className='text-green-400 text-sm font-medium'>
                          {edu.gpa}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h5 className='text-sm font-semibold text-gray-300 mb-2'>
                        Relevant Coursework:
                      </h5>
                      <div className='flex flex-wrap gap-2'>
                        {edu.relevant.map((course, idx) => (
                          <span
                            key={idx}
                            className='bg-surface-700 text-gray-300 px-2 py-1 rounded text-xs'
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className='max-w-6xl mx-auto'>
          <h3 className='text-2xl font-bold mb-8 text-primary-400 text-center'>
            Professional Certifications
          </h3>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {certifications.map((cert, index) => (
              <div
                key={index}
                className='card p-6 hover:scale-105 transition-transform duration-300'
              >
                <div className='flex items-start mb-4'>
                  <div
                    className={`w-12 h-12 ${cert.logo} rounded-lg mr-4 flex items-center justify-center flex-shrink-0`}
                  >
                    <Award size={24} className='text-white' />
                  </div>

                  <div className='flex-grow'>
                    <h4 className='text-lg font-bold text-white mb-1'>
                      {cert.name}
                    </h4>
                    <p className='text-primary-400 text-sm font-medium'>
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className='space-y-2 mb-4'>
                  <div className='flex items-center text-gray-400'>
                    <Calendar size={16} className='mr-2' />
                    <span className='text-sm'>Issued: {cert.date}</span>
                  </div>
                  <p className='text-xs text-gray-500'>
                    Credential ID: {cert.credentialId}
                  </p>
                </div>

                <a
                  href={cert.verifyUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors duration-200'
                >
                  <ExternalLink size={16} />
                  Verify Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
