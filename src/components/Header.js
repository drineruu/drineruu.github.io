import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      // Match fixed header height so highlight tracks the section in view
      const offset = 96;
      let current = navigation[0].href;

      for (const item of navigation) {
        const el = document.querySelector(item.href);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) {
          current = item.href;
        }
      }

      // Near bottom of page → force Contact active
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;
      if (atBottom) {
        current = '#contact';
      }

      setActiveSection(current);
      setScrolled(window.scrollY > 50);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollToSection = href => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(href);
    setIsOpen(false);
  };

  const linkClass = (href, mobile = false) => {
    const isActive = activeSection === href;
    const base = mobile
      ? 'block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200'
      : 'px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2';

    if (isActive) {
      return `${base} ${
        mobile
          ? 'text-primary-400 bg-primary-500/10 rounded-md'
          : 'text-primary-400 border-primary-400'
      }`;
    }

    return `${base} ${
      mobile
        ? 'text-gray-300 hover:text-white'
        : 'text-gray-300 hover:text-white border-transparent'
    }`;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className='container-width' aria-label='Primary'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <h1 className='ml-10 text-xl font-bold text-white'>
              <span className='text-primary-400'>Dry's</span> Portfolio
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              {navigation.map(item => (
                <button
                  key={item.name}
                  type='button'
                  onClick={() => scrollToSection(item.href)}
                  className={linkClass(item.href)}
                  aria-current={
                    activeSection === item.href ? 'page' : undefined
                  }
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              type='button'
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-300 hover:text-white p-2'
              aria-expanded={isOpen}
              aria-label='Toggle navigation menu'
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 bg-surface-900/95 backdrop-blur-sm rounded-lg mt-2'>
              {navigation.map(item => (
                <button
                  key={item.name}
                  type='button'
                  onClick={() => scrollToSection(item.href)}
                  className={linkClass(item.href, true)}
                  aria-current={
                    activeSection === item.href ? 'page' : undefined
                  }
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
