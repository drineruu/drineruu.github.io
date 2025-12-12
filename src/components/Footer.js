import React from 'react';
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Coffee,
  ArrowUp,
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: 'GitHub',
      url: 'https://github.com/drineruu',
      color: 'hover:text-gray-300',
    },
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jnerfamilaran',
      color: 'hover:text-blue-400',
    },
    {
      icon: <Instagram size={20} />,
      name: 'Instagram',
      url: 'https://instagram.com/dri.ner',
      color: 'hover:text-sky-400',
    },
    {
      icon: <Mail size={20} />,
      name: 'Email',
      url: 'mailto:jnerfamilaran@gmail.com',
      color: 'hover:text-green-400',
    },
  ];

  const scrollToSection = href => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 border-t border-gray-800'>
      <div className='container-width'>
        {/* Main Footer Content */}
        <div className='py-12 px-6'>
          <div className='grid md:grid-cols-4 gap-8'>
            {/* Brand Section */}
            <div className='md:col-span-2'>
              <h3 className='text-2xl font-bold text-white mb-4'>Driner</h3>
              <p className='text-gray-400 mb-6 max-w-md'>
                Full Stack Developer passionate about creating innovative web
                solutions and exceptional user experiences. Available for
                freelance projects and full-time opportunities.
              </p>

              {/* Social Links */}
              <div className='flex space-x-4'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className='text-lg font-semibold text-white mb-4'>
                Quick Links
              </h4>
              <ul className='space-y-2'>
                {navigation.map(item => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className='text-gray-400 hover:text-white transition-colors duration-200 text-sm'
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className='text-lg font-semibold text-white mb-4'>
                Services
              </h4>
              <ul className='space-y-2 text-sm text-gray-400'>
                <li>Web Development</li>
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>API Development</li>
                <li>Database Design</li>
                <li>Technical Consulting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='py-6 border-t border-gray-800'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center text-gray-400 text-sm mb-4 md:mb-0'>
              <span>© {currentYear} Driner • </span>
              <Coffee size={16} className='mx-2 text-blue-400 fill-current' />
            </div>

            <div className='flex items-center space-x-6'>
              <a
                href='/privacy'
                className='text-gray-400 hover:text-white text-sm transition-colors duration-200'
              >
                Privacy Policy
              </a>
              <a
                href='/terms'
                className='text-gray-400 hover:text-white text-sm transition-colors duration-200'
              >
                Terms of Service
              </a>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className='bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-200'
                title='Back to top'
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Footer Info */}
        <div className='py-4 border-t border-gray-800'>
          <div className='text-center'>
            <p className='text-xs text-gray-500'>
              This portfolio is open source and available on{' '}
              <a
                href='https://github.com/drineruu/drineruu.github.io'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 hover:text-blue-300 transition-colors duration-200'
              >
                GitHub
              </a>
              . Built with React, Tailwind CSS, and deployed on GitHub Pages.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
